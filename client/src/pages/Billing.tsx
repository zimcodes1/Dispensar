import { useState } from "react"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import DrugDetails from "../components/dispense/DrugDetails"
import DrugSearch from "../components/DrugSearch"
import DispenseQueueModal from "../components/dispense/DispenseQueueModal"

function Billing() {
    const [showQueue, setShowQueue] = useState(false)

    return (
        <>
            {/*--------Topbar Component--------*/}
            <Topbar></Topbar>
            {/*-----------Side Nav & Main Contents Container-----------*/}
            <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
                {/*----------Side navigation-----*/}
                <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                    <SideNav></SideNav>
                </div>
                {/*--------Main Contents-----------*/}
                <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                    <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900 text-center mt-5">Billing</h1>
                    <DrugSearch></DrugSearch>
                    {/*---------Selected Drugs' details will appear here--------- */}
                    <DrugDetails></DrugDetails>
                    <DrugDetails></DrugDetails>
                    <button className="w-50 mx-auto my-10 bg-[#5fdf85] max-sm:w-[80%] text-gray-900 font-semibold py-2 px-5 rounded-lg mt-5 hover:bg-gray-900 hover:text-[#5fdf85] transition duration-500">Dispense <i className="bx bx-right-arrow-alt"></i></button>
                </div>

            </div>

            {/* Fixed Queue Button */}
            <button
                onClick={() => setShowQueue(true)}
                className="fixed bottom-6 max-sm:bottom-11 right-6 max-sm:right-2 bg-gray-900 text-[#5fdf85] px-4 py-3 rounded-full shadow-lg hover:bg-[#5fdf85] hover:text-gray-900 transition duration-500 flex items-center gap-2"
            >
                <i className="bx bx-list-ul text-xl"></i>
                <span className="max-sm:hidden">View Queue</span>
            </button>

            {/* Queue Modal */}
            {showQueue && <DispenseQueueModal onClose={() => setShowQueue(false)} />}

        </>
    )
}

export default Billing