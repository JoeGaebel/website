import React from "react";
import AtlassianLogo from '../logos/atlassian.png';
import {WorkExperience} from "./WorkExperience";

const principles = [
    "Extreme Programming",
    "Lean Software Engineering",
    "Lean Product Management",
    "Test-First Programming",
    "Pair Programming",
    "Continuous Integration",
    "Continuous Deployment & Delivery"
]

const testingTech = [
    "JUnit 5",
    "Mockito"
]

const technologies = [
    "Spring Boot",
    "Google Guice",
    "AWS SQS",
    "PostgreSQL",
    "Bitbucket Pipelines"
]

const AtlassianImage = <img
    style={{
        width: "68px",
        marginTop: "-0.7rem",
        marginRight: "2rem",
        marginBottom: "1rem",
        marginLeft: "0rem",
    }}
    src={AtlassianLogo}
/>;

const AtlassianDescription = <div>
    <div className="block">I spent two years on a Jira platform team <b>delivering significant improvements to performance, scale, and cost efficiency.</b></div>
    <div className="block">Currently, I'm helping to provide a centralised messaging system for all messages across products at Atlassian.</div>
    <div className="block">Additionally, I <b>help improve ways of working and engineering practices</b>.</div>

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

const AtlassianExperience = () => {
    return <WorkExperience
        imageContainerMarginRight="-1.5rem"
        city="Sydney, Australia"
        companyName="Atlassian"
        titles={["Senior Software Engineer", "Software Engineer"]}
        dateString={["September 2024 to present", "May 2023 to September 2024"]}
        years={'2.5 yrs'}
        image={AtlassianImage}
        description={AtlassianDescription}
    />
}

export default AtlassianExperience
