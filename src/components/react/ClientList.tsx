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
            <div className="mb-6 mt-12">
                <div className="font-header text-[1.5rem] font-semibold leading-[1.125] text-dark mb-4">Products I've helped build:</div>
            </div>

            <div className="flex flex-wrap -mx-3">
                {children}
            </div>

            <HidingButton showing={showing} onClick={handleClick} />
        </HidingWrapper>
    </div>
}
