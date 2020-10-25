import React from "react";
import {Section, SectionHeader} from "../Layout";
import PivotalExperience from "./PivotalExperience";
import MavenlinkExperience from "./MavenlinkExperience";
import SightlineExperience from "./SightlineExperience";


const ExperienceSection = () => {
    return <Section id="experience">
        <SectionHeader>Experience</SectionHeader>
        <PivotalExperience/>
        <MavenlinkExperience/>
        <SightlineExperience/>
    </Section>
}

export default ExperienceSection


