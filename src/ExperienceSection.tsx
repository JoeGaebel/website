import React from "react";
import {Section, SectionHeader} from "./Layout";
import SeniorPivotalExperience from "./SeniorPivotalExperience";
import MidPivotalExperience from "./MidPivotalExperience";


const ExperienceSection = () => {
    return <Section>
        <SectionHeader>Experience</SectionHeader>

        <SeniorPivotalExperience/>
        <MidPivotalExperience/>
    </Section>
}

export default ExperienceSection


