import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import DrugDetails from "../components/dispense/DrugDetails"
import DrugSearch from "../components/DrugSearch"

function Dispense(){
        return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%]">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full">
                <SideNav></SideNav>
            </div>

            {/*--------Main Contents-----------*/}
            <div className="flex flex-col px-5 w-[78%] h-full justify-start items-center">

                <DrugSearch></DrugSearch>
                {/*---------Selected Drugs' details will appear here--------- */}
               <DrugDetails></DrugDetails>
               <DrugDetails></DrugDetails>
                <button className="bg-[#5fdf85] text-gray-900 font-semibold py-2 px-5 rounded-lg my-4 hover:bg-gray-900 hover:text-[#5fdf85] transition duration-500">Dispense <i className="bx bx-right-arrow-alt"></i></button>
            </div>
           
        </div>
        </>
    )
}

export default Dispense