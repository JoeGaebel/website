import React from "react"
import {Link} from "react-router-dom"
import posts from "./posts"
import "./Blog.scss"

const BlogPage = () => {
    return <div className="blog-listing section">
        <h1 className="blog-listing-title">Blog</h1>
        <div>
            {posts.map(post => (
                <div key={post.slug} className="blog-listing-item">
                    <Link to={`/blog/${post.slug}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p className="post-date">{post.date}</p>
                    <p className="post-description">{post.description}</p>
                </div>
            ))}
        </div>
    </div>
}

export default BlogPage
