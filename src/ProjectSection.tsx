import React, {FunctionComponent, useCallback} from "react";
import githubIcon from "./icons/github.png";
import linkIcon from "./icons/link.svg";
import {FCWithChildren, Section, SectionHeader} from "./Layout";
import dylAndJoe from "./projects/dylAndJoe.jpg";
import rentifier from "./projects/rentifier.png";
import spherelink from "./projects/spherelink.png";
import surfButler from "./projects/surfbutler.png";
import watchWithDad from "./projects/watch-with-dad.png";
import garage from "./projects/garage.png";
import {trackInterestInProject, trackProjectLinkClick} from "./InterestTracking";

const SneakyTag: FCWithChildren = ({children}) => {
    return <span style={{fontSize: "0.5rem"}} className="tag is-info is-light mr-1 mt-1">{children}</span>
}

const ProjectSection = () => {
    return <Section id="projects">
        <SectionHeader>Projects</SectionHeader>
        <ProjectsList>
            <LinkyGarage/>
            <WatchWithDad/>
            <SurfButler/>
            <Rentifier/>
            <Spherelink/>
            <DylAndJoeGoToSanFrancisco/>
        </ProjectsList>
        <div className="is-flex is-justify-content-flex-end">
            <a className="has-text-grey has-text-weight-light is-size-7" href="https://www.github.com/joegaebel/website">
                joegaebel.com is also a
                project <SneakyTag>TypeScript</SneakyTag><SneakyTag>React</SneakyTag><SneakyTag>Bulma</SneakyTag></a>
        </div>
    </Section>
}

const ProjectsList: FCWithChildren = ({children}) => {
    return <div className="columns is-multiline">
        {children}
    </div>
}

interface ProjectProps {
    name: string
    image: string
    description: JSX.Element
    githubLink: string
    projectLink?: string
    keywords: string[]
}

const Project: FunctionComponent<ProjectProps> = (props) => {
    const {name, image, description, githubLink, projectLink, keywords} = props;
    const trackInterest = useCallback(() => {
        trackInterestInProject(name)
    }, [name])

    const trackLinkClick = (linkName: string) => () => {
        trackProjectLinkClick(name, linkName)
    }
    return <div className="column is-half" onMouseEnter={trackInterest}>
        <div className="card my-3">
        <div className="card-content">
            <div className="card-image mb-5">
                <figure className="image">
                    <a target="_blank" href={projectLink || githubLink} rel="noreferrer"><img src={image}/></a>
                </figure>
            </div>
            <div className="subtitle header-font has-text-weight-semibold is-size-4">{name}</div>
            <div className="mb-3">{description}</div>
            <div className="block is-flex" style={{marginBottom: "0.75rem"}}>
                {projectLink && <div className="subtitle body-font is-size-7 mb-0">
                    <a onClick={trackLinkClick('project link')} target="_blank" href={projectLink} rel="noreferrer"><img width="30px" src={linkIcon}/></a>
                </div>}
                <div className="subtitle body-font is-size-7 mb-0">
                    <a onClick={trackLinkClick('github')} target="_blank" href={githubLink} rel="noreferrer"><img width="30px" src={githubIcon}/></a>
                </div>
            </div>
            <div className="block is-relative">
                <div>Built with:</div>
                <div>
                    {keywords.map((keyword, index) =>
                        <span key={index}
                            className="tag is-info is-light mr-1 mt-1 is-size-7">{keyword}</span>)}
                </div>
            </div>
        </div>
        </div></div>
}

const LinkyGarage = () => <Project
    name="Linky Garage"
    image={garage}
    description={<>
        <div className="block">Open my garage door, with your phone!</div>
        <div className="block">
            My apartment garage door opener is massive, and I didn't want to carry another thing around. So I set up a Rasberry Pi to serve a website and toggle the garage door for me.
        </div>
    </>}
    githubLink="https://www.github.com/joegaebel/garage"
    keywords={["NextJs", "Raspberry Pi", "TypeScript", "Lots of time staring at schematics"]}
/>

const SurfButler = () => <Project
    name="Surf Butler"
    image={surfButler}
    description={<>
        <div className="block">Never miss a great surf again.</div>
        <div className="block">
            A friend and I created a subscription service to receive a text the night before good surf conditions on your favourite beaches.
            Aggregated data across surf report websites with webscraping to score conditions and send texts to subscribers.
        </div>
    </>}
    githubLink="https://www.github.com/joegaebel/surfbutler"
    keywords={["Vue", "Node", "Jest", "AWS Lambda", "AWS Pinpoint", "Frustration from missing good surfs ourselves"]}
/>

const WatchWithDad = () => <Project
    name="Watch With Dad"
    image={watchWithDad}
    description={<>
        <div className="block">Like Netflix Party, but for content not on Netflix.</div>
        <div className="block">
            Allows you to create a room and have friends and family join, and be able to synchronise video playback.
        </div>
    </>}
    githubLink="https://www.github.com/joegaebel/watch-with-dad"
    keywords={["Fully test driven", "React", "Node.js", "Websockets", "Kubernetes", "A love for Top Gun"]}
/>

const Rentifier = () => <Project
    name="Rentifier"
    image={rentifier}
    description={<>
        <div className="block">Create a rental property pipeline and filter thousands down to your favourite one.</div>
        <div className="block">
            Using TestCafe to scrape rental property websites and google distance APIs, this project spits out a CSV,
            incorporating travel times to your favourite places.
            This allows you to import the CSV into Google Sheets, immediately simplifying your property hunting.
        </div>
    </>}
    githubLink="https://github.com/JoeGaebel/rentifier"
    projectLink="https://joegaebel.medium.com/find-the-perfect-apartment-out-of-thousands-using-web-scraping-google-apis-and-sheets-860ef462de41"
    keywords={["Web Scraping", "Node.js", "Test Cafe", "Google Distance Matrix API", "A fair dash of desperation"]}
/>

const Spherelink = () => <Project
    name="Spherelink"
    image={spherelink}
    description={<>
        <div className="block">Immortalize your most cherished memories.</div>
        <div className="block">
            Upload and link together 360 photos to recreate your memories. Tag the most important areas, embed content,
            make it fully immersive with sound and music, and fully preserve the memories that matter most.
        </div>
        <div className="block">I bought and lived on a sail boat so I could afford the rent in SF, check it out!</div>
    </>}
    githubLink="https://github.com/JoeGaebel/spherelink"
    projectLink="https://www.spherelink.io"
    keywords={["Ruby on Rails", "CoffeeScript", "A deep sense of nostalgia"]}
/>

const DylAndJoeGoToSanFrancisco = () => <Project
    name="Dyl And Joe Go To San Francisco.com"
    image={dylAndJoe}
    description={<>
        <div className="block">Went on a do or die journey to get jobs in San Francisco.</div>
        <div className="block">
            In the span of two weeks, my good friend and I built a quick website, flew out to San Francisco, and knocked
            on as many company doors as we could.
        </div>

        <div className="block">
            Afterwards we spend the next few months avoiding school work and doing interviews. In the end, we both got
            to work for San Frantastic companies.
        </div>
    </>}
    githubLink="https://github.com/JoeGaebel/dylandjoegotosanfrancisco"
    projectLink="http://www.dylandjoegotosanfrancisco.com"
    keywords={["Guts", "A whole lot of hope", "Sheer willpower", "Can-do attitude", "Polite Canadian demeanor", "Bootstrap", "Angular"]}
/>

export default ProjectSection
