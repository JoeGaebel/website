import React from "react"
import sailboat from "./icons/sailboat.svg"

const Navigation = () => <nav className="navbar is-transparent is-fixed-top">
    <div className="navbar-brand">
        <img src={sailboat} className="ml-2" width="45px"/>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
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
</nav>

export default Navigation
