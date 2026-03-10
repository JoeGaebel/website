import {visit} from "unist-util-visit"

const GITHUB_REPO_RE = /^https:\/\/github\.com\/([^/]+)\/([^/\s#?]+)\/?$/

export function remarkGithubCard() {
    return async (tree) => {
        const replacements = []

        visit(tree, "paragraph", (node, index, parent) => {
            if (node.children.length !== 1) return
            const child = node.children[0]

            // Handle bare URLs (parsed as text)
            if (child.type === "text") {
                const match = child.value.trim().match(GITHUB_REPO_RE)
                if (match) {
                    replacements.push({parent, index, owner: match[1], repo: match[2]})
                }
                return
            }

            // Handle autolinked URLs
            if (child.type === "link") {
                const match = child.url.match(GITHUB_REPO_RE)
                if (match && (!child.children.length || child.children[0]?.value === child.url)) {
                    replacements.push({parent, index, owner: match[1], repo: match[2]})
                }
            }
        })

        const results = await Promise.all(
            replacements.map(async ({owner, repo}) => {
                try {
                    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
                    if (!res.ok) return null
                    return await res.json()
                } catch {
                    return null
                }
            })
        )

        for (let i = replacements.length - 1; i >= 0; i--) {
            const {parent, index, owner, repo} = replacements[i]
            const data = results[i]

            const description = data?.description ? escapeHtml(data.description) : ""
            const language = data?.language || ""
            const stars = data?.stargazers_count ?? 0
            const forks = data?.forks_count ?? 0
            const url = `https://github.com/${owner}/${repo}`

            const languageDot = language
                ? `<span class="github-card-lang"><span class="github-card-lang-dot"></span>${escapeHtml(language)}</span>`
                : ""

            const starsHtml = stars > 0
                ? `<span class="github-card-stat"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"></path></svg>${stars}</span>`
                : ""

            const forksHtml = forks > 0
                ? `<span class="github-card-stat"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 0-1.5 0v.878H6.75v-.878a2.25 2.25 0 1 0-1.5 0ZM7.25 14.5a.75.75 0 0 0 1.5 0v-2.878a2.25 2.25 0 1 0-1.5 0V14.5z"></path></svg>${forks}</span>`
                : ""

            parent.children[index] = {
                type: "html",
                value: `<a href="${url}" class="github-card" target="_blank" rel="noopener noreferrer">
  <div class="github-card-header">
    <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
    <span class="github-card-repo">${escapeHtml(owner)}/${escapeHtml(repo)}</span>
  </div>
  ${description ? `<p class="github-card-desc">${description}</p>` : ""}
  <div class="github-card-meta">
    ${languageDot}${starsHtml}${forksHtml}
  </div>
</a>`,
            }
        }
    }
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
