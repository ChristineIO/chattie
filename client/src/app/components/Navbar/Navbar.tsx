import HomeLink from "../HomeLink"

export default function Navbar() {
    return (
        <div className="h-14 bg-[#503c75] text-white flex items-center px-6 border-b border-pink-300/30 shadow-sm">
            <HomeLink />
        </div>
    )
}