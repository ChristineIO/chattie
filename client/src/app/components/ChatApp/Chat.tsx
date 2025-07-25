import ChatBody from "../ChatBody/ChatBody"
import Navbar from "../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

export default function Chat() {
    return (
        <div className="flex h-screen bg-[#0e0d1a]">
            <SideBar />

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col">
                {/* Top Nav */}
                <Navbar />

                {/* Chat Body */}
                <ChatBody />
            </main>
        </div>
    )
}