"use client"
import { createUser } from "@/api/api"
import React, { useState } from "react"
import forms from "../styles/forms.module.css"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"
import Button from "../components/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import InputFieldPassword from "../components/InputFieldPassword"

export default function RegisterPage() {
    let router = useRouter()
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
        router.push('/app')
    }
    return (
        <main>
            <form onSubmit={createNewUser} className={`${forms.formBox}`}>
                <h1 className="text-3xl">Welcome</h1>
                <InputField label="Name" type="text" name="name" id="name" value={form.name} onChange={handleChange} maxLength={40} classname="w-96" />
                <InputField label="Username" type="text" name="username" id="username" value={form.username} onChange={handleChange} maxLength={40} classname="w-96" />
                <InputField label="Email" type="email" name="email" id="email" value={form.email} onChange={handleChange} maxLength={40} classname="w-96" />
                <InputFieldPassword label="Password" type="password" name="password" id="password" value={form.password} onChange={handleChange} maxLength={40} classname="w-96" />
                <TextArea label="Bio" name="bio" id="bio" value={form.bio} onChange={handleChange} maxLength={40} classname="w-96 h-9/10" />
                <section className="mt-2.5">
                    <Button type="submit" className={`pt-2.5 pb-2.5 pl-4 pr-4 rounded-xl ${forms.formBtn}`}>Register</Button>
                </section>
                <Link
                    href="/login"
                    className={`underline primary`}>
                    Already have an account?
                </Link>
            </form>
        </main>
    )
}