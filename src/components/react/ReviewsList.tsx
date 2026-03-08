import {useState, useRef, type PropsWithChildren} from "react"
import {HidingWrapper, HidingButton} from "./HidingComponents"

interface Props {
    heightOverride?: string
}

export default function ReviewsList({children, heightOverride}: PropsWithChildren<Props>) {
    const [showing, setShowing] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    function handleClick() {
        setShowing(prev => !prev)
        if (showing) {
            window.scrollTo(0, ref.current!.offsetTop)
        }
    }

    return <div ref={ref}>
        <HidingWrapper showing={showing} heightOverride={heightOverride}>
            {children}
            <HidingButton showing={showing} onClick={handleClick} />
        </HidingWrapper>
    </div>
}
