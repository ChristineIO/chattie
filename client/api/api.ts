let url = process.env.NEXT_PUBLIC_URL

export async function getUser() {
    let response = await fetch(`${url}/api/users`)
    let json = await response.json()
    return json
}

export async function createUser() {
    let response = await fetch(`${url}/api/users`)
    let json = await response.json()
    return json
}