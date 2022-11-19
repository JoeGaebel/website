import React, { CSSProperties, FC, PropsWithChildren } from "react";

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>

export const SectionHeader: FCWithChildren = ({children}) => <div
    className="
        is-full
        has-text-centered
        is-size-1
        header-font
        mb-6
    ">
    {children}
</div>

export const SectionSubHeader: FCWithChildren = ({children}) => <div className="
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
export const Section: FCWithChildren<SectionProps> = ({children, id, style}) => <div
    id={id}
    className="section mb-5"
    style={{...style}}>
    {children}
</div>
