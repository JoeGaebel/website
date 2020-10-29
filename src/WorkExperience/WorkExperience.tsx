import React, {FunctionComponent} from "react";
import Carousel from 'react-elastic-carousel'
import styled from "styled-components";

interface WorkProps {
    companyName: string
    city: string
    titles: string[]
    dateString: string[]
    description?: string | JSX.Element
    image: JSX.Element
    reviewImages?: string[]
    years?: number
}

export const WorkExperience: FunctionComponent<WorkProps> = ({companyName, children, titles, dateString, description, city, image, reviewImages, years = 0}) => {
    const shortYearString = `${years} yrs.`
    return <div style={{marginBottom: "10rem"}}>
        <div className="mb-4" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{
                    margin: "0 auto",
                    display: "block"
                }}>
                    {image}
                </div>
                <div>
                    <div className="is-flex-desktop">
                        <div className="is-flex is-flex-wrap-nowrap">
                            <div className="is-size-4 header-font has-text-weight-light has-text-weight-semibold">{companyName}</div>
                            {years > 0 && <div className="ml-2 has-text-weight-light has-text-grey is-size-6 header-font" style={{marginTop: "0.5rem"}}>
                                {shortYearString}
                            </div>}
                        </div>
                    </div>

                    <div>
                        {
                            titles.map((title, index) =><div className="is-flex is-justify-content-space-between">
                                    <div key={index} className="is-size-6 header-font has-text-weight-semibold">
                                        {title}<span className="is-hidden-mobile">,</span>
                                    </div>
                                    <div className="ml-2 has-text-weight-light has-text-grey is-hidden-mobile">
                                        {dateString[index]}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className="is-size-5 header-font has-text-weight-semibold has-text-right is-hidden-mobile">
                    {city}
                </div>
            </div>
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
