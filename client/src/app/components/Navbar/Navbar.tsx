
import HomeLink from "../HomeLink"
import ToggleSidebar from "../ToggleSidebar/ToggleSidebar"
import ToggleTheme from "../ToggleTheme/ToggleTheme"
import navbar from "./navbar.module.css"

type NavbarProps = {
    toggleSidebar?: React.JSX.Element;
}

export default function Navbar({toggleSidebar}:NavbarProps) {
    return (
        <div className={`h-14 bg-[#503c75] text-white flex items-center px-6 border-b border-pink-300/30 shadow-sm ${navbar.navBar}`}>
            {toggleSidebar}
            <HomeLink className={`ml-16`}/>
            <ToggleTheme />
        </div>
    )
}