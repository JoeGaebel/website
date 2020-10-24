import React, {FunctionComponent} from "react";
import {Section, SectionHeader} from "./Layout";
import pivotal from "./logos/pivotal.png"
import service from "./logos/service.png"
import corelogic from "./logos/corelogic.png"
import telstra from "./logos/telstra.png"

const ExperienceSection = () => {
    return <Section>
        <SectionHeader>Experience</SectionHeader>
        <PivotalLabs
            title="Senior Software Engineer"
            dateString="May 2020 to Present"
            description={<div>
                At Pivotal Labs, I do two things:<br/><br/>
                Firstly, I help teams build and deliver kick ass products.<br/><br/>
                Secondly, I upskill teams of engineers in modern software development practices through bespoke training
                sessions, workshops, and pair programming while we build said products.<br/><br/>
                The practices I hold dear are: Test Driven Development, Pair Programming, Continuous Integration,
                Continuous Deployment and Delivery
            </div>}
        >
            <Client
                name="Mobile App team at Service NSW"
                projectName="COVID Safe Check-in"
                image={service}
                description="As a part of this project, I helped deliver the venue check-ins for COVID contact tracing feature within the Service NSW Mobile App"
                keywords={["React Native", "Detox", "Node.js", "Firebase", "Jest", "ES6+"]}
            />
            <Client
                name="RMS Transactions team at Service NSW"
                projectName="Renew Registration"
                image={service}
                description="I helped rewrite from-scratch the legacy Renew Registration transaction into a Test Driven and easily maintainable Spring Boot application"
                keywords={["Spring Boot", "Kotlin", "React", "Apigee", "TestCafe", "Jest", "MockK", "Junit 5"]}
            />
            <Client
                name="Mobile App team at Service NSW"
                projectName="COVID-19 Test Result Notifications"
                image={service}
                description="I lead the mobile app team in producing a NodeJS microservice responsible for registering devices and sending push notifications through Firebase to deliver COVID-19 test results"
                keywords={["React Native", "Detox", "Node.js", "Firebase", "Jest", "ES6+"]}
            />
        </PivotalLabs>

        <PivotalLabs title="Mid Software Engineer" dateString="Feb 2018 to May 2020">
            <Client
                name="Payments team at Service NSW"
                projectName="Government Payments Platform"
                image={service}
                description="I helped the Payments team build the NSW Payment System, responsible for processing millions of dollars daily"
                keywords={["Spring Boot", "Kotlin", "Vue", "RabbitMQ", "Postgres", "Apigee", "Cypress", "Jest"]}
            />
            <Client
                name="Service For Business at Service NSW"
                projectName="Contractor Licence"
                image={service}
                description="I lead the transformation of the time-consuming contractor licence application form into a digital experience. This application form receives the data, and forwards it to the agency directly, saving hours of time for Tradespeople and back office staff"
                keywords={["Spring Boot", "Kotlin", "React", "Postgres", "Apigee"]}
            />
            <Client
                name="Vouchers and Rebates team at Service NSW"
                projectName="Active Kids and Creative Kids vouchers"
                image={service}
                description="I helped the Vouchers and Rebates team create the Active Kids/Creative Kids voucher application from scratch to replace the legacy application"
                keywords={["Spring Boot", "Kotlin", "Vue", "Postgres", "Apigee"]}
            />
            <Client
                name="Tell Government Once team at Service NSW"
                projectName="Active Kids and Creative Kids vouchers"
                image={service}
                description="I helped Service NSW build the ability to recieve COVID test results directly to their phone"
            />
            <Client
                name="Easy to Do Business team at Service NSW"
                projectName="Cafe, Restaurant and Small Business application"
                image={service}
                description="I helped Service NSW build the ability to recieve COVID test results directly to their phone"
            />
            <Client
                name="CoreLogic"
                projectName="ValConnect"
                image={corelogic}
                description="I helped Service NSW build the ability to recieve COVID test results directly to their phone"
            />
            <Client
                name="Telstra"
                projectName="TESA"
                image={telstra}
                imageSizeOverride="35px"
                description="I helped Service NSW build the ability to recieve COVID test results directly to their phone"
            />
            <Client
                name="Telstra"
                projectName="Prepaid Recharge"
                imageSizeOverride="35px"
                image={telstra}
                description="I helped Service NSW build the ability to recieve COVID test results directly to their phone"
            />
        </PivotalLabs>
    </Section>
}

export default ExperienceSection

interface PivotalProps {
    title: string
    dateString: string
    description?: string | JSX.Element
}

const PivotalLabs: FunctionComponent<PivotalProps> = ({children, title, dateString, description}) => {
    return <div style={{marginBottom: "7rem"}}>
        <div className="mb-5" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            <div>
                <div className="is-size-5 header-font has-text-weight-light">
                    VMware Pivotal Labs
                </div>
                <div className="is-size-6 header-font has-text-weight-light">
                    {title}
                </div>
            </div>
            <div>
                <div className="is-size-5 header-font has-text-weight-light has-text-right">
                    Sydney, Australia
                </div>
                <div className="is-size-6 header-font has-text-weight-light has-text-right">
                    {dateString}
                </div>
            </div>
        </div>

        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className="column is-full-mobile" style={{minWidth: "fit-content", flexGrow: 0, alignSelf: "center"}}>
                <img width="100px" src={pivotal}/>
            </div>
            <div className="column">
                <div className="is-size-6 body-font mb-5">
                    {description}
                </div>
            </div>
        </div>

        <div className="mb-5">
            <div className="subtitle body-font is-size-6 header-font">Teams I've worked with:</div>
        </div>

        <div className="columns is-multiline">
            {children}
        </div>
    </div>
}


interface ClientProps {
    name: string
    projectName: string
    image: string
    description: string
    imageSizeOverride?: string
    keywords?: string[]
}

const Client: FunctionComponent<ClientProps> = ({name, image, description, projectName, imageSizeOverride, keywords}) => {
    return <div className="column is-one-third mb-0">
        <div className="card">
            <div className="card-content">
                <div className="mb-5" style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <div className="header-font is-size-6 subtitle mb-1">{projectName}</div>
                        <div className="header-font is-size-7 subtitle">{name}</div>
                    </div>
                    <div className="pl-2">
                        <img width={imageSizeOverride || "80px"} height="auto" src={image}/>
                    </div>

                </div>
                <div>{description}</div>

                {keywords && <div className="mt-4">
                    {keywords?.map((keyword, index) => <span key={index} className="tag is-light mr-1 mt-1 is-size-7">{keyword}</span>)}
                </div>}
            </div>
        </div>
    </div>
}
