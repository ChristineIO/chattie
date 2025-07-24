let url = process.env.NEXT_PUBLIC_URL

export interface UserData {
    name: string;
    username: string;
    email: string;
    password: string;
    bio: string;
}
export type CompareUser =  {
    email: string,
    password: string,
}


export async function getUser() {
    let response = await fetch(`${url}/api/users`)
    let json = await response.json()
    return json
}

export async function compareUser(user: CompareUser): Promise<any> {
    let response = await fetch(`${url}/api/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include"
    })

    let json = await response.json()
    return json.token
}

export async function createUser(user: UserData): Promise<any> {
    let response = await fetch(`${url}/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include"
    })
    return await response.json()
}