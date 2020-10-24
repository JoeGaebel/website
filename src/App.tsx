import React, {FunctionComponent} from 'react';
import HeaderSection from "./HeaderSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";

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

const SectionContainer: FunctionComponent = ({children}) => <div className="container">
    {children}
</div>
