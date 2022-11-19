import React from "react";
import {Section, SectionHeader} from "../Layout";
import PivotalExperience from "./PivotalExperience";
import MavenlinkExperience from "./MavenlinkExperience";
import SightlineExperience from "./SightlineExperience";
import PathzeroExperience from "./PathzeroExperience";


const ExperienceSection = () => {
    return <Section id="experience">
        <SectionHeader>Experience</SectionHeader>
        <PathzeroExperience/>
        <PivotalExperience/>
        <MavenlinkExperience/>
        <SightlineExperience/>
    </Section>
}

export default ExperienceSection


