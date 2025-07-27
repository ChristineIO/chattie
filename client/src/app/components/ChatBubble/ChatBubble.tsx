import Person from "../../icons/Person"
import chatBubble from "./chatBubble.module.css"

const ChatBubble = () => {
    return (
        <div className={`chat chat-start ${chatBubble.chat}`}>
            <div className="chat-image avatar">
                <div className="rounded-full fill-pink-200">
                    <Person className="w-12 h-12 py-1.5"/>
                </div>
            </div>
            <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>
    )
}

export default ChatBubble