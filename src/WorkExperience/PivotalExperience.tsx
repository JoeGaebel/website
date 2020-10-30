import pivotal from "../logos/pivotal.png";
import {Client, ClientList} from "./Client";
import service from "../logos/service.png";
import {WorkExperience} from "./WorkExperience";
import React from "react";
import corelogic from "../logos/corelogic.png";
import telstra from "../logos/telstra.png";
import joseph from "../reviews/joseph.png"
import amjad from "../reviews/amjad.png"
import fede from "../reviews/fede.png"
import christian from "../reviews/christian.png"

const principles = [
    "Lean",
    "Agile",
    "Full Stack Development",
    "Test Driven Development",
    "Extreme Programming",
    "Pair Programming",
    "Continuous Integration",
    "Continuous Deployment and Delivery"
]

const testingTech = [
    "JUnit 5",
    "WireMock",
    "MockK",
    "Mockito",
    "Jest",
    "Enzyme",
    "React Testing Library",
    "Cypress",
    "TestCafe"
]

const technologies = [
    "Spring Boot",
    "Node.js",
    "Kotlin",
    "Java",
    "React.js",
    "Redux",
    "TypeScript",
    "ES6+",
    "CSS",
    "PostgreSQL"
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
    <div className="block">At Pivotal Labs, I do two things:</div>
    <div className="block">First, I help teams <b>build and deliver kick ass products.</b></div>
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
        reviewImages={[amjad, joseph, christian, fede]}
        city="Sydney, Australia"
        companyName="VMware Pivotal Labs"
        titles={["Senior Software Engineer", "Mid Software Engineer"]}
        dateString={["May 2020 to Present", "Feb 2018 to May 2020"]}
        years={3}
        image={PivotalImage}
        description={PivotalDescription}
    >
        <ClientList>
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
            <Client
                name="Payments team at Service NSW"
                projectName="Government Payments Platform"
                image={service}
                description="Helped the Payments team build the NSW Government Payment System, responsible for processing tens of millions of dollars every day"
                keywords={["Spring Boot", "Kotlin", "Vue", "VueX", "RabbitMQ", "Postgres", "Apigee", "Cypress", "Jest"]}
            />
            <Client
                name="Service For Business at Service NSW"
                projectName="Contractor Licence"
                image={service}
                link="https://mybusiness.service.nsw.gov.au/transactions/electrical-individual-contractor-licence/ready-to-start"
                description="I lead the transformation of the time-consuming contractor licence application form into a digital experience. This application form receives the data, and forwards it to the agency directly, saving hours of time for Tradespeople and back office staff"
                keywords={["Spring Boot", "Kotlin", "React", "Redux", "Postgres", "Apigee"]}
            />
            <Client
                name="Vouchers and Rebates team at Service NSW"
                projectName="Active Kids and Creative Kids vouchers"
                image={service}
                link="https://www.service.nsw.gov.au/campaign/active-kids"
                description="Helped the Vouchers and Rebates team create the Active Kids/Creative Kids voucher website and backend system from scratch to replace the legacy application"
                keywords={["Spring Boot", "Kotlin", "Vue", "VueX", "Postgres", "Apigee"]}
            />
            <Client
                name="Tell Government Once team at Service NSW"
                projectName="Notification API"
                image={service}
                description="Helped the TGO team create a microservice responsible for maintaining citizens most recent contact information and contact preferences. If you've gotten an email notification from Service NSW, it's gone through this API"
                keywords={["Spring Boot", "Kotlin", "React", "Postgres", "Apigee"]}
            />
            <Client
                name="Service For Business at Service NSW"
                projectName="Cafe, Restaurant and Small Business application"
                image={service}
                link="https://mybusiness.service.nsw.gov.au/dashboard"
                description="Helped Service NSW digitize forms for opening a Cafe/Restaurant/Small Business"
                keywords={["Spring Boot", "Kotlin", "React", "Unistore", "Postgres", "Apigee"]}
            />
            <Client
                name="CoreLogic"
                projectName="ValConnect"
                image={corelogic}
                description="Helped CoreLogic build and deliver a mobile app for quickly performing property assessments"
                keywords={["React Native", "Redux", "Java", "Spring"]}
            />
            <Client
                name="Telstra"
                projectName="Telstra Essential Sales Assistant"
                image={telstra}
                imageSizeOverride="35px"
                description="Built an internal website to be used by the sales team to be a one-stop-shop for supporting enterprise sales"
                keywords={["Kotlin", "Spring Boot", "React", "Redux", "Semantic UI", "Apigee"]}
            />
            <Client
                name="Telstra"
                projectName="Prepaid Recharge"
                imageSizeOverride="35px"
                image={telstra}
                link="https://www.telstra.com.au/mobile-phones/prepaid-mobiles/prepaid-recharge"
                description="Built the system to collect payments and reinstate service for Telstra's prepaid service customers"
                keywords={["Kotlin", "Spring Boot", "React", "Redux"]}
            />
        </ClientList>
    </WorkExperience>
}

export default PivotalExperience
