import Send from "../../icons/Send"
import InputFieldIcon from "../InputFieldIcon"
import chatInput from "./chatInput.module.css"

const ChatInput = () => {
    return (
            <div className={`${chatInput.inputDiv}`}>
            <InputFieldIcon name="message-input" type="text" id="large-input" className="block"
                aria-label="chat input"
                placeholder="Type a message" icon={<Send className={`${chatInput.icon}`}/>} />
        </div>
    )
}

export default ChatInput