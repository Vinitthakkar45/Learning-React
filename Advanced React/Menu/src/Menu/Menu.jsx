import { cloneElement } from "react"
import { Children } from "react"
import { useState } from "react"

export default function Menu({ children }) {
    const [open, setOpen] = useState(true)

    function toggle() {
        console.log("Toggled")
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    )
}
