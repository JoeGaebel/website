import {WorkExperience} from "./WorkExperience";
import mavenlink from "../logos/mavenlink.png";
import React from "react";
import huth from '../reviews/huth.png'
import paulette from '../reviews/paulette.png'

const MavenlinkImage = <img
    style={{
        marginTop: "1rem",
        marginRight: "0.5rem",
        marginLeft: "-0.5rem"
    }}
    width="100px"
    src={mavenlink}
/>;

const MavenlinkExperience = () => {
    return <WorkExperience
        city="San Francisco, California"
        companyName="Mavenlink"
        titles={["Mid Software Engineer", "Engineering Consultant", "Junior Software Engineer"]}
        dateString={["July 2017 to Feb 2018", "Sep 2016 to June 2017", "June 2015 to June 2016"]}
        image={MavenlinkImage}
        yearString="2.5 years"
        reviewImages={[paulette, huth]}
        description={<MavenlinkDescription/>}
    />
}

const technologies = [
    "Ruby",
    "Rails",
    "ES6+",
    "React",
    "Selenium",
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
        <div className="block mt-5">Mavenlink is a massive project management and resource suite used by the likes of Coca Cola.</div>
        <div className="block">
            I joined Mavenlink as an intern, and worked with them for a year. During this time, I rotated across multiple feature teams doing <b>full-stack pair programming and test driven development on production features</b>.
            I got to experience <b>Lean Product Management</b> while working with PM's with week long sprints, <b>User Centered Design</b> while working closely with designers, and <b>Extreme programming</b> from doing pair programming day to day with incredibly talented teams.
            <br/><br/>Near the end of the internship, I <b>lead a team to develop the core search capabilities</b> on Mavenlink user-generated content using ElasticSearch.
        </div>

        <div className="block">
            After finishing the internship, I moved back home to Canada, and <b>started a software consultancy</b> where I hired a few engineers and contracted with Mavenlink.
            During that time I led development of invoice templating system <b>used by thousands of Mavenlink customers</b>.
            Further, I designed and <b>implemented a library used across Mavenlink</b> to parse and format international currencies.
        </div>

        <div className="block">
            After graduating, I worked with Mavenlink as a Mid level engineer on the Business Intelligence team. There I built and maintained an ETL that converts relational data into a data model for business analytics, using AWS SNS and SQS.
            Additionally, I worked on the support team where I investigated complex system bugs and designed comprehensive solutions.
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
