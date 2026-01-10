


const LogoutModal = ({open, onClose})=>{
    return(
        //backdrop
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
            {/*-----The Modal---*/}
            <div className={`w-[300px] h-[300px] flex justify-start items-center flex-col p-5 rounded-2xl bg-gray-50 border border-gray-300 transition-all ${open ? 'scale-100 opacity-100': 'scale-125 opacity-0'} `}>
                <span className="flex w-[120px] h-[120px] rounded-full mx-auto overflow-hidden">
                    <img src="/images/user.png" alt="User" />
                </span>
                <h2 className="text-xl font-bold text-center my-2 text-gray-800">Azimeh</h2>
                <p className="text-xs text-gray-700">Are you sure you want to logout?</p>
                <span className="flex justify-between items-center p-2 mt-4">
                    <button className="text-white py-2 px-5 rounded-xl bg-red-500 mx-1">Logout</button>
                    <button className="text-red-500 py-2 px-5 rounded-xl bg-white shadow-md mx-1">Stay</button>
                </span>
            </div>
        </div>
    )
}


export default LogoutModal