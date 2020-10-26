import React, {CSSProperties, FunctionComponent, useContext, useRef} from "react";
import {AppState, StateContext} from "../App";

interface ClientProps {
    name: string
    projectName: string
    image: string
    description: string
    imageSizeOverride?: string
    keywords?: string[]
    link?: string
}

interface ClientListProps {
    experienceName?: string
}

const overflowHiddenStyle: CSSProperties = {
    maxHeight: "40rem",
    position: "relative",
    overflow: "hidden"
}

const seeMoreStyle: CSSProperties = {
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    bottom: "0",
    left: "0",
    width: "100%",
    textAlign: "center",
    height: "40%",
    backgroundImage: "linear-gradient(to bottom, transparent, white)"
}

const seeLessStyle: CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
}

interface HidingWrapperProps {
    showingProjects: boolean | undefined
}
const HidingWrapper: FunctionComponent<HidingWrapperProps> = ({children, showingProjects}) => {
    if (!showingProjects) {
        return <div style={overflowHiddenStyle}>{children}</div>
    } else {
        return <div>{children}</div>
    }
}


interface HidingButtonProps {
    showingProjects: boolean | undefined
    onClick: () => void
}
const HidingButton: FunctionComponent<HidingButtonProps> = ({showingProjects, onClick}) => {
    if (!showingProjects) {
        return <div style={seeMoreStyle}>
            <button className="button is-medium is-info" onClick={onClick}>See more</button>
        </div>
    } else {
        return <div style={seeLessStyle}>
            <button className="mt-4 button is-medium is-info" onClick={onClick}>See less</button>
        </div>
    }
}

export const ClientList: FunctionComponent<ClientListProps> = ({children, experienceName = ""}) => {
    const [state, setState] = useContext(StateContext);
    const ref = useRef<HTMLDivElement>(null)

    function handleClick() {
        setState!((oldState: AppState) => {
            return {
                ...oldState,
                [experienceName]: !oldState[experienceName]
            }
        })

        if (state?.[experienceName]) {
            window.scrollTo(0, ref.current!.offsetTop)
        }
    }

    return <div ref={ref}>
        <HidingWrapper showingProjects={state?.[experienceName]}>
            <div className="mb-5 mt-6">
                <div className="header-font title is-size-4 mb-4">Products I've helped build:</div>
            </div>

            <div className="columns is-multiline">
                {children}
            </div>

            <HidingButton showingProjects={state?.[experienceName]} onClick={handleClick}/>
        </HidingWrapper>
    </div>
}

export const Client: FunctionComponent<ClientProps> = ({name, image, description, projectName, imageSizeOverride, keywords, link}) => {
    return <div className="column is-one-third mb-0">
        <div className="card">
            <div className="card-content">
                <div className="mb-2" style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <div
                            className="header-font is-size-6 subtitle mb-1 has-text-weight-semibold">{projectName}</div>
                        <div className="header-font is-size-7 subtitle mb-0">{name}</div>
                    </div>
                    <div className="pl-2">
                        <img width={imageSizeOverride || "80px"} height="auto" src={image}/>
                    </div>

                </div>

                {!link && <div className="mt-4"/>}

                {link && <div className="mb-2 body-font" style={{lineHeight: "16px"}}>
                    <a target="_blank" className="is-size-7" href={link}>{link}</a></div>}
                <div>{description}</div>

                {keywords && <div className="mt-4">
                    {keywords?.map((keyword, index) => <span key={index}
                                                             className="tag is-info is-light mr-1 mt-1 is-size-7">{keyword}</span>)}
                </div>}
            </div>
        </div>
    </div>
}
