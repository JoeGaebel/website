import React from "react"

const Navigation = () => <nav className="navbar is-transparent is-fixed-top is-flex is-justify-content-center is-align-items-center is-hidden-touch">
    <div>
        <div className="navbar-menu">
            <div className="navbar-start is-size-5 has-text-weight-semibold">
                <a className="navbar-item" href="#experience">
                    Experience
                </a>
                <a className="navbar-item" href="#reviews">
                    Reviews
                </a>
                <a className="navbar-item" href="#projects">
                    Projects
                </a>
                <a className="navbar-item" href="#education">
                    Education
                </a>
                <a className="navbar-item" href="#contact">
                    Contact me
                </a>
            </div>
        </div>
    </div>
</nav>

export default Navigation
