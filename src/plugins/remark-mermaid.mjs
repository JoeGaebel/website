import {renderMermaidSVG} from "beautiful-mermaid"
import {visit} from "unist-util-visit"

function stripMermaidConfig(code) {
    // Strip YAML front matter config blocks (---\nconfig: ...\n---)
    return code.replace(/^---[\s\S]*?---\n*/m, "")
}

export function remarkMermaid() {
    return (tree) => {
        visit(tree, "code", (node, index, parent) => {
            if (node.lang === "mermaid") {
                try {
                    const cleaned = stripMermaidConfig(node.value)
                    const svg = renderMermaidSVG(cleaned)
                    parent.children[index] = {type: "html", value: svg}
                } catch (e) {
                    console.warn(`[remark-mermaid] Failed to render mermaid diagram: ${e.message}`)
                }
            }
        })
    }
}
