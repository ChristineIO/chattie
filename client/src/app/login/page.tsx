import Button from "../components/Button"
import InputField from "../components/InputField"
import forms from "../styles/forms.module.css"

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center">
            <form action="/login" method="post" className={forms.formBox}>
                <h1 className="text-4xl">Login</h1>
                <InputField label="Email" type="email" name="email" maxLength={40} />
                <InputField label="Password" type="password" name="password" maxLength={40} />
                <section className="mt-2.5">
                    <button type="submit" className="hover:bg-pink-300 pt-2.5 pb-2.5 pl-4 pr-4 rounded-lg">Login</button>
                </section>
            </form>
        </main>
    )
}