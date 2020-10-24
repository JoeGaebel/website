import React from "react";
import {Section, SectionHeader} from "../Layout";
import PivotalExperience from "./PivotalExperience";
import MavenlinkExperience from "./MavenlinkExperience";
import FullSailExperience from "./FullSailExperience";
import SightlineExperience from "./SightlineExperience";


const ExperienceSection = () => {
    return <Section>
        <SectionHeader>Experience</SectionHeader>
        <PivotalExperience/>
        <MavenlinkExperience/>
        <FullSailExperience/>
        <SightlineExperience/>
    </Section>
}

export default ExperienceSection


