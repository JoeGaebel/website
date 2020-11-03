import React, {FunctionComponent, useContext, useRef} from "react";
import {AppState, StateContext} from "../App";
import {HidingButton, HidingWrapper} from "../HidingComponents";

interface ClientProps {
    name: string
    projectName: string
    image: string
    description: string
    imageSizeOverride?: string
    keywords?: string[]
    link?: string
}

export const ClientList: FunctionComponent = ({children}) => {
    const [appState, setState] = useContext(StateContext);
    const ref = useRef<HTMLDivElement>(null)

    const showPivotalClients = appState!.showPivotalClients

    function handleClick() {
        setState!((oldState: AppState): AppState => {
            return {
                ...oldState,
                showPivotalClients: !oldState.showPivotalClients
            }
        })

        if (showPivotalClients) {
            window.scrollTo(0, ref.current!.offsetTop)
        }
    }

    return <div ref={ref}>
        <HidingWrapper showing={showPivotalClients}>
            <div className="mb-5 mt-6">
                <div className="header-font title is-size-4 mb-4">Products I've helped build:</div>
            </div>

            <div className="columns is-multiline">
                {children}
            </div>

            <HidingButton showing={showPivotalClients} onClick={handleClick}/>
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
