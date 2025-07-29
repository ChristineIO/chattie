import React, { useEffect, useState } from 'react'
import Person from '../../icons/Person'
import friendList from './friendList.module.css'
import { getChatThread, getUsers, authCheck, getOneThread } from '@/api/api'
import Link from 'next/link'
import { CustomJwtPayload } from '@/api/types'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'

type User = {
    _id: string;
    username: string;
    email?: string;
    bio?: string;
}

const FriendList = () => {

    const router = useRouter()
    let [id, setID] = useState("")


    // set your friend list
    const [friends, setFriends] = useState<User[]>([])

    // get your name based on token

    const [name, setName] = useState("")


    useEffect(() => {
        async function Friends() {
            // sets ur friends baesed on users in DB (for now)
            let users = await getUsers()
            setFriends(users)

            // get token data
            let user = await authCheck()
            const token = user.token
            const decode_user = jwtDecode<CustomJwtPayload>(token.toString())

            // set your name based on token
            setName(decode_user._id)
        }
        Friends()
    }, [])

    // get or create message thread 
    async function getThread(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        const clickedId = e.currentTarget.id

        let users = await getChatThread({ userId: name, otherUserId: clickedId })

        let threadId = users.data._id

        if (users.message === "exists") {
            let thread = await getOneThread(threadId)
            let messages = thread.messages
            let id = thread._id
            setID(id)
            router.push(`/chat/thread/${id}`)
        }
    }
    return (


        <ul>
            {friends.map((friend) => (
                <div key={friend._id}>
                    <li>
                        <Link href={`/chat/thread/${id}`} className={`${friendList.info}`} id={friend._id} onClick={getThread}>
                            <span><Person className={`fill-pink-200`} /></span>
                            <h1>{friend.username}</h1>
                        </Link>
                    </li>
                </div>
            ))}
        </ul>
    )
}

export default FriendList