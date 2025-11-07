import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import InventoryItem from "../components/InventoryItem"

const Inventory = ()=>{
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
            <div className="flex w-[78%] h-full flex-col overflow-wrap">
                {/*--------------Drugs Search Bar------------------ */}
                <div className="flex w-full h-[20%] justify-between items-center">
                    <input type="text" placeholder="Drug name..." className="bg-white w-[80%] h-12 p-3 border border-gray-300 rounded-lg"/>
                    <span className="hover:bg-[#5fdf85] h-12 px-4 rounded-lg hover:text-gray-900 text-lg flex justify-center items-center cursor-pointer transition duration-500 bg-gray-900 text-[#5fdf85]"><i className="bx bx-search"></i></span>
                    <div className="w-[100px] flex justify-between px-4 hover:border-2 items-center bg-white h-12 border border-gray-300 rounded-lg cursor-pointer">
                        <p className="text-gray-800 font-semibold">Filter</p>
                        <i className="bx bx-filter-alt text-gray-800"></i>
                    </div>
                </div>

                {/**--------------Drugs List------------------ */}
                <div className="flex flex-col justify-start items-start bg-white h-[800px] rounded-b-lg border border-gray-200 px-2 relative">
                <div className="text-xs text-gray-900 font-semibold w-full h-10 border-b border-gray-200 sticky top-0 bg-white flex justify-between items-center py-2 px-2">
                    <p>Name</p>
                    <p className="ml-[10%]">Category</p>
                    <p>Manufacturer</p>
                    <p>Formulation</p>
                    <p>Price (₦)</p>
                    <p>Stock</p>
                    <p>Action</p>

        
                </div>
                <div className="flex w-full mt-2 flex-col h-[90%] overflow-scroll hide-scrollbar pb-5">
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