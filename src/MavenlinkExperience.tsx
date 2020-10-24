import {WorkExperience} from "./WorkExperience";
import mavenlink from "./logos/mavenlink.png";
import React from "react";

const MavenlinkExperience = () => {
    return <WorkExperience
        city="San Francisco, California"
        companyName="Mavenlink"
        titles={["Mid Software Engineer", "Junior Software Engineer"]}
        dateString={["July 2017 to Feb 2018", "June 2015 to June 2016"]}
        image={mavenlink}
        description={<div>
           Mavenlink is a project management SaaS
            <ul>
                <li>- Built and maintained an ETL that converts relational data into a logical data model for business analytics</li>
                <li>- Investigated complex system bugs and designed comprehensive solutions on the support team</li>
                <li>- Spearheaded the development of search capabilities on Mavenlink user-generated content using ElasticSearch</li>
                <li>- Developed core product features using full-stack test-driven development</li>
            </ul>
        </div>}
    />
}

export default MavenlinkExperience
