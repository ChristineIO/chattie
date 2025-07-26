import Person from "../../icons/Person"
import profile from "./profile.module.css"

type ProfileTabProps = {
    name?: string;
    username?: string;
}

const ProfileTab = ({ name, username }: ProfileTabProps) => {
    return (
        <div className={`${profile.profileTab} text-sm rounded-2xl `}>
            <Person className={`w-14 h-14 pl-1 ${profile.icon}`} fill="#FDEFF4"/>
            <div className={`${profile.info}`}>
                <section className="pl-2" id="name">Ruby Jane</section>
                <section className="pl-2" id="username">ruby_jane</section>
            </div>
        </div>
    )
}
export default ProfileTab