import React, {useEffect, useRef, useState} from "react"
import mermaid from "mermaid"

mermaid.initialize({startOnLoad: false, theme: "default"})

let idCounter = 0

const Mermaid = ({chart}: { chart: string }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [id] = useState(() => `mermaid-${idCounter++}`)

    useEffect(() => {
        if (!containerRef.current) return
        containerRef.current.innerHTML = chart
        containerRef.current.removeAttribute("data-processed")
        mermaid.init(undefined, containerRef.current)
    }, [chart])

    return <div ref={containerRef} className="mermaid">{chart}</div>
}

export default Mermaid
