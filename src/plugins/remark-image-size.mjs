import {visit} from "unist-util-visit"
import {readFileSync} from "fs"
import {join} from "path"

const PUBLIC_DIR = join(process.cwd(), "public")

function getWebpDimensions(buffer) {
    // RIFF header check
    if (buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") {
        return null
    }

    const chunk = buffer.toString("ascii", 12, 16)

    if (chunk === "VP8 ") {
        // Lossy
        const width = buffer.readUInt16LE(26) & 0x3fff
        const height = buffer.readUInt16LE(28) & 0x3fff
        return {width, height}
    }

    if (chunk === "VP8L") {
        // Lossless
        const bits = buffer.readUInt32LE(21)
        const width = (bits & 0x3fff) + 1
        const height = ((bits >> 14) & 0x3fff) + 1
        return {width, height}
    }

    if (chunk === "VP8X") {
        // Extended
        const width = 1 + (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16))
        const height = 1 + (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16))
        return {width, height}
    }

    return null
}

export function remarkImageSize() {
    let imageIndex = 0

    return (tree) => {
        imageIndex = 0
        visit(tree, "image", (node, index, parent) => {
            const src = node.url
            const alt = node.alt || ""

            let width = null
            let height = null

            if (src.startsWith("/")) {
                try {
                    const filePath = join(PUBLIC_DIR, src)
                    const buffer = readFileSync(filePath)
                    const dims = getWebpDimensions(buffer)
                    if (dims) {
                        width = dims.width
                        height = dims.height
                    }
                } catch {}
            }

            const loading = imageIndex === 0 ? "eager" : "lazy"
            const sizeAttrs = width && height ? ` width="${width}" height="${height}"` : ""

            parent.children[index] = {
                type: "html",
                value: `<img src="${src}" alt="${alt.replace(/"/g, "&quot;")}" loading="${loading}"${sizeAttrs} />`,
            }

            imageIndex++
        })
    }
}
