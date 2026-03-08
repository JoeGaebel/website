import {defineConfig} from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import {remarkMermaid} from "./src/plugins/remark-mermaid.mjs"

export default defineConfig({
    site: "https://www.joegaebel.com",
    output: "static",
    integrations: [react(), sitemap()],
    markdown: {
        remarkPlugins: [remarkMermaid],
        shikiConfig: {
            theme: "one-dark-pro",
        },
    },
    devToolbar: {
        enabled: false,
    },
})
