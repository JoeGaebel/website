import React from "react";
import PathzeroLogo from '../logos/pathzero.svg';
import { WorkExperience } from "./WorkExperience";

const principles = [
    "Extreme Programming",
    "Lean Software Engineering",
    "Lean Product Management",
    "Test-First Programming",
    "Full Stack Development",
    "Pair Programming",
    "Infrastructure As Code",
    "Continuous Integration",
    "Continuous Deployment & Delivery"
]

const testingTech = [
    "Jest",
    "Vue Test Utils",
    "mocks-server",
]

const technologies = [
    "NestJS",
    "Serverless Framework",
    "AWS Lambda",
    "TypeScript",
    "Prisma",
    "Node.js",
    "PostgreSQL",
    "Bitbucket Pipelines"
]

const PathzeroImage = <img
    style={{
        width: "70.5px",
        marginTop: "-0.6rem",
        marginLeft: "-0.2rem",
        marginRight: "34.5px",
        marginBottom: "14px",
    }}
    src={PathzeroLogo}
/>;

const PathzeroDescription = <div>
    <div className="block">Pathzero is on a mission to accelerate the decarbonisation of the global economy. By combining an unparalleled user experience, globally recognised carbon standards, and on-demand sustainability specialists, our digital platform enables organisations around the world to accurately measure, reduce and disclose their carbon emissions information with ease.</div>

    <div className="block">At Pathzero I <b>developed the foundation for delivering modern API services</b> with a well tested NestJS boilerplate API following Clean Architecture, Test-First Programming, and implementing the Command and Query Responsibility Segregation pattern.</div>
    <div className="block">Additionally I <b>paired with product teams</b> to help with adoption of this API foundation, implementing features, and delivering those features to users.</div>
    <div className="block">I <b>helped improve ways of working and engineering practices</b> including test-first programming, one week iterations, running Discovery and Framing workshops, and Lean Inceptions</div>
    <div className="block">As well, I <b>operated as the team lead and product manager</b> for the User and Login portal of the platform, writing and sequencing user stories, planning the application architecture, running sprint planning meetings, performing code reviews, and helping implement features.</div>


    <div className="mt-5">The practices I help instil are:</div>
    <div className="mb-3">
        {principles.map((keyword, index) => <span key={index}
                                                  className="tag is-success mr-1 mt-1 is-size-6">{keyword}</span>)}
    </div>

    <div className="mt-5">The technologies I use most are:</div>
    <div className="mb-3">
        {technologies.map((keyword, index) => <span key={index}
                                                    className="tag is-info mr-1 mt-1 is-size-6">{keyword}</span>)}
    </div>

    <div className="mt-5">I test drive with:</div>
    <div className="mb-3">
        {testingTech.map((keyword, index) => <span key={index}
                                                   className="tag is-success is-light mr-1 mt-1 is-size-6">{keyword}</span>)}
    </div>

</div>

const PathzeroExperience = () => {
    return <WorkExperience
        imageContainerMarginRight="-1.5rem"
        city="Sydney, Australia"
        companyName="Pathzero"
        titles={["Senior Software Engineer"]}
        dateString={["July 2022 to Jan 2023"]}
        years={'6 mos.'}
        image={PathzeroImage}
        description={PathzeroDescription}
    />
}

export default PathzeroExperience
