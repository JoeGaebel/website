import React, {Dispatch, FunctionComponent, SetStateAction, useState} from 'react';
import HeaderSection from "./HeaderSection";
import ExperienceSection from "./WorkExperience/ExperienceSection";
import ProjectSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";

export interface AppState {
    [key: string]: boolean
}

const initialState = {
    pivotalExperience: false
}

export const StateContext = React.createContext<[AppState?, Dispatch<SetStateAction<AppState>>?]>([]);

function App() {
    const appState = useState<AppState>(initialState)

    return (
        <StateContext.Provider value={appState}>
            <SectionContainer>
                <HeaderSection/>
                <ExperienceSection/>
                <ProjectSection/>
                <EducationSection/>
                <ContactSection/>
            </SectionContainer>
        </StateContext.Provider>
    );
}

export default App;

const SectionContainer: FunctionComponent = ({children}) => <div className="container">
    {children}
</div>
