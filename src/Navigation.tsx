import React from "react"

const Navigation = () => <nav className="navbar is-transparent is-fixed-top is-flex is-justify-content-center is-align-items-center is-hidden-mobile">
    <div>
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="#experience">
                    Experience
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
