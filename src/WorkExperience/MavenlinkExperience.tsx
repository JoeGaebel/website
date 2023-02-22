import {WorkExperience} from "./WorkExperience";
import mavenlink from "../logos/mavenlink.png";
import React from "react";

const MavenlinkImage = <img
    style={{
        marginTop: "-0.75rem",
        marginRight: "0.5rem",
        marginLeft: "-0.55rem"
    }}
    width="100px"
    src={mavenlink}
/>;

const MavenlinkExperience = () => {
    return <WorkExperience
        city="San Francisco, California"
        companyName="Mavenlink"
        titles={["Software Engineer", "Engineering Consultant", "Engineering Intern"]}
        dateString={["Jul 2017 to Feb 2018", "Sep 2016 to Jun 2017", "Jun 2015 to Jun 2016"]}
        image={MavenlinkImage}
        years={2.5}
        description={<MavenlinkDescription/>}
    />
}

const technologies = [
    "Ruby",
    "Rails",
    "ES6+",
    "React",
    "Elastic Search"
]

const testingTech = [
    "Jasmine",
    "Jest",
    "RSpec",
    "Selenium"
]

const MavenlinkDescription = () =>
    <div>
        <div className="block mt-5">Mavenlink is a project management and resourcing suite used by the likes of Coca
            Cola and Salesforce.
        </div>
        <div className="block">
            Rotated across multiple feature teams doing <b>full-stack pair programming and test-driven development on
            production features</b>.
            Experienced <b>Lean Product Management</b> while working with PMs with week-long sprints, <b>User Centered
            Design</b> while working closely with designers, and <b>Extreme programming</b> from doing pair programming
            day to day with incredibly talented teams.
        </div>

        <div className="block"><b>Led a team to develop the core search capabilities</b> on Mavenlink user-generated
            content using ElasticSearch.
        </div>

        <div className="block">
            <b>Started a software consultancy</b> and hired engineers to contract with Mavenlink.
            Led development of invoice templating system <b>used by thousands of Mavenlink customers</b>.
            Designed and <b>implemented a library used across Mavenlink</b> to parse and format international
            currencies.
        </div>

        <div className="block">
            As a Mid-level Engineer on the Business Intelligence team, I <b>built and maintained an ETL</b> that
            converts relational data into a data model for business analytics.
            As well, I worked on the support team where I investigated <b>complex system bugs and designed comprehensive
            solutions</b>.
        </div>

        <div className="mt-5">The technologies I used most were:</div>
        <div className="mb-3">
            {technologies.map((keyword, index) => <span key={index}
                                                        className="tag is-info mr-1 mt-1 is-size-6">{keyword}</span>)}
        </div>

        <div className="mt-5">I test drove with:</div>
        <div className="mb-3">
            {testingTech.map((keyword, index) => <span key={index}
                                                       className="tag is-success is-light mr-1 mt-1 is-size-6">{keyword}</span>)}
        </div>

    </div>

export default MavenlinkExperience
