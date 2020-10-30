import React, {FunctionComponent} from "react";
import Carousel from 'react-elastic-carousel'
import styled, {css} from "styled-components";

interface WorkProps {
    companyName: string
    city: string
    titles: string[]
    dateString: string[]
    description?: string | JSX.Element
    image: JSX.Element
    reviewImages?: string[]
    years?: number
    imageContainerMarginRight?: string
}

export const WorkExperience: FunctionComponent<WorkProps> = (props) => {
    const {companyName, children, titles, dateString, description, city, image, reviewImages, years = 0, imageContainerMarginRight} = props

    const shortYearString = `${years} yrs.`
    return <div style={{marginBottom: "10rem"}}>
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            <div style={{display: "flex", flexWrap: "wrap", marginBottom: "-0.25rem"}}>
                <StyledImageContainer marginRightOverride={imageContainerMarginRight}>
                    {image}
                </StyledImageContainer>
                <div style={{minWidth: "233px"}}>
                    <div className="is-flex-desktop">
                        <div className="is-flex is-flex-wrap-nowrap">
                            <div className="is-size-4 header-font has-text-weight-light has-text-weight-semibold">{companyName}</div>
                            {years > 0 && <div className="ml-2 has-text-weight-light has-text-grey is-size-6 header-font" style={{marginTop: "0.5rem"}}>
                                {shortYearString}
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
                titles.map((title, index) =><div className="is-flex is-flex-wrap-wrap">
                        <div key={index} className="is-size-6 header-font has-text-weight-semibold">
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

        {reviewImages && <div className="mt-6 is-hidden-mobile">
            <div className="header-font title is-size-4 mb-6">Reviews I've been given:</div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <StyledCarousel disableArrowsOnEnd={false}>
                    {reviewImages.map((review, index) => <img key={index} src={review}/>)}
                </StyledCarousel>
            </div>
        </div>}

        {children}
    </div>
}

const StyledCarousel = styled(Carousel)`
  width: 60rem;
`

interface StyledDivContainerProps {
    marginRightOverride?: string
}

const StyledImageContainer = styled.div<StyledDivContainerProps>`
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
