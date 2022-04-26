import {Client, ClientList} from "./Client";
import iag from "../logos/iag.png";
import service from "../logos/service.png";
import corelogic from "../logos/corelogic.png";
import telstra from "../logos/telstra.png";
import sonic from "../logos/sonic.png";
import React from "react";

const FilledClientList = () => <ClientList>
    <Client
        name="MyRIS Team at Sonic Healthcare"
        imageSizeOverride='45px'
        projectName="MyRIS Appointment Manager"
        image={sonic}
        description="Helped build and scale the appointment manager used across Sonic imaging centres in Australia. Responsible for helping hire and upskill Sonic's in-house engineering team with modern software engineering practices."
        tech={["Angular", "TypeScript", "DotNet", "TailwindCSS", "Kubernetes"]}
        testing={["Angular Testing Library", "TestCafe", "WireMock"]}
    />
    <Client
        name="Serenity Team at IAG"
        imageSizeOverride='40px'
        projectName="Car Insurance Quotes"
        image={iag}
        description="Rapidly developed a fully functional motor insurance quote web-app that dynamically generates UI inputs and controls based on metadata provided by IAG backend systems. Provided architecture analysis and productization advice to enable third parties to seamlessly integrate."
        tech={["React", "React Hooks", "TypeScript", "Node.js"]}
        testing={["Jest", "React Testing Library", "WireMock", "TestCafe"]}
    />
    <Client
        name="Mobile App team at Service NSW"
        projectName="COVID Safe Check-in"
        image={service}
        description="Helped deliver venue check-ins for COVID-19 contact tracing on the Service NSW Mobile App within an extremely short timeline. Led the backend development and system integrations. Responsible for millions of checkins across NSW."
        tech={["React Hooks", "React Native", "Redux", "TypeScript", "Node.js", "Firebase"]}
        testing={["Jest", "React Testing Library", "Detox", "WireMock"]}
    />
    <Client
        name="RMS Transactions team at Service NSW"
        link="https://www.service.nsw.gov.au/transaction/renew-vehicle-registration"
        projectName="Vehicle Registration Renewal"
        image={service}
        description="Led the replacement of the legacy system into a Test-Driven and easily maintainable Spring Boot application, enabling significant cost savings from system stability."
        tech={["Spring Boot", "Kotlin", "React", "TypeScript", "Apigee"]}
        testing={["JUnit 5", "Spring Boot Test", "MockK", "Jest", "TestCafe", "WireMock"]}
    />
    <Client
        name="Mobile App team at Service NSW"
        projectName="COVID-19 Test Result Notifications"
        image={service}
        description="Led the Mobile App Team in delivering COVID-19 test results through push notifications in the Service NSW Mobile App. Responsible for delivering tens of thousands of COVID-19 test results per day."
        tech={["React Native", "Redux", "TypeScript", "Node.js", "Firebase"]}
        testing={["Jest", "React Testing Library", "Detox", "WireMock"]}
    />
    <Client
        name="Payments team at Service NSW"
        projectName="Government Payments Platform"
        image={service}
        description="Helped the Payments team build the NSW Government Payment System, responsible for processing tens of millions of dollars daily."
        tech={["Spring Boot", "Kotlin", "Vue", "VueX", "ES6+", "RabbitMQ", "Postgres", "Apigee"]}
        testing={["JUnit 5", "Spring Boot Test", "Mockito", "Jest", "WireMock", "Cypress"]}
    />
    <Client
        name="Service For Business at Service NSW"
        projectName="Contractor Licence"
        image={service}
        link="https://mybusiness.service.nsw.gov.au/transactions/electrical-individual-contractor-licence/ready-to-start"
        description="Led the transformation of the time-consuming contractor licence application form into a digital experience, enabling significant time savings for Tradespeople and back office staff."
        tech={["Spring Boot", "Kotlin", "React", "Redux", "ES6+", "Postgres", "Apigee"]}
        testing={["JUnit 5", "Spring Boot Test", "Mockito", "Jest", "TestCafe", "WireMock"]}
    />
    <Client
        name="Vouchers and Rebates team at Service NSW"
        projectName="Active Kids and Creative Kids vouchers"
        image={service}
        link="https://www.service.nsw.gov.au/campaign/active-kids"
        description="Helped the Vouchers and Rebates team create the Active Kids/Creative Kids voucher website and backend system from scratch to replace the legacy application."
        tech={["Spring Boot", "Kotlin", "Vue", "VueX", "ES6+", "Postgres", "Apigee"]}
        testing={["JUnit 5", "Spring Boot Test", "Mockito", "Jest", "Cypress"]}
    />
    <Client
        name="Tell Government Once team at Service NSW"
        projectName="Notification API"
        image={service}
        description="Helped the TGO team create a microservice responsible for maintaining citizens most recent contact information and contact preferences. If you've gotten an email notification from Service NSW, it's gone through this API."
        tech={["Spring Boot", "Kotlin", "React", "ES6+", "Postgres", "Apigee"]}
        testing={["JUnit 4", "Spring Boot Test", "Mockito", "Jest", "Cypress"]}
    />
    <Client
        name="Service For Business at Service NSW"
        projectName="Cafe, Restaurant and Small Business application"
        image={service}
        link="https://mybusiness.service.nsw.gov.au/dashboard"
        description="Helped Service NSW digitize forms for opening a cafe, restaurant, or small Business"
        tech={["Spring Boot", "Kotlin", "React", "Unistore", "ES6+", "Postgres", "Apigee"]}
        testing={["JUnit 5", "Spring Boot Test", "Mockito", "Jest", "Cypress"]}
    />
    <Client
        name="CoreLogic"
        projectName="ValConnect"
        image={corelogic}
        description="Helped CoreLogic build and deliver a mobile app for quickly performing property assessments."
        tech={["React Native", "Redux", "ES6+", "Java", "Spring"]}
        testing={["Detox", "Jest"]}
    />
    <Client
        name="Telstra"
        projectName="Telstra Essential Sales Assistant"
        image={telstra}
        imageSizeOverride="35px"
        description="Built an internal application used by the sales organization as a one-stop-shop for supporting enterprise sales."
        tech={["Kotlin", "Spring Boot", "React", "Redux", "Semantic UI", "ES6+", "Apigee"]}
        testing={["Jest", "JUnit 4", "Spring Boot Test", "Cypress"]}
    />
    <Client
        name="Telstra"
        projectName="Prepaid Recharge"
        imageSizeOverride="35px"
        image={telstra}
        link="https://www.telstra.com.au/mobile-phones/prepaid-mobiles/prepaid-recharge"
        description="Built the system to collect payments and reinstate service for Telstra's prepaid service customers."
        tech={["Kotlin", "Spring Boot", "React", "Redux", "ES6+"]}
        testing={["Jest", "Spring Boot Test"]}
    />
</ClientList>

export default FilledClientList;