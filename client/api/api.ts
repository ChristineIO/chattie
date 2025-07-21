let url = process.env.NEXT_PUBLIC_URL

export interface UserData {
    name: string;
    username: string;
    email: string;
    password: string;
    bio: string;
}

export async function getUser() {
    let response = await fetch(`${url}/api/users`)
    let json = await response.json()
    return json
}

export async function createUser(user: UserData): Promise<any> {
    let response = await fetch(`${url}/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    return await response.json()
}