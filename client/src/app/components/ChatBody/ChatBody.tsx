import FriendList from "../FriendList/FriendList";
import chatBody from "./chatBody.module.css"

export default function ChatBody() {
    return (
        <>
        <div className={`flex-1 bg-gradient-to-br from-[#0e0d1a] to-[#1a132b] p-6 text-white overflow-y-auto ${chatBody.body}`}>
            {/* <div className="text-gray-400 text-center mt-20">Start chatting...</div> */}
            <FriendList />
            </div>
        </>
    )
}