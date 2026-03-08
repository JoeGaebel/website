import {useState, useEffect} from "react"

const proofs = [
    "Surfer",
    "Canadian Australian",
    "Fitness Enthusiast",
    "Amateur Sailor",
    "Meditator",
    "Motorcyclist",
    "Adventurer",
    "Sticky Chai Addict"
]

export default function SlidingList() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % proofs.length)
        }, 4500)
        return () => clearInterval(timer)
    }, [])

    return <div className="slide-in" key={index}>{proofs[index]}</div>
}
