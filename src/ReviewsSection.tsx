import React, {FunctionComponent, useContext, useRef} from "react";
import {Section, SectionHeader} from "./Layout";
import amjad from "./reviews/amjad.jpeg"
import david from "./reviews/david.jpeg"
import fede from "./reviews/fede.jpeg"
import joseph from "./reviews/joseph.jpeg"
import christian from "./reviews/christian.jpeg"
import paulette from "./reviews/paulette.jpeg"
import andrew from "./reviews/andrew.jpeg"
import morgan from "./reviews/morgan.jpeg"
import gary from "./reviews/gary.jpeg"
import pivotal from "./logos/pivotal.png"
import mavenlink from "./logos/mavenlink.png"
import sightline from "./logos/sightline.png"
import {AppState, StateContext} from "./App";
import {HidingButton, HidingWrapper} from "./HidingComponents";


interface ReviewProps {
    name: string
    title: string
    work: string
    relationship: string
    sharedWork?: string
    image: string
    isFull?: boolean
    content: JSX.Element
}


const reviewColors: { [key: string]: string } = {
    "VMware Pivotal Labs": "has-background-success-light",
    "Service NSW": "has-background-success-light",
    "IAG": "has-background-success-light",
    "Mavenlink": "has-background-info-light",
    "Sightline Innovation": "has-background-link-light"
}

const Review: FunctionComponent<ReviewProps> = ({name, title, work, content, relationship, sharedWork, image, isFull}) => {
    const backgroundColor = reviewColors[sharedWork || work]

    return <div className={`column ${isFull ? "is-full" : "is-half"}`}>
        <div className={`card ${backgroundColor}`}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img className="is-rounded" src={image} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4 mb-0">{name}</p>
                        <p className="subtitle is-6">{title}, {work}</p>
                    </div>
                </div>

                <div className="content has-text-dark">
                    {content}
                </div>
                <time dateTime="2016-1-1">{relationship} at {sharedWork || work}</time>
            </div>
        </div>
    </div>
}

const ReviewsList: FunctionComponent = ({children}) => {
    const [appState, setState] = useContext(StateContext);
    const ref = useRef<HTMLDivElement>(null)

    const showReviews = appState!.showReviews

    function handleClick() {
        setState!((oldState: AppState): AppState => {
            return {
                ...oldState,
                showReviews: !oldState.showReviews
            }
        })

        if (showReviews) {
            window.scrollTo(0, ref.current!.offsetTop)
        }
    }

    return <div ref={ref}>
        <HidingWrapper showing={showReviews} heightOverride="50rem">
            <div className="columns is-multiline">
                {children}
            </div>
            <HidingButton showing={showReviews} onClick={handleClick}/>
        </HidingWrapper>
    </div>
}

const ReviewsSection = () => {
    return <Section id="reviews" style={{marginTop: "-10rem"}}>
        <SectionHeader>Reviews</SectionHeader>
        <ReviewsList>
            <ReviewLabel name="VMware Pivotal Labs" image={pivotal}/>
            <Amjad/>
            <David/>
            <Fede/>
            <Joseph/>
            <Christian/>
            <Gary/>
            <ReviewLabel name="Mavenlink" image={mavenlink} extraClasses="mt-5"/>
            <Paulette/>
            <Andrew/>
            <ReviewLabel name="Sightline Innovation" image={sightline} extraClasses="mt-5"/>
            <Morgan/>
        </ReviewsList>
    </Section>
}

interface ReviewLabelProps {
    name: string
    image: string
    extraClasses?: string
}

const ReviewLabel: FunctionComponent<ReviewLabelProps> = ({name, image, extraClasses}) => {
    return <div
        className={`is-flex is-align-items-center is-justify-content-center is-full column ${extraClasses ? extraClasses : ''}`}>
        <div><img width="100px" src={image}/></div>
        <div className="title has-text-weight-normal is-size-4 pb-1">{name}</div>
    </div>
}

const Gary = () => <Review
    name="Gary Barnett"
    title="Business Architect"
    work="IAG"
    relationship="March 8, 2021 - Gary worked with Joe"
    image={gary}
    content={
        <div>
            <div className="block">
                It’s been a pleasure to work with Joe for around 5 months on a Pivotal engagement with IAG, he has
                impressed with his ability to understand the objectives of our initiative, his outstanding software
                engineering and with the clarity and engaging nature that he has interacted with our stakeholders.
                I would highly recommend Joe and look forward to the next opportunity to collaborate again.
            </div>
        </div>
    }
/>

const Amjad = () => <Review
    isFull={true}
    image={amjad}
    name="Amjad Sidqi"
    title="Director of Pivotal Labs Sydney"
    work="VMware Pivotal Labs"
    relationship="October 25, 2020 - Amjad managed Joe directly"
    content={<div>
        <div className="block">
            It's hard to put into words just how valuable Joe is to Pivotal Labs Sydney. Joe is one of a kind developer.
            He exudes passion and commitment for understanding the problem space and breaking it into small chunks that
            help deliver value to market as soon as possible. I've seen Joe take unmanaged backlogs by the scruff of the
            neck and put together plans for teams to get started. Being an awesome developer he leads by example and
            ensures quality is not sacrificed for speed.
        </div>
        <div className="block">
            How is Joe able to do this? Very rarely have I come across a software engineer with the facilitation skills
            of Joe. He works with teams that gravitate towards his magnetic personality, earning trust and respect
            immediately. I have seen him facilitate user story mapping sessions where gaps in the team's knowledge would
            have normally blocked a team from delivery. Joe can bring clarity and helps teams to not over-think or
            engineer solutions all while having a great time. Joe brings teams together and helps a normal team become
            great!
        </div>
        <div className="block">
            As the manager of Pivotal Labs Sydney Joe gives me huge confidence, I have been able to staff him on
            greenfield projects, rewrites, mobile app developments, and complex legacy strangulations. Whatever the
            industry, project, or technology Joe has the maturity, clarity of thought, professionalism and consulting
            skills to help ensure great outcomes are achieved for users and our clients. As a software engineer Joe
            earns my highest recommendation.
        </div>
    </div>
    }
/>

const David = () => <Review
    image={david}
    name="David Julia"
    title="Director Of Pivotal Labs ANZ"
    work="VMware Pivotal Labs"
    relationship="November 2, 2020 - David managed Joe directly"
    content={<div>
        <div className="block">
            Joe is a really solid engineer, who looks beyond just engineering to make sure that whatever project he's on
            is setup for success. On the engineering front I've been impressed by Joe's ability to quickly pickup new
            concepts, apply them, and explain them back to people. Over the last few years I've seen Joe's understanding
            of various kinds of systems and architectures grow as he's solved problems in different domains. Both in
            terms of engineering and in general, Joe is also a very effective communicator who seeks first to understand
            where others are coming from before jumping in with an opinion. Glad to have Joe on the team!
        </div>
    </div>
    }
/>

const Fede = () => <Review
    image={fede}
    name="Fede Lopez Laborda"
    title="Engineering Manager"
    work="VMware Pivotal Labs"
    relationship="October 26, 2020 - Fede managed Joe directly"
    content={<div>
        <div className="block">
            Joe was my report for almost 3 years. I was struck at how quickly he adapted to the team and started adding
            value since day 1. He rapidly became a key team member, respected by his peers and clients. He does not
            hesitate to lead the most challenging tasks and bring them to completion. His ability to write clean code is
            unparalleled, he always makes sure the code scales and edge cases are tested. He also leads the team and
            makes sure they build the right thing by raising awareness when developers are distracted or the backlog is
            unclear. I would be privileged to have Joe in my team again and I am happy to recommend him, he is a great
            asset for any company looking for talent.
        </div>
    </div>
    }
/>

const Christian = () => <Review
    image={christian}
    name="Christian Warren"
    title="Principal Engineer"
    work="Service NSW"
    relationship="October 28, 2020 - Christian worked with Joe"
    content={<div>
        <div className="block">
            I worked with Joe on an engagement between Pivotal and Service NSW, working on one of the most complex and
            important transactions. It's difficult to put into words the extent of Joe's drive and enthusiasm - he was
            relentless in pushing the project forward, but always cheerful, and fun to work with. His understanding of
            the current systems involved were spot on and he literally became an expert in a matter of weeks (something
            which has taken me years at SNSW). Also technically brilliant, very knowledgable across the full stack,
            genuinely interested in his work and a great teacher to boot. I consider myself lucky to work with Joe - as
            I finished the engagement with a lot more knowledge than I started with thanks to him.
        </div>
    </div>
    }
/>

const Joseph = () => <Review
    image={joseph}
    name="Joseph Bonifacio"
    title="Senior Product Engineer"
    work="Service NSW"
    relationship="October 24, 2020 - Joe worked with Joseph"
    content={<div>
        <div className="block">
            Joe has a very unique gift of being able to drive a team towards success with not only his technical
            expertise, but also his dynamic energy.
            His passion and excitement for the work he his involved in extends beyond himself as he is always putting
            the teams success at the forefront.
            He was paramount to the success of our team in critical features we have developed and really led from the
            front from day one.
            Joe is as technically gifted as they come, and when you combine that with his ability to communicate and
            engage with people, then you have a very rare gift which he uses to elevate those around him towards
            success.
        </div>
    </div>
    }
/>

const Paulette = () => <Review
    isFull={true}
    image={paulette}
    name="Paulette Luftig"
    title="Director of Engineering"
    work="Mavenlink"
    relationship="October 28, 2016 - Paulette managed Joe directly"
    content={<div>
        <div className="block">
            Impressive colleague. Stellar human. Curious soul. I worked closely with and had the privilege of coaching
            Joe through his year long internship at Mavenlink. Joe brings a thoughtful and committed attitude to
            anything he chooses to do - he's fiercely caring, exceptionally courageous and wicked smart. From a coaching
            standpoint, I learned quickly that Joe only asks hard questions. His willingness and capability to take
            action on interesting and challenging problems, whether they relate to code or interpersonal dynamics, make
            Joe someone with exceptional integrity on the job and in his personal life. One last thing, he may as well
            make ‘adventurous fun seeker’ his middle name because he’s always up to something to make his life and the
            lives of those around him more interesting. Do not miss out on an opportunity to get to know or work with
            this man.
        </div>
    </div>
    }
/>

const Andrew = () => <Review
    image={andrew}
    isFull={true}
    name="Andrew Huth"
    title="Staff Software Engineer"
    work="Chan Zuckerberg Initiative"
    sharedWork="Mavenlink"
    relationship="July 14, 2016 - Andrew managed Joe directly"
    content={<div>
        <div className="block">
            Joe and I worked very closely together, and he was critical to the success of our team. No one cares more
            about continuously improving themselves, or about doing whatever it takes to help a team succeed. Also, Joe
            proved extremely technically capable. He participated in several large-scale projects, and managed one
            implementing ElasticSearch. Thank you Joe, for being a great teammate!
        </div>
    </div>
    }
/>


const Morgan = () => <Review
    image={morgan}
    isFull={true}
    name="Morgan Moskalyk"
    title="Founder & Computer Researcher"
    work="Deep6"
    sharedWork="Sightline Innovation"
    relationship="February 18, 2015 - Morgan managed Joe directly"
    content={<div>
        <div className="block">
            It’s rare that you come across standout talent like Joe. Joe is always the first and most willing developer
            to take on the hardest tasks during lengthy sprints. With great enthusiasm and character, Joe ventures
            through unchartered territory with little guidance proving consistent results. A valued member of our team
            as both a developer and teammate, I am confident in Joe’s technical capacity as much as I am with his
            leadership direction amongst the rest of the team to get the job done. My honest opinion is that every
            development team needs a ‘Joe’.
        </div>
    </div>
    }
/>

export default ReviewsSection
