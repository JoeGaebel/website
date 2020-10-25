import React, {FunctionComponent, useContext} from "react";
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

export const ClientList: FunctionComponent<ClientListProps> = ({children, experienceName = ""}) => {
    const [state, setState] = useContext(StateContext);

    function handleClick() {
        setState!((oldState: AppState) => {
            return {
                ...oldState,
                [experienceName]: !oldState[experienceName]
            }
        })
    }

    if (state?.[experienceName]) {
        return <>
            <div className="mb-5 mt-6">
                <div className="header-font title is-size-4 mb-4">Products I've helped build:</div>
            </div>

            <div className="columns is-multiline">
                {children}
            </div>

            <button className="button is-medium is-info is-light" style={{width: "100%"}} onClick={handleClick}>Hide portfolio</button>
        </>
    }


    return <>
        <div className="mb-5 mt-6">
            <button className="button is-medium is-info is-light" style={{width: "100%"}} onClick={handleClick}>Show portfolio...</button>
        </div>
    </>
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

                {link && <div className="mb-2 body-font" style={{lineHeight: "16px"}}><a className="is-size-7" href={link}>{link}</a></div>}
                <div>{description}</div>

                {keywords && <div className="mt-4">
                    {keywords?.map((keyword, index) => <span key={index}
                                                             className="tag is-info is-light mr-1 mt-1 is-size-7">{keyword}</span>)}
                </div>}
            </div>
        </div>
    </div>
}
