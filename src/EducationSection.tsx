import React from "react";
import {Section, SectionHeader} from "./Layout";
import western from './logos/western.png'

const EducationSection = () => {
    return <Section id="education">
        <SectionHeader>Education</SectionHeader>
        <div className="columns">
            <div className="column has-text-centered">
                <img width="110px" src={western}/>
            </div>
            <div className="column is-three-fifths-desktop">
                <div className="subtitle is-size-3 mb-1">Western University</div>
                <div className="subtitle is-size-5 mb-1">Bachelors of Engineering Science: Software Engineering</div>
                <div className="subtitle is-size-6">London Ontario, Canada</div>
            </div>
        </div>
    </Section>
}

export default EducationSection
