import React, {FC, useCallback} from "react";
import {Section, SectionHeader} from "./Layout";
import surfLifeSaving from './logos/surf-life-saving.png'
import szc from './logos/SZC.png'
import {trackInterestInVolunteering} from "./InterestTracking";


interface VolunteeringProps {
    image: string;
    website?: string;
    description: string;
    title: string;
    roles: string[];
}

const Volunteering: FC<VolunteeringProps> = ({ image, title, roles, description, website }) => {
    const trackInterest = useCallback(() => {
        trackInterestInVolunteering(title)
    }, [])

    return <div className="is-full mb-2" onMouseEnter={trackInterest}>
        <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
            <div className="is-align-self-center mt-5" style={{ marginRight: '30px' }}>
                <figure className="image is-96x96">
                    <img className="is-rounded" src={image} />
                </figure>
            </div>
            <div className="mt-5" style={{flex: 1, minWidth: '300px'}}>
                <div><p className="title header-font is-5 mb-0">{title}</p></div>
                {roles.map(role => <p key={role} className="body-font has-text-weight-bold subtitle is-7 mb-0">{role}</p>)}
                <div className="mt-2">{website && <a target="_blank" rel="noreferrer" href={`http://${website}`}>{website}</a>}</div>
                <p className="subtitle is-6 body-font mt-2" style={{maxWidth: '900px'}}>{description}</p>
            </div>
        </div>
    </div>
}

const SZC = () => <Volunteering
    image={szc}
    website="www.szc.org.au"
    description="Sydney Zen Centre is Australia's original Zen Buddhist community, founded in 1979. We offer weekly meditation sessions and retreats at our bushland retreat site. Currently serving around 70 members."
    title="Board of Directors, Sydney Zen Centre"
    roles={["2020 to Present"]}
/>

const ManlyLifeSaving = () => <Volunteering
    image={surfLifeSaving}
    website={'www.manlylsc.com'}
    title="Manly Surf Life Saving Club"
    description="The Manly Life Saving Club is one of Australia's oldest Surf Life Saving Clubs, founded in 1911. We represent one of the most iconic beaches in Sydney, providing beach safety, maintenance of the aquatic environment, education, and training."
    roles={["Active Beach Patrol, 2022 to 2024", "Rescue Boat Crew Member, 2022 to 2024"]}
/>

const VolunteeringSection = () => {
    return <Section id="volunteering" style={{ marginTop: "0rem" }}>
        <SectionHeader>Volunteering</SectionHeader>
        <SZC />
        <ManlyLifeSaving/>
    </Section>
}


export default VolunteeringSection
