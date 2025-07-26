import Person from '../../icons/Person'
import friendList from './friendList.module.css'

const FriendList = () => {
    return (
        <ul>
            <li>
                <a className={`${friendList.info}`}>
                    <span><Person /></span>
                    <h1>christine</h1>
                </a>
            </li>
            <li>
                <a className={`${friendList.info}`}>
                    <span><Person /></span>
                    <h1>arien</h1>
                </a>
            </li>
            <li>
                <a className={`${friendList.info}`}>
                    <span><Person /></span>
                    <h1>lola</h1>
                </a>
            </li>
        </ul>
    )
}

export default FriendList