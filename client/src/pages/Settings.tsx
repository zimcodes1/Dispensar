import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import EmployeeSettings from "../components/settings/EmployeeSettings"
import { useEffect } from "react"

const Settings = ()=>{
    useEffect(()=>{document.title = 'Settings | Dispensar'})
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
               <EmployeeSettings></EmployeeSettings>
            </div>
        </div>
        </>
    )
}


export default Settings