import chatInput from "./chatInput.module.css"

const ChatInput = () => {
    return (
            <div className={`${chatInput.inputDiv}`}>
            <input type="text" id="large-input"
                className="block"
                aria-label="chat input"
                placeholder="Type a message"
            />
        </div>
    )
}

export default ChatInput