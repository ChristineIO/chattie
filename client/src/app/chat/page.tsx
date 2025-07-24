"use client"
import { authCheck } from "@/api/api"

export default function ChatApp() {
    const checkAuth = async () => {
        let response = await authCheck()
        console.log(response)
    }
    return (
        <><button onClick={checkAuth}>Auth</button></>
    )
}