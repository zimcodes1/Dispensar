import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"

const Settings = ()=>{
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
               
            </div>
        </div>
        </>
    )
}


export default Settings