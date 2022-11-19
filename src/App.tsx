import React, { Dispatch, SetStateAction, useState } from 'react';
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import HeaderSection from "./HeaderSection";
import Navigation from "./Navigation";
import ProjectSection from "./ProjectSection";
import ReviewsSection from "./ReviewsSection";
import VolunteeringSection from './VolunteeringSection';
import ExperienceSection from "./WorkExperience/ExperienceSection";

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
                <VolunteeringSection/>
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

const SectionContainer = ({children}: {children: JSX.Element[]}): JSX.Element => <div className="container">
    {children}
</div>
