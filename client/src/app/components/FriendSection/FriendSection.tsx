import FriendList from "../FriendList/FriendList"
import friendList from "../FriendList/friendList.module.css"

const FriendSection = () => {
    return (
        <main className={`${friendList.body}`}>
            
            <h1 className={`text-4xl`}>Friends</h1>
            <FriendList />
        </main>
    )
}

export default FriendSection