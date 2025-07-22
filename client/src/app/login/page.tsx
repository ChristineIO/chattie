import Button from "../components/Button"
import InputField from "../components/InputField"
import forms from "../styles/forms.module.css"

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center">
            <form action="/login" method="post" className={forms.formBox}>
                <h1 className="text-3xl">Login To Chattie</h1>
                <InputField label="Email" type="email" name="email" maxLength={40} />
                <InputField label="Password" type="password" name="password" maxLength={40} />
                <section className="mt-2.5">
                    <button type="submit" className={`pt-2.5 pb-2.5 pl-4 pr-4 rounded-xl ${forms.formBtn}`}>Login</button>
                </section>
            </form>
        </main>
    )
}