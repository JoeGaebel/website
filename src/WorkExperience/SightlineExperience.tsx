import {WorkExperience} from "./WorkExperience";
import sightline from "../logos/sightline.png";
import React from "react";

const SightlineExperience = () => {
    return <WorkExperience
        city="London, Ontario"
        companyName="Sightline Innovation"
        titles={["Software Developer"]}
        dateString={["Sep 2014 to Mar 2015"]}
        image={sightline}
        description={<div>
            <ul>
                <li>- Built a web app with Node and Sencha ExtJS for visualizing real time data for clients in traffic monitoring</li>
                <li>- Managed both Mongo and Postgres databases through an RPC architecture</li>
            </ul>
        </div>}
    />
}

export default SightlineExperience
