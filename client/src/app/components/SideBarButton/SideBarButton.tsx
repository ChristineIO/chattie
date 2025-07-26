import PeopleNearby from '../../icons/PeopleNearby'
import sidebarbtn from './sideBarButton.module.css'

const SideBarButton = () => {
    return (
        <button className={`text-white font-bold text-md cursor-pointer  mt-20 rounded-md w-3/5 ${sidebarbtn.button}`}>
            <PeopleNearby className="w-8 h-8 mr-2" /> <p>     Friends </p>
        </button>
    )
}

export default SideBarButton