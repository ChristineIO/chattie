"use client"

import Sun from "../../icons/Sun"
import Moon from "../../icons/Moon"
import HomeLink from "../HomeLink"
import { useState, useEffect } from "react"

export default function Navbar() {
    let [isDark, setIsDark] = useState(true)
    useEffect(() => {
        const theme = isDark ? "dark" : "light";
        if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [isDark]);
    return (
        <div className="h-14 bg-[#503c75] text-white flex items-center px-6 border-b border-pink-300/30 shadow-sm">
            <section className="pr-14">
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
            <HomeLink />
        </div>
    )
}