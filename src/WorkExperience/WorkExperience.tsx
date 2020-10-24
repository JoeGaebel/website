import React, {FunctionComponent} from "react";
import Carousel from 'react-elastic-carousel'
import styled from "styled-components";

interface WorkProps {
    companyName: string
    city: string
    titles: string[]
    dateString: string[]
    description?: string | JSX.Element
    image: string
    reviewImages?: string[]
}

export const WorkExperience: FunctionComponent<WorkProps> = ({companyName, children, titles, dateString, description, city, image, reviewImages}) => {
    return <div style={{marginBottom: "7rem"}}>
        <div className="mb-5" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            <div style={{display: "flex"}}>
                <div>
                    <img width="100px" src={image}/>
                </div>
                <div>
                    <div className="is-size-4 header-font has-text-weight-light has-text-weight-semibold">
                        {companyName}
                    </div>
                    {
                        titles.map((title, index) => <div key={index}
                                                          className="is-size-6 header-font has-text-weight-light">
                            {title}
                        </div>)
                    }
                </div>
            </div>
            <div>
                <div className="is-size-5 header-font has-text-weight-semibold has-text-right">
                    {city}
                </div>
                {
                    dateString.map((date, index) => <div key={index}
                                                         className="is-size-6 header-font has-text-weight-light has-text-right">
                        {date}
                    </div>)
                }
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
                <StyledCarousel>
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
