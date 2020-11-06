import React, {useEffect, useState} from "react";
import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { merge, slideInLeft, fadeIn } from 'react-animations'

const fadeSlideIn = merge(fadeIn, slideInLeft)
const slideInAnimation = keyframes`${fadeSlideIn}`;

const SlideInDiv = styled.div`
  animation: 2s ${slideInAnimation};
`;

const HeaderSection = () => {
    return <div style={{margin: "10rem 1rem"}}>
        <div className="title header-font is-size-1" style={{marginBottom: "0.5rem"}}>Joe Gaebel</div>
        <div className="subtitle header-font is-size-4 is-flex is-flex-wrap-wrap">
            <div>Full Stack Engineer,&nbsp;</div>
            <div>Adventurer,&nbsp;</div>
            <SlidingList/>
        </div>
    </div>
}

const SlidingList = () => {
    const proofs = [
        "Surfer",
        "Fitness Geek",
        "Amateur Sailor",
        "Meditator",
        "Motorcycle Enthusiast",
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
