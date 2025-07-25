import SideBarButton from '../SideBarButton/SideBarButton'
import sidebar from './Sidebar.module.css'
import ProfileTab from '../ProfileTab/ProfileTab'

const SideBar = () => {
    return (
        <aside className={`${sidebar.sideBar} bg-[#1e1b2e] py-1 border-r border-[#2d2942]`}>
            <ProfileTab />
            <SideBarButton />
        </aside>
    )
}
export default SideBar