import { use, useState } from "react"
import Send from "../../icons/Send"
import InputFieldIcon from "../InputFieldIcon"
import chatInput from "./chatInput.module.css"

const ChatInput = () => {
    let [iconClassname, setIconClassname] = useState(`${chatInput.icon} ${chatInput.animate}`)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        if (e.target.value.length < 1) {
            setIconClassname(`${chatInput.icon}`)
        } 
    }
    return (
        <div className={`${chatInput.inputDiv}`}>
            <InputFieldIcon name="message-input" type="text" id="large-input" className="block"
                aria-label="chat input"
                placeholder="Type a message"
                onChange={handleChange}
                icon={<Send className={`${iconClassname}`} />}
            />
        </div>
    )
}

export default ChatInput