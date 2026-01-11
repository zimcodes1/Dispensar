import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import InventoryItem from "../components/InventoryItem"
import DrugSearch from "../components/DrugSearch"
import { useEffect } from "react"

const Inventory = ()=>{
    useEffect(()=>{document.title = 'Your Inventory | Dispensar'})
    return(
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
                <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900 text-center mt-5">Dispense</h1>
                {/*--------------Drugs Search Bar------------------ */}
               <DrugSearch></DrugSearch>

                {/**--------------Drugs List------------------ */}
                <div className="flex flex-col justify-start items-start bg-white h-[800px] overflow-scroll hide-scrollbar rounded-b-lg border border-gray-200 px-2 relative mt-2">
                <div className="text-xs text-gray-900 font-semibold w-full max-sm:w-[700px] h-10 border-b border-gray-200 sticky top-0 bg-white flex items-center py-2 px-2">
                    <div className="w-[5%] text-center">{/* checkbox header */}</div>
                    <div className="w-[30%] pl-2">Name</div>
                    <div className="w-[12%] text-center mr-[5%]">Category</div>
                    <div className="w-[12%] text-center">Manufacturer</div>
                    <div className="w-[12%] text-center">Formulation</div>
                    <div className="w-[12%] text-center">Price (₦)</div>
                    <div className="w-[9%] text-center">Stock</div>
                    <div className="w-[8%] text-center">Action</div>
                </div>
                <div className="flex w-full max-sm:w-[700px] mt-2 flex-col h-[90%] overflow-scroll hide-scrollbar pb-5">
                    <InventoryItem></InventoryItem>
                    <InventoryItem></InventoryItem>
                    <InventoryItem></InventoryItem>
                </div>
                </div>

            </div>
        </div>
        </>
    )
}


export default Inventory