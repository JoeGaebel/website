import {WorkExperience} from "./WorkExperience";
import sightline from "../logos/sightline.png";
import morgan from "../reviews/morgan.png";
import React from "react";

const SightlineImage = <img
    style={{
        marginTop: "-1.25rem",
        marginRight: "0.5rem",
        marginLeft: "-0.9rem"
    }}
    width="100px"
    src={sightline}
/>;

const SightlineExperience = () => {
    return <WorkExperience
        imageContainerMarginRight="-0.6rem"
        city="London, Ontario"
        companyName="Sightline Innovation"
        titles={["Software Developer"]}
        dateString={["Sep 2014 to Mar 2015"]}
        image={SightlineImage}
        reviewImages={[morgan]}
        description={<SightlineDescription/>}
    />
}

const technologies = ["Node.js", "Sencha ExtJS", "MongoDB", "PostgreSQL"]

const SightlineDescription = () => <div>
    <div className="block">Sightline is a machine and deep learning cloud services company.</div>
    <div className="block">
        I joined a small team in charge of creating a web app to visualize realtime traffic data.
        We were a team of students given a massive codebase where UI elements were generated with XML, and communicated with a Node backend using an RPC architecture.
        We weren't given any onboarding, and we <b>were to either <i>sink or swim</i></b>.
    </div>

    <div className="block">
        By a deadline we were to prove that our team could add full stack features to this codebase. Despite our team trying, we couldn't crack it.
    </div>
    <div className="block">
        A friend and I pulled an all-nighter to figure it out a day before this team's plug was pulled.
        We managed to figure out the intricacies of generating UI elements, interfacing with the backend over RPC, and integrating with the database. <b>This massive effort saved the team</b> and allowed us to move forward developing features on this project.
    </div>
    <div className="block">
        Went on to lead the team in architecture patterns such that we could parallelize feature development and integrate features seamlessly.
    </div>

    <div className="mt-5">The technologies I used most were:</div>
    <div className="mb-3">
        {technologies.map((keyword, index) => <span key={index}
                                                    className="tag is-info mr-1 mt-1 is-size-6">{keyword}</span>)}
    </div>
</div>;

export default SightlineExperience
