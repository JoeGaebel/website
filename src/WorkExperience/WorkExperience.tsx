import React, {useCallback} from "react";
import styled from "styled-components";
import {FCWithChildren} from "../Layout";
import {trackExperienceInterest} from "../InterestTracking";

interface WorkProps {
    companyName: string
    city: string
    titles: string[]
    dateString: string[]
    description?: string | JSX.Element
    image: JSX.Element
    years?: number | string
    imageContainerMarginRight?: string
    months?: number
}

export const WorkExperience: FCWithChildren<WorkProps> = (props) => {
    const {companyName, children, titles, dateString, description, city, image, years, imageContainerMarginRight} = props
    let yearString;
    if (years && typeof years === 'string') {
        yearString = years
    } else if (years) {
        yearString = `${years} yrs.`
    }

    const trackInterest = useCallback(() => {
        trackExperienceInterest(companyName)
    }, [companyName])

    return <div style={{marginBottom: "10rem"}} onMouseEnter={trackInterest}>
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            <div style={{display: "flex", flexWrap: "wrap", marginBottom: "-0.25rem"}}>
                <StyledImageContainer marginRightOverride={imageContainerMarginRight}>
                    {image}
                </StyledImageContainer>
                <div style={{minWidth: "233px"}}>
                    <div className="is-flex-desktop">
                        <div className="is-flex is-flex-wrap-nowrap">
                            <div className="is-size-4 header-font has-text-weight-light has-text-weight-semibold">{companyName}</div>
                            {years && <div className="ml-2 has-text-weight-light has-text-grey is-size-6 header-font" style={{marginTop: "0.5rem"}}>
                                {yearString}
                            </div>}
                        </div>
                    </div>
                    <div className="is-size-6 header-font has-text-weight-normal has-text-grey mb-4" style={{marginTop: "-0.4rem"}}>
                        {city}
                    </div>
                </div>
            </div>
        </div>

        <div style={{marginBottom: "1rem"}}>
            {
                titles.map((title, index) =><div key={index} className="is-flex is-flex-wrap-wrap">
                        <div className="is-size-6 header-font has-text-weight-semibold">
                            {title},&nbsp;&nbsp;
                        </div>
                        <div className="has-text-weight-light has-text-grey" style={{minWidth: "200px"}}>
                            {dateString[index]}
                        </div>
                        <div className="is-hidden-tablet" style={{height: "2rem"}}/>
                    </div>
                )
            }
        </div>

        <div className="is-size-6 body-font mb-5">
            {description}
        </div>

        {children}
    </div>
}

interface StyledDivContainerProps {
    marginRightOverride?: string
}

export const StyledImageContainer = styled.div<StyledDivContainerProps>`
  margin-right: ${props => props.marginRightOverride || "initial"};
  
  @media only screen and (max-width: 414px) {
    display: block;
    margin: 0 auto !important;
    
    > img {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
`
