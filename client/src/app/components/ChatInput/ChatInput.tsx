'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import Send from "../../icons/Send"
import InputFieldIcon from "../InputFieldIcon"
import chatInput from "./chatInput.module.css"
import { postMessageToThread, authCheck } from "@/api/api"
import { CustomJwtPayload } from "@/api/types"
import { jwtDecode } from "jwt-decode"


const ChatInput = () => {
    const pathname = usePathname()
    let id = pathname.split("/").pop();
    console.log(`Current pathname: ${id}`)
    let value = ""
    let [disabled, setDisabled] = useState(false)
    let fill = disabled ? "#676D78" : "#cfcfcf"

    const [username, setUsername] = useState("")

    useEffect(() => {
        async function getUserData() {
            let user = await authCheck()
            const token = user.token

            const decode_user = jwtDecode<CustomJwtPayload>(token.toString())

            setUsername(decode_user.username)
            console.log(`Username set to: ${decode_user.username}`)
            console.log(username);

        }
        getUserData()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`Submitting message: ${value}`)
        let response = await postMessageToThread({ _id: id, content: value, sender: username })
        console.log(`Response from postMessageToThread: ${JSON.stringify(response)}`);

        if (!response) {
            console.error("Failed to post message")
        }
    }
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
        <form className={`${chatInput.inputDiv}`} onSubmit={handleSubmit}>
            <InputFieldIcon name="message-input" type="text" btnType='submit' id="large-input" className="block"
                aria-label="chat input"
                placeholder="Type a message"
                onChange={handleChange}
                onFocus={() => setDisabled(true)}
                isDisabled={disabled}
                icon={<Send className={`${chatInput.icon} ${chatInput.animate}`} fill={fill} />}
            />
        </form>
    )
}

export default ChatInput