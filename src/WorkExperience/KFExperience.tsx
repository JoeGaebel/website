import React from "react";
import KFFabIcon from '../logos/kffab.png';
import {WorkExperience} from "./WorkExperience";

const principles = [
    "Principle-centered leadership",
    "Lean manufacturing"
]

const technologies = [
    "React",
    "Next.js"
]

const KFFabImage = <img
    style={{
        width: "68px",
        marginTop: "-0.4rem",
        marginRight: "2rem",
        marginBottom: "1rem",
        marginLeft: "0rem",
    }}
    src={KFFabIcon}
/>;

const KFDescription = <div>
    <div className="block"><p>K&F Fabrications is a small aluminium and steel fabrication business on the Sunshine Coast.</p><p>We fabricate gates, fences, privacy screens, and custom projects.</p></div>
    <div className="block"><b>I build custom shop floor and business software</b>, handle IT and infrastructure, and work on streamlining operations around the shop. I work with my partner on strategy and operations, implementing equipment upgrades, and shaping our people practices (hiring, values/mission work, org-structure, incentives).</div>

    <div className="block">In short - <b>I help modernize and scale a hands-on business outside my usual 9-to-5.</b></div>

    <div className="mt-5">The practices I help instil are:</div>
    <div className="mb-3">
        {principles.map((keyword, index) => <span key={index}
                                                  className="tag is-success mr-1 mt-1 is-size-6">{keyword}</span>)}
    </div>

    <div className="mt-5">I build apps for the biz with:</div>
    <div className="mb-3">
        {technologies.map((keyword, index) => <span key={index}
                                                    className="tag is-info mr-1 mt-1 is-size-6">{keyword}</span>)}
    </div>
</div>

const KFExperience = () => {
    return <WorkExperience
        imageContainerMarginRight="-1.5rem"
        city="Sunshine Coast, Australia"
        companyName="K&F Fabrications"
        titles={["Backseat Director"]}
        dateString={["January 2025 to present"]}
        years={''}
        image={KFFabImage}
        description={KFDescription}
    />
}

export default KFExperience
