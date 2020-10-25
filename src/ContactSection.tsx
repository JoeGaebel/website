import React from "react";
import {Section, SectionHeader} from "./Layout";
import joe from './projects/joe.jpg'
import sailboat from './icons/sailboat.svg'

const ContactSection = () => {
    return <Section id="contact">
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <SectionHeader>Let's Talk!</SectionHeader>
            <div className="card" style={{width: "500px"}}>
                <div className="card-image">
                    <figure className="image">
                        <img src={joe}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48 mt-3">
                                <img src={sailboat} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">Joe Gaebel</p>
                            <p className="subtitle is-6 mb-0"><a href="https://www.github.com/joegaebel">Github</a> | <a href="https://www.linkedin.com/in/joegaebel">LinkedIn</a></p>
                            <p className="subtitle is-6 mb-0">joe.gaebel@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
}



export default ContactSection
