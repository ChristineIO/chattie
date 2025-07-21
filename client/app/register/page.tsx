"use client"
import {getUser} from "@/api/api"
// import { useEffect, useState } from "react"

export default function RegisterPage() {
    //let [form, setForm] = useState()
//     let handleSubmit = async (e) => {
//         e.preventDefault()
//
//         let response = await fetch('/')
    //     }
    async function testingFeat() {
        let response = await getUser()
        console.log(response)
    }
    return (
        <main>
            <form action="/register" method="post">
                <input type="name" className="outline-1" name="name" id="name" placeholder="First Name and Last Name"/>
                <input type="username" className="outline-1" name="username" id="username" placeholder="username"/>
                <input type="email" className="outline-1" name="email" id="email" placeholder="email"/>
                <input type="password" className="outline-1" name="password" id="password" placeholder="password" />
                <button type="submit">Register</button>
            </form>
            <button onClick={testingFeat}>swwwwwww</button>
        </main>
    )
}