import React, {Dispatch, FunctionComponent, SetStateAction, useState} from 'react';
import HeaderSection from "./HeaderSection";
import ExperienceSection from "./WorkExperience/ExperienceSection";
import ProjectSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import Navigation from "./Navigation";
import ReviewsSection from "./ReviewsSection";

export interface AppState {
    showPivotalClients: boolean
    showReviews: boolean
}

const initialState = {
    showPivotalClients: false,
    showReviews: false
}

export const StateContext = React.createContext<[AppState?, Dispatch<SetStateAction<AppState>>?]>([]);

function App() {
    const appState = useState<AppState>(initialState)

    return (
        <StateContext.Provider value={appState}>
            <Navigation/>
            <SectionContainer>
                <HeaderSection/>
                <ExperienceSection/>
                <ReviewsSection/>
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
