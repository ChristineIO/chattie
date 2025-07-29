import { use, useState } from "react"
import Send from "../../icons/Send"
import InputFieldIcon from "../InputFieldIcon"
import chatInput from "./chatInput.module.css"

const ChatInput = () => {
    let value = ""
    let [disabled, setDisabled] = useState(false)
    let fill = disabled ? "#676D78" : "#cfcfcf"
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        let inputValue = e.target.value
        value = inputValue
        console.log(`Input value changed: ${inputValue} ${value}`)
        if (e.target.value.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <div className={`${chatInput.inputDiv}`}>
            <InputFieldIcon name="message-input" type="text" id="large-input" className="block"
                aria-label="chat input"
                placeholder="Type a message"
                onChange={handleChange}
                onFocus={() => setDisabled(true)}
                isDisabled={disabled}
                icon={<Send className={`${chatInput.icon} ${chatInput.animate}`} fill={fill} />}
            />
        </div>
    )
}

export default ChatInput