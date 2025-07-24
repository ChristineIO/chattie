import Link from "next/link"
import navbar from "./navbar.module.css"

export default function Navbar() {
    return (
        <main>
            <section className={navbar.navBar}><Link href="/">Chattie</Link></section>
        </main>
    )
}