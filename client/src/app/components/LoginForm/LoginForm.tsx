"use client"

import Button from "../Button"
import Link from "next/link"
import InputField from "../InputField"
import forms from "../../styles/forms.module.css"
import { compareUser } from "@/api/api"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import InputFieldPassword from "../InputFieldPassword"

export default function LoginForm() {
    let router = useRouter()
    let [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
        let formEmail = form.email;
        let formPassword = form.password;
        let formObject = {
            email: formEmail,
            password: formPassword
        }
        let response = await compareUser(formObject)
        console.log(response)
        if (!response) {
            alert('Try again or create an account!')
        } else {
            router.push('/chat')
        }
    }

    return (
        <main className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className={forms.formBox}>
                <h1 className="text-3xl">Login To Chattie</h1>
                <InputField label="Email" type="email" name="email" maxLength={254} onChange={handleChange} />
                <InputFieldPassword label="Password" type="password" name="password" maxLength={64} onChange={handleChange} />
                <section className="mt-2.5">
                    <Button type="submit" className={`pt-2.5 pb-2.5 pl-4 pr-4 rounded-xl ${forms.formBtn}`}>Login</Button>
                </section>
                <Link
                    href="/register"
                    className={`underline primary`}>
                    Create an Account
                </Link>
            </form>
        </main>
    )
}