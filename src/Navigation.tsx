import React from "react"
import {Link} from "react-router-dom"

const Navigation = () => <nav className="navbar is-transparent is-fixed-top is-flex is-justify-content-center is-align-items-center is-hidden-touch">
    <div>
        <div className="navbar-menu">
            <div className="navbar-start is-size-5 has-text-weight-semibold">
                <a className="navbar-item" href="#volunteering">
                    Volunteering
                </a>
                <a className="navbar-item" href="#experience">
                    Experience
                </a>
                <a className="navbar-item" href="#reviews">
                    Reviews
                </a>
                <a className="navbar-item" href="#education">
                    Education
                </a>
                <a className="navbar-item" href="#contact">
                    Contact me
                </a>
                <Link className="navbar-item" to="/blog">
                    Blog
                </Link>
            </div>
        </div>
    </div>
</nav>

export default Navigation
