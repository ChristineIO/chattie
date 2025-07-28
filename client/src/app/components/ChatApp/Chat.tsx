"use client"

import { useState } from "react"
import ChatBody from "../ChatBody/ChatBody"
import Navbar from "../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"
import SideBarButton from "../SideBarButton/SideBarButton"
import FriendSection from "../FriendSection/FriendSection"

export default function Chat() {
    let [friendList, setFriendList] = useState(false)

    const toggle = () => {
        setFriendList(true)
        if (friendList) {
            setFriendList(false)
        }
    }
    return (
        <div className="flex h-screen bg-[#0e0d1a]">
            {/* <SideBar button={<SideBarButton onClick={toggle} />} /> */}

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col">
                {/* Top Nav */}
                <Navbar />

                {/* Chat Body */}
                <ChatBody children={friendList ? <FriendSection /> : <div className="text-gray-400 text-center mt-20">Start chatting...</div>} />

            </main>
        </div>
    )
}