import {defineConfig} from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
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
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled: false,
    },
})
