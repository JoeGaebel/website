import React, { CSSProperties } from "react";
import KFFabIcon from '../logos/kffab.png';
import AFRArticle from '../logos/afr-article.png';
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

const articleImageWrapperStyle: CSSProperties = {
    position: "relative",
    width: "75%",
    overflow: "hidden",
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto"
}

const articleImageStyle: CSSProperties = {
    width: "100%",
    display: "block"
}

const gradientOverlayStyle: CSSProperties = {
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    paddingBottom: "0.5rem",
    backgroundImage: "linear-gradient(to bottom, transparent 0%, transparent 50%, white 100%)"
}

const AFRArticleImage = () => <div style={articleImageWrapperStyle}>
    <img src={AFRArticle} alt="AFR Article" style={articleImageStyle} />
    <div style={gradientOverlayStyle}>
        <a
            href="https://www.afr.com/wealth/personal-finance/we-re-banking-on-a-boring-business-as-our-ticket-to-lifelong-wealth-20250811-p5mlxd"
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="button is-medium is-dark">Read more</button>
        </a>
    </div>
</div>;

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

    <div className="mt-5">Also, we were recently in the Australian Financial Review!</div>
    <AFRArticleImage/>
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
