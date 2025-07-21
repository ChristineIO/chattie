export default function LoginPage() {
    return (
        <main>
            <form action="/login" method="post" className="flex">
                <input type="email" className="outline-1" name="email" id="email" placeholder="email"/>
                <input type="password" className="outline-1" name="password" id="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </main>
    )
}