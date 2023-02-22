import React, {useCallback} from "react";
import {Section, SectionHeader} from "./Layout";
import joe from './projects/joe.jpg'
import sailboat from './icons/sailboat.svg'
// @ts-ignore
import missionStatement from './projects/mission-statement.pdf'
import {trackInterestInLink} from "./InterestTracking";

const TrackingAnchor = ({children, href}: {children: string, href: string}) => {
    const trackInterest = useCallback(() => {
        trackInterestInLink(children)
    }, [children])

    return <a href={href} target="_blank" onClick={trackInterest}>{children}</a>
}

const ContactSection = () => {
    return <Section id="contact">
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <SectionHeader>Let's Talk!</SectionHeader>
            <div className="card" style={{width: "500px"}}>
                <div className="card-image">
                    <figure className="image">
                        <img src={joe}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48" style={{marginTop: "1.18rem"}}>
                                <img src={sailboat} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="is-size-4 has-text-dark has-text-weight-semibold">Joe Gaebel</p>
                            <p className="is-size-6 mb-0 has-text-weight-normal" style={{color: "#4a4a4a", lineHeight: 1.25}}>
                                <TrackingAnchor href="https://www.github.com/joegaebel">Github</TrackingAnchor> | <TrackingAnchor href="https://www.linkedin.com/in/joegaebel">LinkedIn</TrackingAnchor> | <TrackingAnchor href={missionStatement}>Mission Statement</TrackingAnchor>
                            </p>
                            <p className="is-size-6 mb-0 has-text-weight-normal" style={{color: "#4a4a4a", lineHeight: 1.25}}>joe.gaebel@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
}



export default ContactSection
