export interface Post {
    slug: string
    title: string
    date: string
    description: string
}

const posts: Post[] = [
    {
        slug: "hello-world",
        title: "Hello World",
        date: "2026-02-23",
        description: "My first blog post."
    }
]

export default posts
