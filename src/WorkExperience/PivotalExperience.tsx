import pivotal from "../logos/pivotal.png";
import {Client, ClientList} from "./Client";
import service from "../logos/service.png";
import iag from "../logos/iag.png";
import {WorkExperience} from "./WorkExperience";
import React from "react";
import corelogic from "../logos/corelogic.png";
import telstra from "../logos/telstra.png";
import FilledClientList from "./FilledClientList";

const principles = [
    "Agile",
    "Extreme Programming",
    "Lean Software Engineering",
    "Test First Programming",
    "Full Stack Development",
    "Pair Programming",
    "Continuous Integration",
    "Continuous Deployment / Delivery"
]

const testingTech = [
    "Testing Library",
    "Jest",
    "Enzyme",
    "JUnit 5",
    "MockK",
    "Mockito",
    "WireMock",
    "Detox",
    "Cypress",
    "TestCafe",
    "Selenium"
]

const technologies = [
    "Spring Boot",
    "Node.js",
    "React",
    "Vue",
    "React Native",
    "Angular",
    "Kotlin",
    "Java",
    "TypeScript",
    "TailwindCSS",
    "CSS",
    "PostgreSQL",
    "RabbitMQ",
    "Kubernetes",
    "AWS"
]

const PivotalImage = <img
    style={{
        marginTop: "-1.5rem",
        marginLeft: "-1.25rem",
        width: "120px",
    }}
    src={pivotal}
/>;

const PivotalDescription = <div>
    <div className="block">Pivotal Labs partners with organizations worldwide to accelerate the delivery of software and establish best practices for modern application development.</div>
    <div className="block">At Pivotal Labs, I do two things:</div>
    <div className="block">First, I <b>build and deliver kick ass products</b> in teams and individually.</div>
    <div className="block" style={{maxWidth: "980px"}}>
        Second, I <b>upskill teams of engineers</b> in modern software development practices through bespoke
        training sessions, workshops, and most importantly, <b>pair programming on those products.</b>
    </div>

    <div className="mt-5">The practices I hold dear are:</div>

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

const PivotalExperience = () => {
    return <WorkExperience
        imageContainerMarginRight="-1.5rem"
        city="Sydney, Australia"
        companyName="VMware Pivotal Labs"
        titles={["Senior Software Engineer", "Software Engineer"]}
        dateString={["May 2020 to Present", "Feb 2018 to May 2020"]}
        years={4}
        image={PivotalImage}
        description={PivotalDescription}
    >
        <FilledClientList/>
    </WorkExperience>
}

export default PivotalExperience
