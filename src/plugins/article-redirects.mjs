import {readFileSync, readdirSync} from "node:fs"
import {join, basename} from "node:path"

function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/)
    if (!match) return {}
    const frontmatter = {}
    let currentKey = null
    let currentArray = null
    for (const line of match[1].split("\n")) {
        const arrayItem = line.match(/^\s+-\s+(.+)/)
        if (arrayItem && currentKey) {
            currentArray.push(arrayItem[1])
        } else {
            if (currentKey && currentArray) {
                frontmatter[currentKey] = currentArray
            }
            const keyValue = line.match(/^(\w+):\s*$/)
            if (keyValue) {
                currentKey = keyValue[1]
                currentArray = []
            } else {
                currentKey = null
                currentArray = null
            }
        }
    }
    if (currentKey && currentArray) {
        frontmatter[currentKey] = currentArray
    }
    return frontmatter
}

export function articleRedirects() {
    return {
        name: "article-redirects",
        hooks: {
            "astro:config:setup"({updateConfig}) {
                const articlesDir = join(process.cwd(), "src/content/articles")
                const files = readdirSync(articlesDir).filter(f => f.endsWith(".md"))
                const redirects = {}
                for (const file of files) {
                    const content = readFileSync(join(articlesDir, file), "utf-8")
                    const frontmatter = parseFrontmatter(content)
                    const slug = basename(file, ".md")
                    for (const previousSlug of frontmatter.previousSlugs ?? []) {
                        redirects[`/articles/${previousSlug}/`] = `/articles/${slug}/`
                    }
                }
                updateConfig({redirects})
            },
        },
    }
}
