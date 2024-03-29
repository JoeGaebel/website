import React, {useCallback, useEffect, useState} from "react";
import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { fadeIn } from 'react-animations';
import joe from './projects/joe.jpg';
import { StyledImageContainer } from "./WorkExperience/WorkExperience";
// @ts-ignore
import missionStatement from './projects/mission-statement.pdf';
import {trackInterestInLink} from "./InterestTracking";

const slideInAnimation = keyframes`${fadeIn}`;

const SlideInDiv = styled.div`
    animation: 1.5s ${slideInAnimation};
`;

const HeaderSection = () => {
    const trackInterest = useCallback(() => {
        trackInterestInLink('Mission Statement from top')
    }, [])

    return <div className="is-flex is-flex-wrap-wrap" style={{margin: "10rem 1rem"}}>
        <StyledImageContainer>
            <figure className="image is-128x128 mr-5 mt-3">
                <img className="is-rounded" src={joe}/>
            </figure>
        </StyledImageContainer>
        <div className="mt-4">
            <div className="title header-font is-size-1" style={{marginBottom: "0.5rem"}}>Joe Gaebel</div>
            <div className="subtitle header-font is-size-4 is-flex is-flex-wrap-wrap">
                <div>Full Stack Engineer,&nbsp;</div>
                <SlidingList/>
            </div>
            <div className="subtitle header-font is-size-6 mt-2">Read my <a
                className="has-text-info"
                onClick={trackInterest}
                href={missionStatement}
                target="_blank" rel="noreferrer"
            >Mission Statement</a></div>
        </div>
    </div>
}

const SlidingList = () => {
    const proofs = [
        "Surfer",
        "Canadian",
        "Fitness Geek",
        "Amateur Sailor",
        "Meditator",
        "Motorcyclist",
        "Adventurer",
        "Kombucha Lover"
    ]

    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % proofs.length)
        }, 4500)

        return () => clearInterval(timer)
    }, [setIndex, proofs.length])

    return <SlideInDiv key={index}>{proofs[index]}</SlideInDiv>
}

export default HeaderSection
