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
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%]">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] h-full flex-col">
                <div className="flex w-full h-[40%] justify-between pt-4">
                    {/*---------Sales Info------------- */}
                    <SalesInfo></SalesInfo>
                </div>
                <div className="flex w-full h-[55%] mt-[1%] justify-between items-center">
                    {/*----------------Recent Sales Activity------------------ */}
                    <RecentSales></RecentSales>
                </div>
            </div>
        </div>
        </>
    )
}


export default Dashboard