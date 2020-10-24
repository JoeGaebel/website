import pivotal from "./logos/pivotal.png";
import {Client, ClientList} from "./Client";
import service from "./logos/service.png";
import {WorkExperience} from "./WorkExperience";
import React from "react";

const principles = [
    "Lean",
    "Test Driven Development",
    "Extreme Programming",
    "Pair Programming",
    "Continuous Integration",
    "Continuous Deployment and Delivery"
]

const SeniorPivotalExperience = () => {
    return <WorkExperience
        city="Sydney, Australia"
        companyName="VMware Pivotal Labs"
        title="Senior Software Engineer"
        dateString="May 2020 to Present"
        image={pivotal}
        description={<div>
            At Pivotal Labs, I do two things:<br/><br/>
            Firstly, I help teams <b>build and deliver kick ass products.</b><br/><br/>
            Secondly, I upskill teams of engineers in modern software development practices through bespoke training
            sessions, workshops, <br/>and most importantly, <b>pair programming while we build said
            products.</b><br/><br/>
            The practices I hold dear are:

            <div className="mb-3">
                {principles.map((keyword, index) => <span key={index}
                                                          className="tag is-success mr-1 mt-1 is-size-6">{keyword}</span>)}
            </div>

            <div>and most importantly</div>

            <span className="tag is-danger is-light mr-1 mt-1 is-size-6">Building products users will love ❤️</span>
        </div>}
    >
        <ClientList experienceName="showSeniorExperience">
            <Client
                name="Mobile App team at Service NSW"
                projectName="COVID Safe Check-in"
                image={service}
                description="As a part of this project, I helped deliver the venue check-ins for COVID contact tracing feature within the Service NSW Mobile App"
                keywords={["React Native", "Redux", "Detox", "Node.js", "Firebase", "Jest", "ES6+"]}
            />
            <Client
                name="RMS Transactions team at Service NSW"
                link="https://www.service.nsw.gov.au/transaction/renew-vehicle-registration"
                projectName="Renew Registration"
                image={service}
                description="Helped rewrite from-scratch the legacy Renew Registration transaction into a Test Driven and easily maintainable Spring Boot application"
                keywords={["Spring Boot", "Kotlin", "React", "Apigee", "TestCafe", "Jest", "MockK", "Junit 5"]}
            />
            <Client
                name="Mobile App team at Service NSW"
                projectName="COVID-19 Test Result Notifications"
                image={service}
                description="I lead the mobile app team in producing a NodeJS microservice responsible for registering devices and sending push notifications through Firebase to deliver COVID-19 test results"
                keywords={["React Native", "Redux", "Detox", "Node.js", "Firebase", "Jest", "ES6+"]}
            />

        </ClientList>
    </WorkExperience>
}

export default SeniorPivotalExperience
