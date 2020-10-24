import React from "react";
import {Section, SectionHeader} from "./Layout";
import PivotalExperience from "./PivotalExperience";
import MavenlinkExperience from "./MavenlinkExperience";


const ExperienceSection = () => {
    return <Section>
        <SectionHeader>Experience</SectionHeader>
        <PivotalExperience/>
        <MavenlinkExperience/>
    </Section>
}

export default ExperienceSection


