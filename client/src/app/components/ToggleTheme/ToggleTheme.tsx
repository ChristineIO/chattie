"use client"

import Sun from "../../icons/Sun"
import Moon from "../../icons/Moon"
import { useState, useEffect } from "react"

const ToggleTheme = () => {
    let [isDark, setIsDark] = useState(true)
    useEffect(() => {
        const theme = isDark ? "dark" : "light";
        if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [isDark])
    return (
        <section className="pr-14 flex items-end">
            <button>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" onClick={() => setIsDark(!isDark)} />

                    {/* moon icon */}
                    <Moon />

                    {/* sun icon */}
                    <Sun />

                </label>
            </button>
        </section>
    )
}

export default ToggleTheme