"use client"
import { createUser, getUser } from "@/api/api"
import React, { useEffect, useState } from "react"
import forms from "../styles/forms.module.css"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"

export default function RegisterPage() {
    let [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        bio: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function createNewUser(e: React.FormEvent) {
        e.preventDefault()
        let response = await createUser(form)
        console.log(response)
    }
    return (
        <main className="flex items-center justify-center">
            <form onSubmit={createNewUser} className={`w-3/6 ${forms.formBox}`}>
                <h1 className="text-3xl">Welcome</h1>
                <InputField label="Name" type="text" name="name" id="name" value={form.name} onChange={handleChange} maxLength={40} classname="w-96" />
                <InputField label="Username" type="text" name="username" id="username" value={form.username} onChange={handleChange} maxLength={40} classname="w-96" />
                <InputField label="Email" type="email" name="email" id="email" value={form.email} onChange={handleChange} maxLength={40} classname="w-96" />
                <InputField label="Password" type="password" name="password" id="password" value={form.password} onChange={handleChange} maxLength={40} classname="w-96" />
                <InputField label="Bio" type="text" name="bio" id="bio" value={form.bio} onChange={handleChange} maxLength={40} classname="w-96 h-9/10" />
                <TextArea label="Bio" name="bio" id="bio" value={form.bio} onChange={handleChange} maxLength={40} classname="w-96 h-9/10" />
                <section className="mt-2.5">
                    <button type="submit" className={`pt-2.5 pb-2.5 pl-4 pr-4 rounded-xl${forms.formBtn}`}>Register</button>
                </section>
            </form>
        </main>
    )
}