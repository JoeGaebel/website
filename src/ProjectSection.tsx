import React, {FunctionComponent} from "react";
import {Section, SectionHeader} from "./Layout";
import watchWithDad from "./projects/watch-with-dad.png"
import rentifier from "./projects/rentifier.png"
import spherelink from "./projects/spherelink.png"
import linkIcon from "./icons/link.svg"
import githubIcon from "./icons/github.png"
import dylAndJoe from "./projects/dylAndJoe.jpg"

const SneakyTag: FunctionComponent = ({children}) => {
    return <span style={{fontSize: "0.5rem"}} className="tag is-info is-light mr-1 mt-1">{children}</span>
}

const ProjectSection = () => {
    return <Section id="projects">
        <SectionHeader>Projects</SectionHeader>
        <ProjectsList>
            <WatchWithDad/>
            <Rentifier/>
            <Spherelink/>
            <DylAndJoeGoToSanFrancisco/>
        </ProjectsList>
        <div className="is-flex is-justify-content-flex-end">
            <a className="has-text-grey has-text-weight-light is-size-7" href="https://www.github.com/joegaebel/website">
                joegaebel.com is also a project <SneakyTag>TypeScript</SneakyTag><SneakyTag>React</SneakyTag><SneakyTag>Bulma</SneakyTag></a>
        </div>
    </Section>
}


const ProjectsList: FunctionComponent = ({children}) => {
    return <div className="is-flex-direction-column">
        {children}
    </div>
}

interface ProjectProps {
    name: string
    image: string
    description: JSX.Element
    githubLink: string
    projectLink: string
    keywords: string[]
}

const Project: FunctionComponent<ProjectProps> = (props) => {
    const {name, image, description, githubLink, projectLink, keywords} = props;
    return <div className="card mb-4 px-6 py-4">
        <div className="cardContent">
            <div className="subtitle body-font is-size-4 mb-4">{name}</div>
            <div className="columns">
                <div className="column is-two-fifths mr-2">
                    <a target="_blank" href={projectLink}><img src={image}/></a>
                </div>
                <div className="column">
                    {description}
                    <div className="block is-flex">
                        <div className="subtitle body-font is-size-7 mb-2">
                            <a target="_blank" href={projectLink}><img width="30px" src={linkIcon}/></a>
                        </div>
                        <div className="subtitle body-font is-size-7 mb-2">
                            <a target="_blank" href={githubLink}><img width="30px" src={githubIcon}/></a>
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
            </div>
        </div>
    </div>
}


const WatchWithDad = () => <Project
    name="Watch With Dad"
    image={watchWithDad}
    description={<>
        <div className="block">Like Netflix Party, but for content not on Netflix.</div>
        <div className="block">
            Allows you to create a room and have friends and family join, and be able to synchronise video playback.
        </div>
    </>}
    projectLink="http://watch-with-dad.cfapps.io"
    githubLink="https://www.github.com/joegaebel/watch-with-dad"
    keywords={["Fully test driven", "React", "Node.js", "Websockets", "Kubernetes", "A love for Top Gun"]}
/>

const Rentifier = () => <Project
    name="Rentifier"
    image={rentifier}
    description={<>
        <div className="block">Create a rental property pipeline and filter thousands down to your favourite one.</div>
        <div className="block">
            Using TestCafe to scrape rental property websites and google distance APIs, this project spits out a CSV, incorporating travel times to your favourite places.
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
            Upload and link together 360 photos to recreate your memories. Tag the most important areas, embed content, make it fully immersive with sound and music, and fully preserve the memories that matter most.
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
            In the span of two weeks, my good friend and I built a quick website, flew out to San Francisco, and knocked on as many company doors as we could.
        </div>

        <div className="block">
            Afterwards we spend the next few months avoiding school work and doing interviews. In the end, we both got to work for San Frantastic companies.
        </div>
    </>}
    githubLink="https://github.com/JoeGaebel/dylandjoegotosanfrancisco"
    projectLink="http://www.dylandjoegotosanfrancisco.com"
    keywords={["Guts", "A whole lot of hope", "Sheer willpower", "Can-do attitude", "Polite Canadian demeanor", "Bootstrap", "Angular"]}
/>

export default ProjectSection
