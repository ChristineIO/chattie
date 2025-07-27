import React, { useEffect, useState } from 'react'
import Person from '../../icons/Person'
import friendList from './friendList.module.css'
import { getChatThread, getUsers, authCheck } from '@/api/api'
import Link from 'next/link'
import { CustomJwtPayload } from '@/api/types'
import { jwtDecode } from 'jwt-decode'

type User = {
    _id: string;
    username: string;
    email?: string;
    bio?: string;
}

const FriendList = () => {

    // set your friend list
    const [friends, setFriends] = useState<User[]>([])

    // get your name based on token

    const [name, setName] = useState("")

    // the id of the friend you want to talk to
    let friendId = ""


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

    // thread object to post
    let threadObject = {
        userId: name,
        otherUserId: friendId
    }

    // get or create message thread 
    async function getThread(e:React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault(); // optional if you don’t want it to navigate
        const clickedId = e.currentTarget.id;
        console.log('Clicked anchor ID:', clickedId);
        
        friendId = clickedId
        console.log(threadObject);
        let users = await getChatThread({userId: name, otherUserId: clickedId})
        console.log(users)
    }
    return (


        <ul>
            {friends.map((friend) => (
                <div key={friend._id}>
                    <li>
                        <Link href={`/chat/${friend._id}`} className={`${friendList.info}`} id={friend._id} onClick={getThread}>
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