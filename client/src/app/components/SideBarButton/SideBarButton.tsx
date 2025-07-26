import PeopleNearby from '../../icons/PeopleNearby'
import sidebarbtn from './sideBarButton.module.css'

type SideBarBtnProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SideBarButton = ({onClick}:SideBarBtnProps) => {
    return (
        <button className={`text-white font-bold text-md cursor-pointer  mt-20 rounded-md w-3/5 ${sidebarbtn.button}`} onClick={onClick}>
            <PeopleNearby className={`mr-2 ${sidebarbtn.icon}`} fill='#FDEFF4' /> <p>     Friends </p>
        </button>
    )
}

export default SideBarButton