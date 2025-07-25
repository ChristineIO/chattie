import PeopleNearby from "../../icons/PeopleNearby"

const SideBar = () => {
    return (
        <aside className="w-30 bg-[#1e1b2e] flex flex-col items-center py-4 border-r border-[#2d2942]">
            <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                C
            </div>
            <section className="mt-24">
                <button className="w-96 h-12 flex items-center justify-center text-white font-bold text-md bg-pink-700 cursor-pointer">
                    <PeopleNearby className="w-8 h-8 mr-2" /><span>  </span>Friends
                </button>
            </section>
        </aside>
    )
}
export default SideBar