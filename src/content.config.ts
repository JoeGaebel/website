import {defineCollection, z} from "astro:content"
import {glob} from "astro/loaders"

const articles = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/articles"}),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        draft: z.boolean().optional(),
        previousSlugs: z.array(z.string()).optional(),
    }),
})

export const collections = {articles}
