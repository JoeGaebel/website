import {WorkExperience} from "./WorkExperience";
import fullsail from "../logos/fullsail.png";
import React from "react";

const FullSailExperience = () => {
    return <WorkExperience
        city="London, Ontario"
        companyName="Full Sail Solutions"
        titles={["Founder"]}
        dateString={["Sep 2016 to June 2017"]}
        image={fullsail}
        description={<div>
            <ul>
                <li>- Incorporated and founded a software consultancy during undergraduate degree</li>
                <li>- Led development of invoice templating system used by thousands of Mavenlink customers</li>
                <li>- Designed and implemented a library used across Mavenlink to parse and format international currencies</li>
            </ul>
        </div>}
    />
}

export default FullSailExperience
