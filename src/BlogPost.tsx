import React, {useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism"
import posts from "./posts"
import Mermaid from "./Mermaid"
import "./Blog.scss"

const BlogPost = () => {
    const {slug} = useParams<{ slug: string }>()
    const [content, setContent] = useState<string | null>(null)
    const [error, setError] = useState(false)

    const post = posts.find(p => p.slug === slug)

    useEffect(() => {
        if (!slug) return
        fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`)
            .then(res => {
                if (!res.ok) throw new Error("Not found")
                return res.text()
            })
            .then(setContent)
            .catch(() => setError(true))
    }, [slug])

    if (error || !post) {
        return <div className="blog-post section">
            <h1 className="title is-3">Post not found</h1>
            <Link to="/blog">Back to blog</Link>
        </div>
    }

    if (content === null) {
        return <div className="blog-post section">
            <progress className="progress is-small is-primary" max="100"/>
        </div>
    }

    return <div className="blog-post section">
        <Link className="back-link" to="/blog">&larr; Back to blog</Link>
        <p className="post-date">{post.date}</p>
        <div className="content">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({node, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || "")
                        const inline = !match

                        if (match && match[1] === "mermaid") {
                            return <Mermaid chart={String(children).replace(/\n$/, "")}/>
                        }

                        return !inline ? (
                            <SyntaxHighlighter
                                style={oneDark}
                                language={match![1]}
                                PreTag="div"
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    </div>
}

export default BlogPost
