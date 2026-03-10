import {defineConfig} from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import {remarkMermaid} from "./src/plugins/remark-mermaid.mjs"
import {remarkGithubCard} from "./src/plugins/remark-github-card.mjs"
import {remarkImageSize} from "./src/plugins/remark-image-size.mjs"

export default defineConfig({
    site: "https://www.joegaebel.com",
    output: "static",
    build: {
        inlineStylesheets: "always",
    },
    integrations: [react(), sitemap()],
    markdown: {
        remarkPlugins: [remarkMermaid, remarkGithubCard, remarkImageSize],
        shikiConfig: {
            theme: "one-dark-pro",
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled: false,
    },
})
