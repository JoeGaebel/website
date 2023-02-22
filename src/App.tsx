import React, {Dispatch, SetStateAction, useCallback, useEffect, useRef, useState} from 'react';
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import HeaderSection from "./HeaderSection";
import Navigation from "./Navigation";
import ProjectSection from "./ProjectSection";
import ReviewsSection from "./ReviewsSection";
import VolunteeringSection from './VolunteeringSection';
import ExperienceSection from "./WorkExperience/ExperienceSection";
import mixpanel from 'mixpanel-browser';
import {trackHomePageVisited, trackNearBottom} from "./InterestTracking";

mixpanel.init('563caf1e7fe832231b8423b9ade38734', {debug: true, ignore_dnt: true});

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
    trackHomePageVisited()
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

const SectionContainer = ({children}: { children: JSX.Element[] }): JSX.Element => {
    const shouldSendBottomEvent = useRef(true);

    const getDocumentHeight = useCallback(() => {
        const body = document.body
        const html = document.documentElement

        return Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (shouldSendBottomEvent.current && window.scrollY > getDocumentHeight() - 2000) {
                trackNearBottom()
                shouldSendBottomEvent.current = false
            }
        });
    }, [])

    return <div className="container">
        {children}
    </div>
}