import PeopleNearby from '../../icons/PeopleNearby'

const SideBarButton = () => {
    return (
        <section className="mt-24">
                <button className=" text-white font-bold text-md bg-pink-300 cursor-pointer">
                    <PeopleNearby className="w-8 h-8 mr-2" /><span>  </span>Friends
                </button>
            </section>
    )
}
export default SideBarButton