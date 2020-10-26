import React, {FunctionComponent} from "react";

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

export const SectionText: FunctionComponent = ({children}) => <div className="
    is-size-6-mobile
    is-size-6-touch
    is-size-6-tablet
    is-size-6-desktop
    is-size-5-widescreen
    is-size-5-fullhd
    body-font
">
    {children}
</div>

interface SectionProps {
    id?: string
}
export const Section: FunctionComponent<SectionProps> = ({children, id}) => <div id={id} className="
    section
    mb-5
">
    {children}
</div>
