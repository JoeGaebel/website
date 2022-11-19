import React, { FC } from "react";
import { Section, SectionHeader } from "./Layout";
import surfLifeSaving from './logos/surf-life-saving.png'
import szc from './logos/SZC.png'


interface VolunteeringProps {
    image: string;
    website?: string;
    description: string;
    title: string;
    roles: string[];
}

const Volunteering: FC<VolunteeringProps> = ({image, title, roles, description, website}) => {
    return <div className="column is-full card mb-6">
        <div className="card-content">
            <div className="media">
                <div className="media-left" style={{marginRight: '30px'}}>
                    <figure className="image is-96x96">
                        <img className="is-rounded" src={image} style={{marginTop: '23px'}}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div><p className="title header-font is-5 mb-0">{title}</p></div>
                    { website && <a  target="_blank" rel="noreferrer" href={`http://${website}`} className="">{website}</a>}
                    <p className="subtitle is-6 body-font mt-2">{description}</p>
                    <div className="mt-3">
                        {roles.map(role => <p key={role} className="body-font has-text-weight-bold subtitle is-6 mb-0">{role}</p>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const ManlyLifeSaving = () => <Volunteering 
    image={surfLifeSaving} 
    website={'www.manlylsc.com'}
    title="Manly Surf Life Saving Club"
    description="The Manly Life Saving Club is one of Australia's oldest Surf Life Saving Clubs, founded in 1911. We represent one of the most iconic beaches in Sydney, providing beach safety, maintenance of the aquatic environment, education, and training."
    roles={["Active Beach Patrol, 2022 to Present", "Rescue Boat Crew Member, 2022 to Present"]}
/>

const SZC = () => <Volunteering 
    image={szc} 
    website="www.szc.org.au"
    description="Sydney Zen Centre is Australia's original Zen Buddhist community, founded in 1979. We offer weekly meditation sessions and retreats at our bushland retreat site. Currently serving around 70 members."
    title="Sydney Zen Centre"
    roles={["Board Member, 2020 to Present", "Treasurer, 2022 to Present"]}
/>

const VolunteeringSection = () => {
    return <Section id="volunteering" style={{marginTop: "0rem"}}>
        <SectionHeader>Volunteering</SectionHeader>
        <ManlyLifeSaving/>
        <SZC/>
    </Section>
}


export default VolunteeringSection
