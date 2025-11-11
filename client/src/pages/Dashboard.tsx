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
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                <div className="flex w-full h-[40%] max-[767px]:h-fit md:h-fit justify-between pt-4 max-[767px]:pt-2 md:pt-3 max-[767px]:flex-col">
                    {/*---------Sales Info------------- */}
                    <SalesInfo></SalesInfo>
                </div>
                <div className="flex w-full h-[55%] max-[767px]:h-[500px] md:h-[calc(100%-12rem)] mt-[1%] max-[767px]:mt-2 md:mt-3 justify-between items-center">
                    {/*----------------Recent Sales Activity------------------ */}
                    <RecentSales></RecentSales>
                </div>
            </div>
        </div>
        </>
    )
}


export default Dashboard