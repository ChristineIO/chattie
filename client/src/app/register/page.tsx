"use client"
import { createUser, getUser } from "@/api/api"
import React, { useEffect, useState } from "react"

export default function RegisterPage() {
    let [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        bio: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function createNewUser(e: React.FormEvent) {
        e.preventDefault()
        let response = await createUser(form)
        console.log(response)
    }
    return (
        <main>
            <form onSubmit={createNewUser}>
                <fieldset>
                    <legend>Register</legend>

                    <section>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="bio">Bio:</label>
                        <input
                            type="text"
                            id="bio"
                            name="bio"
                            value={form.bio}
                            onChange={handleChange}
                        />
                    </section>

                    <section>
                        <button type="submit">Submit</button>
                    </section>
                </fieldset>
            </form>
        </main>
    )
}