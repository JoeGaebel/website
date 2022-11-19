import React, { CSSProperties } from "react";
import { FCWithChildren } from "./Layout";

function getWrapperStyle(heightOverride?: string): CSSProperties {
    return {
        maxHeight: heightOverride || "40rem",
        position: "relative",
        overflow: "hidden"
    }
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
    paddingBottom: "0.5rem",
    backgroundImage: "linear-gradient(to bottom, transparent, white)"
}

const seeLessStyle: CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
}

interface HidingWrapperProps {
    showing?: boolean
    heightOverride?: string
}
export const HidingWrapper: FCWithChildren<HidingWrapperProps> = ({children, showing, heightOverride}) => {
    if (!showing) {
        return <div style={getWrapperStyle(heightOverride)}>{children}</div>
    } else {
        return <div>{children}</div>
    }
}

interface HidingButtonProps {
    showing?: boolean
    onClick: () => void
}
export const HidingButton: FCWithChildren<HidingButtonProps> = ({showing, onClick}) => {
    if (!showing) {
        return <div style={seeMoreStyle}>
            <button className="button is-medium is-dark" onClick={onClick}>See more</button>
        </div>
    } else {
        return <div style={seeLessStyle}>
            <button className="mt-4 button is-medium is-dark" onClick={onClick}>See less</button>
        </div>
    }
}
