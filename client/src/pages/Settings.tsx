import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import EmployeeSettings from "../components/settings/EmployeeSettings"

const Settings = ()=>{
    return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%]">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-sm:w-0 max-md:w-fit">
                <SideNav></SideNav>
            </div>

            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] max-sm:w-full h-full flex-col max-sm:px-2">

               <EmployeeSettings></EmployeeSettings>
            </div>
        </div>
        </>
    )
}


export default Settings