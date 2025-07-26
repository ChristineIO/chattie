import SideBarButton from '../SideBarButton/SideBarButton'
import sidebar from './Sidebar.module.css'
import ProfileTab from '../ProfileTab/ProfileTab'

const SideBar = ({button}:any) => {
    return (
        <aside className={`${sidebar.sideBar} bg-[#1e1b2e] py-1 border-r border-[#2d2942]`}>
            <ProfileTab />
            {button}
        </aside>
    )
}
export default SideBar