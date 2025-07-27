import ChatBubble from "../../components/ChatBubble/ChatBubble"
import ChatInput from "../../components/ChatInput/ChatInput"
import chatBody from "../../components/ChatBody/chatBody.module.css"

export default function Thread() {
    return (
        <div className={`${chatBody.bg}`}>
            ff
            <ChatBubble />
            <ChatBubble />
            <ChatInput />
        </div>
    )
}