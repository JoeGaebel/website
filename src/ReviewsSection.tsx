import React, {FunctionComponent, useCallback, useContext, useRef} from "react";
import {FCWithChildren, Section, SectionHeader} from "./Layout";
import amjad from "./reviews/amjad.jpeg"
import ozlem from "./reviews/ozlem.jpeg"
import liz from "./reviews/liz.jpeg"
import david from "./reviews/david.jpeg"
import fede from "./reviews/fede.jpeg"
import joseph from "./reviews/joseph.jpeg"
import christian from "./reviews/christian.jpeg"
import paulette from "./reviews/paulette.jpeg"
import andrew from "./reviews/andrew.jpeg"
import morgan from "./reviews/morgan.jpeg"
import gary from "./reviews/gary.jpeg"
import carrie from "./reviews/carrie.jpeg"
import jvdl from "./reviews/jvdl.jpeg"
import dan from "./reviews/dan.jpeg"
import rhett from "./reviews/rhett.jpeg"
import pivotal from "./logos/pivotal.png"
import pathzero from "./logos/pathzero.svg"
import mavenlink from "./logos/mavenlink.png"
import sightline from "./logos/sightline.png"
import {AppState, StateContext} from "./App";
import {HidingButton, HidingWrapper} from "./HidingComponents";
import {trackInterestInReview, trackTogglingReviews} from "./InterestTracking";


const reviewColors: Record<string, string> = {
    "Pathzero": "has-background-primary-light",
    "VMware Pivotal Labs": "has-background-success-light",
    "Service NSW": "has-background-success-light",
    "Sonic Healthcare": "has-background-success-light",
    "IAG": "has-background-success-light",
    "Mavenlink": "has-background-info-light",
    "Sightline Innovation": "has-background-link-light"
}

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

const Review: FunctionComponent<ReviewProps> = ({ name, title, work, content, relationship, sharedWork, image, isFull }) => {
    const backgroundColor = reviewColors[sharedWork || work]

    const registerInterest = useCallback(() => {
        trackInterestInReview(name)
    }, [name])

    return <div className={`column ${isFull ? "is-full" : "is-half"}`} onMouseEnter={registerInterest}>
        <div className={`card ${backgroundColor}`}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img className="is-rounded" src={image} alt="Placeholder image" />
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

const ReviewsList: FCWithChildren = ({ children }) => {
    const [appState, setState] = useContext(StateContext);
    const ref = useRef<HTMLDivElement>(null)

    const showReviews = appState!.showReviews

    function handleClick() {
        trackTogglingReviews(!showReviews)

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
            <HidingButton showing={showReviews} onClick={handleClick} />
        </HidingWrapper>
    </div>
}

const ReviewsSection = () => {
    return <Section id="reviews" style={{ marginTop: "-10rem" }}>
        <SectionHeader>Reviews</SectionHeader>
        <ReviewsList>
            <ReviewLabel name="Pathzero" image={pathzero} imageWidth="65px" imageClasses="mr-2" />
            <Rhett />
            <JVDL />
            <Carrie />
            <Daniel />
            <ReviewLabel name="VMware Pivotal Labs" image={pivotal} extraClasses="mt-4" />
            <Amjad />
            <David />
            <Fede />
            <Joseph />
            <Christian />
            <Gary />
            <Ozlem />
            <Liz />
            <ReviewLabel name="Mavenlink" image={mavenlink} extraClasses="mt-5 mb-3" />
            <Paulette />
            <Andrew />
            <ReviewLabel name="Sightline Innovation" image={sightline} extraClasses="mt-5 mb-3" />
            <Morgan />
        </ReviewsList>
    </Section>
}

interface ReviewLabelProps {
    name: string
    image: string
    extraClasses?: string
    imageWidth?: string
    imageClasses?: string
}

const ReviewLabel: FunctionComponent<ReviewLabelProps> = ({ name, image, extraClasses, imageWidth, imageClasses }) => {
    return <div
        className={`is-flex is-align-items-center is-justify-content-center is-full column ${extraClasses ? extraClasses : ''}`}>
        <div><img width={imageWidth || "100px"} src={image} className={imageClasses || ''} /></div>
        <div className="title has-text-weight-normal is-size-4 pb-1">{name}</div>
    </div>
}

const Rhett = () => <Review
    isFull
    name="Rhett Blanch"
    title="Head of Platform Architecture"
    work="Pathzero"
    relationship="Feb 3, 2023 - Rhett managed Joe directly"
    image={rhett}
    content={
        <div>
            <div className="block">
                I have had the pleasure of working with Joe over the past six months, and I am consistently impressed by his technical skills and desire to take on board the “view of the customer”. A set of workshops he ran with the Engineering team have helped guide decisions on improving the platform.
            </div>
            <div className="block">
                Joe is a great communicator, always making sure to keep the team informed and on track through direct collaboration or running training.
            </div>
            <div className="block">
                Joe is proactive, recommending improvements processes and practices. 
            </div>
            <div className="block">
                He is a great asset to any team. 
            </div>
        </div>
    }
/>

const JVDL = () => <Review
    isFull
    name="John van der Loo"
    title="Senior Frontend Engineer"
    work="Pathzero"
    relationship="January 25, 2023 - JVDL worked with Joe"
    image={jvdl}
    content={
        <div>
            <div className="block">
                Joe has been amazing to work with. Our working relationship has been short-ish, but during that time it has become clear that he is an incredibly smart and passionate software engineer. During his time at Pathzero, Joe has really improved our testing foundation and strategies – the guy is incredibly passionate about Journey/Integration tests so that user journeys are represented throughout.
            </div>
            <div className="block">
                Straight up engineering isn't the only thing he cares about. Joe has been involved in improving our processes and strategy for working together. By mapping out solutions, and perhaps most importantly, understanding the value of and seeking the input of others while doing this. He's built out some great frameworks that we'll continue to use for gathering input and mapping user journeys. Joe also communicated findings very clearly to engineers and management alike, and he was able to communicate effectively to both audiences.
            </div>
            <div className="block">
                Personality wise, Joe is kind, warm, and has a good sense of humour, all of which helped him to quickly build a rapport with the team.
            </div>
            <div className="block">
                Overall, Joe is an incredibly solid software engineer and I would not hesitate in the slightest to recommend him for a position and I genuinely look forward to working with him again in the future.
            </div>
        </div>
    }
/>

const Daniel = () => <Review
    name="Daniel Hay"
    title="Engineering Team Lead"
    work="Pathzero"
    relationship="January 24, 2023 - Daniel worked with Joe"
    image={dan}
    content={
        <div>
            <div className="block">
                I worked with Joe for six months, and in that time he designed a complete rebuild of our core server side code and an overhaul of our testing strategy.
            </div>
            <div className="block">
                Joe develops solutions that take input from everyone, that are sane, robust, and that would meet anyone’s standards for excellence.
            </div>
            <div className="block">
                Joe is a very talented and knowledgeable engineer, but more important than that, he is an outstanding solution builder and communicator.
            </div>
        </div>
    }
/>

const Carrie = () => <Review
    name="Carrie Markel"
    title="Senior Product Designer"
    work="Pathzero"
    relationship="January 23, 2023 - Carrie worked with Joe"
    image={carrie}
    content={
        <div>
            <div className="block">
                Joe is that rare breed of developer who can think through and execute complex technical problems while just as easily switching to conversations around design and product.
            </div>
            <div className="block">
                His thoughtful questions and attention to detail have helped me think through problems more deeply as a designer while also pushing our team to adopt better processes for working together more effectively.
            </div>
            <div className="block">
                On top of it all, Joe's warm demeanour and sense of humour make it easy and enjoyable to work with him every day. I'll truly miss him and hope we'll work again together down the road.
            </div>
        </div>
    }
/>

const Liz = () => <Review
    name="Elizabeth Bridge"
    title="Senior Product Manager"
    work="Sonic Healthcare"
    relationship="April 4, 2022 - Elizabeth worked with Joe"
    image={liz}
    content={
        <div>
            <div className="block">
                I've been working with Joe for several months now, he has an enthusiasm and vibrance worth cloning. Joe brings a wealth of engineering knowledge to the team and he is a great communicator, ensuring he always communicates for mutual understanding. It's been a pleasure working with Joe and I will miss his energy when he moves to another engagement.
            </div>
        </div>
    }
/>

const Ozlem = () => <Review
    name="Ozlem Eskicioglu"
    title="Group Product Director"
    work="Service NSW"
    relationship="May 14, 2021 - Ozlem worked with Joe"
    image={ozlem}
    content={
        <div>
            <div className="block">
                Joe is a rare find - the type of team mate who energises those around him and galvanises them towards an outcome.
                An excellent coach and communicator, Joe has a real knack for simplifying the complex and getting everyone on the same page.
                An asset to any team.
            </div>
        </div>
    }
/>

const Gary = () => <Review
    name="Gary Barnett"
    title="Executive Manager"
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
    title="Senior Director"
    work="Roam Digital"
    sharedWork="VMware Pivotal Labs"
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
    sharedWork="VMware Pivotal Labs"
    title="Engineering Leader"
    work="Netflix"
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
    title="Software Development Manager"
    work="Amazon"
    sharedWork="VMware Pivotal Labs"
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
    title="Principal Product Engineer"
    work="Service NSW"
    relationship="October 24, 2020 - Joseph worked with Joe"
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
    name="Paulette Carlson"
    title="VP of Engineering"
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
