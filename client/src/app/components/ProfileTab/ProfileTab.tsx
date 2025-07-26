"use client"

import { authCheck } from "@/api/api"
import Person from "../../icons/Person"
import profile from "./profile.module.css"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { CustomJwtPayload } from "@/api/types"

type ProfileTabProps = {
    name?: string;
    username?: string;
}

const ProfileTab = ({ }: ProfileTabProps) => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    useEffect(() => {
        async function getUserData() {
            let user = await authCheck()
            const token = user.token
            const decode_user = jwtDecode<CustomJwtPayload>(token.toString())
            
            setName(decode_user.name)
            setUsername(decode_user.username)
        }
        getUserData()
    }, [])
    return (
        <div className={`${profile.profileTab} text-sm rounded-2xl `}>
            <Person className={`w-14 h-14 pl-1 ${profile.icon}`} fill="#FDEFF4" />
            <div className={`${profile.info}`}>
                <section className="pl-2" id="name">{name}</section>
                <section className="pl-2" id="username">{username}</section>
            </div>
        </div>
    )
}
export default ProfileTab