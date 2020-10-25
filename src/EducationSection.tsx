import React from "react";
import {Section, SectionHeader, SectionText} from "./Layout";
import western from './logos/western.png'

const EducationSection = () => {
    return <Section id="education">
        <SectionHeader>Education</SectionHeader>
        <div className="is-flex is-flex-direction-row">
            <div className="mr-6">
                <img width="110px" src={western}/>
            </div>
            <div className="mt-1">
                <div className="subtitle is-size-3 mb-1">Western University</div>
                <div className="subtitle is-size-5 mb-1">Bachelors of Engineering Science: Software Engineering</div>
                <div className="subtitle is-size-6">London Ontario, Canada</div>
            </div>
        </div>
    </Section>
}

export default EducationSection
