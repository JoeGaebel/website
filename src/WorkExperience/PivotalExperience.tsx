import pivotal from "../logos/pivotal.png";
import {Client, ClientList} from "./Client";
import service from "../logos/service.png";
import {WorkExperience} from "./WorkExperience";
import React from "react";
import corelogic from "../logos/corelogic.png";
import telstra from "../logos/telstra.png";

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
    <div className="block">Pivotal Labs partners with organizations worldwide to accelerate the delivery of software and establish best practices for modern application development.</div>
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
                description="Helped deliver venue check-ins for COVID-19 contact tracing on the Service NSW Mobile App within an extremely short timeline. Led the backend development and system integrations. Responsible for millions of checkins across NSW."
                keywords={["React Native", "Redux", "Detox", "Node.js", "Firebase", "Jest", "ES6+"]}
            />
            <Client
                name="RMS Transactions team at Service NSW"
                link="https://www.service.nsw.gov.au/transaction/renew-vehicle-registration"
                projectName="Vehicle Registration Renewal"
                image={service}
                description="Led the replacement of the legacy system into a Test-Driven and easily maintainable Spring Boot application, enabling significant cost savings from system stability."
                keywords={["Spring Boot", "Kotlin", "React", "Apigee", "TestCafe", "Jest", "MockK", "Junit 5"]}
            />
            <Client
                name="Mobile App team at Service NSW"
                projectName="COVID-19 Test Result Notifications"
                image={service}
                description="Led the Mobile App Team in delivering COVID-19 test results through push notifications in the Service NSW Mobile App. Responsible for delivering tens of thousands of COVID-19 test results per day."
                keywords={["React Native", "Redux", "Detox", "Node.js", "Firebase", "Jest", "ES6+"]}
            />
            <Client
                name="Payments team at Service NSW"
                projectName="Government Payments Platform"
                image={service}
                description="Helped the Payments team build the NSW Government Payment System, responsible for processing tens of millions of dollars daily."
                keywords={["Spring Boot", "Kotlin", "Vue", "VueX", "RabbitMQ", "Postgres", "Apigee", "Cypress", "Jest"]}
            />
            <Client
                name="Service For Business at Service NSW"
                projectName="Contractor Licence"
                image={service}
                link="https://mybusiness.service.nsw.gov.au/transactions/electrical-individual-contractor-licence/ready-to-start"
                description="Led the transformation of the time-consuming contractor licence application form into a digital experience, enabling significant time savings for Tradespeople and back office staff."
                keywords={["Spring Boot", "Kotlin", "React", "Redux", "Postgres", "Apigee"]}
            />
            <Client
                name="Vouchers and Rebates team at Service NSW"
                projectName="Active Kids and Creative Kids vouchers"
                image={service}
                link="https://www.service.nsw.gov.au/campaign/active-kids"
                description="Helped the Vouchers and Rebates team create the Active Kids/Creative Kids voucher website and backend system from scratch to replace the legacy application."
                keywords={["Spring Boot", "Kotlin", "Vue", "VueX", "Postgres", "Apigee"]}
            />
            <Client
                name="Tell Government Once team at Service NSW"
                projectName="Notification API"
                image={service}
                description="Helped the TGO team create a microservice responsible for maintaining citizens most recent contact information and contact preferences. If you've gotten an email notification from Service NSW, it's gone through this API."
                keywords={["Spring Boot", "Kotlin", "React", "Postgres", "Apigee"]}
            />
            <Client
                name="Service For Business at Service NSW"
                projectName="Cafe, Restaurant and Small Business application"
                image={service}
                link="https://mybusiness.service.nsw.gov.au/dashboard"
                description="Helped Service NSW digitize forms for opening a cafe, restaurant, or small Business"
                keywords={["Spring Boot", "Kotlin", "React", "Unistore", "Postgres", "Apigee"]}
            />
            <Client
                name="CoreLogic"
                projectName="ValConnect"
                image={corelogic}
                description="Helped CoreLogic build and deliver a mobile app for quickly performing property assessments."
                keywords={["React Native", "Redux", "Java", "Spring"]}
            />
            <Client
                name="Telstra"
                projectName="Telstra Essential Sales Assistant"
                image={telstra}
                imageSizeOverride="35px"
                description="Built an internal application used by the sales organization as a one-stop-shop for supporting enterprise sales."
                keywords={["Kotlin", "Spring Boot", "React", "Redux", "Semantic UI", "Apigee"]}
            />
            <Client
                name="Telstra"
                projectName="Prepaid Recharge"
                imageSizeOverride="35px"
                image={telstra}
                link="https://www.telstra.com.au/mobile-phones/prepaid-mobiles/prepaid-recharge"
                description="Built the system to collect payments and reinstate service for Telstra's prepaid service customers."
                keywords={["Kotlin", "Spring Boot", "React", "Redux"]}
            />
        </ClientList>
    </WorkExperience>
}

export default PivotalExperience
