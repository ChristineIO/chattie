export default function RegisterPage() {
    return (
        <main>
            <form action="/register" method="post">
                <input type="name" className="outline-1" name="name" id="name" placeholder="First Name and Last Name"/>
                <input type="username" className="outline-1" name="username" id="username" placeholder="username"/>
                <input type="email" className="outline-1" name="email" id="email" placeholder="email"/>
                <input type="password" className="outline-1" name="password" id="password" placeholder="password" />
                <button type="submit">Register</button>
            </form>
        </main>
    )
}