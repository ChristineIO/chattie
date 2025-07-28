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
export type Participants =  {
    userId: string,
    otherUserId: string,
}
export type ID =  {
    id: string;
}



// USERS:


// GET USERS
export async function getUsers() {
    let response = await fetch(`${url}/api/users`)
    let json = await response.json()
    return json
}

// CREATE USER
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


// COMPARE REQUEST WITH DB
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


// CHECK FOR TOKEN
export async function authCheck() {
    let response = await fetch(`${url}/api/users/auth`, {
        method: "GET",
        credentials: "include"
    })

    let json = await response.json()
    return json
}

// CHAT THREADS:



// CREATE CHAT THREAD OR CHECK FOR EXISTENCE
export async function getChatThread(participant: Participants) {
        let response = await fetch(`${url}/api/chats/threads`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(participant)
    })

    let json = await response.json()
    return json
}

// GET CHAT THREAD ONLY

export async function  getOneThread(id:ID) {
    let response = await fetch(`${url}/api/chats/threads/:id`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })
    
    let json = await response.json()
    return json
}