import {useState, useRef, type PropsWithChildren} from "react"
import {HidingWrapper, HidingButton} from "./HidingComponents"

export default function ClientList({children}: PropsWithChildren) {
    const [showing, setShowing] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    function handleClick() {
        setShowing(prev => !prev)
        if (showing) {
            window.scrollTo(0, ref.current!.offsetTop)
        }
    }

    return <div ref={ref}>
        <HidingWrapper showing={showing}>
            <div className="mb-5 mt-6">
                <div className="header-font title is-size-4 mb-4">Products I've helped build:</div>
            </div>

            <div className="columns is-multiline">
                {children}
            </div>

            <HidingButton showing={showing} onClick={handleClick} />
        </HidingWrapper>
    </div>
}
