import { useEffect, useState } from 'react'
import Person from '../../icons/Person'
import friendList from './friendList.module.css'
import { getUsers } from '@/api/api'
import Link from 'next/link'

type User = {
  _id: string;
  username: string;
  email?: string;
  bio?: string;
}

const FriendList = () => {
    const [friends, setFriends] = useState<User[]>([])
    useEffect(() => {
        async function Friends() {
            let users = await getUsers()
            setFriends(users)
        }
        Friends()
    }, [])
    return (


        <ul>
            {friends.map((friend) => (
                <div key={friend._id}>
                    <li>
                    <Link href={`/chat/${friend._id}`} className={`${friendList.info}`}>
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