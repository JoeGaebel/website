import React, {CSSProperties, FunctionComponent} from "react";

export const SectionHeader: FunctionComponent = ({children}) => <div
    className="
        is-full
        has-text-centered
        is-size-1
        header-font
        mb-6
    ">
    {children}
</div>

export const SectionSubHeader: FunctionComponent = ({children}) => <div className="
    is-size-6-mobile
    is-size-6-touch
    is-size-5-tablet
    is-size-5-desktop
    is-size-4-widescreen
    is-size-4-fullhd
    header-font
">
    {children}
</div>

interface SectionProps {
    id?: string
    style?: CSSProperties
}
export const Section: FunctionComponent<SectionProps> = ({children, id, style}) => <div
    id={id}
    className="section mb-5"
    style={{...style}}>
    {children}
</div>
