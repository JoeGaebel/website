import React from 'react';
import HeaderSection from "./HeaderSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import styled from "styled-components";

function App() {
  return (
    <SectionContainer>
      <HeaderSection/>
      <ExperienceSection/>
      <ProjectSection/>
      <EducationSection/>
      <ContactSection/>
    </SectionContainer>
  );
}

export default App;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;    
`
