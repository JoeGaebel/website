import React, {useEffect, useState} from "react";
import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { merge, slideInLeft, fadeIn } from 'react-animations'

const fadeSlideIn = merge(fadeIn, slideInLeft)
const slideInAnimation = keyframes`${fadeSlideIn}`;

const SlideInDiv = styled.div`
  animation: 1s ${slideInAnimation};
`;

const HeaderSection = () => {
    return <div style={{margin: "10rem 1rem"}}>
        <div className="title header-font is-size-1" style={{marginBottom: "0.5rem"}}>Joe Gaebel</div>
        <div className="subtitle header-font is-size-4 is-flex">
            <div>Engineer,&nbsp;</div>
            <SlidingList/>
            <div>,&nbsp;Adventurer</div>
        </div>
    </div>
}

const SlidingList = () => {
    const proofs = [
        "Amateur Sailor",
        "Fitness Geek",
        "Meditator",
        "Motorcycle Enthusiast",
        "Kombucha lover"
    ]

    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        setInterval(() => {
            setIndex(i => (i + 1) % proofs.length)
        }, 4000)
    }, [setIndex, proofs.length])

    return <SlideInDiv key={index}>{proofs[index]}</SlideInDiv>
}

export default HeaderSection
