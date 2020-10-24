import React, {FunctionComponent} from "react";

export const SectionHeader: FunctionComponent = ({children}) => <div
    className="
        is-size-5-mobile
        is-size-4-touch
        is-size-4-tablet
        is-size-3-desktop
        is-size-3-widescreen
        is-size-3-fullhd
        header-font
        mb-4
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

export const Section: FunctionComponent = ({children}) => <div className="
    section
">
    {children}
</div>
