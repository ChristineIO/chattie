import Person from "../../icons/Person"
import chatBubble from "./chatBubble.module.css"

type ChatBubbleProps = {
    name: string;
    time: string;
    message: string;
}

const ChatBubble = ({name, time, message}:ChatBubbleProps) => {
    return (
        <div className={`chat chat-start ${chatBubble.chat} my-2.5 py-1.5`}>
            <div className="chat-image avatar">
                <div className="rounded-full fill-pink-200">
                    <Person className="w-12 h-12 py-1.5"/>
                </div>
            </div>
            <div className="chat-header">
                {name}
                <time className="text-xs opacity-50">{time}</time>
            </div>
            <div className={`chat-bubble py-3 ${chatBubble.message}`}>{message}</div>
        </div>
    )
}

export default ChatBubble