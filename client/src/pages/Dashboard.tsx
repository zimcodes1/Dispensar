import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import SalesInfo from "../components/dashboard/SalesInfo"
import RecentSales from "../components/dashboard/RecentSales"

const Dashboard = ()=>{
    return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%] max-sm:pr-0">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-sm:w-0 max-md:w-fit">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] max-sm:w-full h-full flex-col max-sm:px-2">
                <div className="flex w-full h-[40%] max-sm:h-fit justify-between pt-4 max-sm:pt-2 max-sm:flex-col">
                    {/*---------Sales Info------------- */}
                    <SalesInfo></SalesInfo>
                </div>
                <div className="flex w-full h-[55%] max-sm:h-[500px] mt-[1%] max-sm:mt-2 justify-between items-center">
                    {/*----------------Recent Sales Activity------------------ */}
                    <RecentSales></RecentSales>
                </div>
            </div>
        </div>
        </>
    )
}


export default Dashboard