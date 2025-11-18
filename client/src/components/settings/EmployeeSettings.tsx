

function EmployeeSettings(){
    return(
        <div className="w-full h-full p-2 flex flex-col">
            <h1 className="text-2xl text-gray-900 max-sm:text-center max-sm:text-lg">Account Settings</h1>
            <div className="flex w-full h-fit flex-col">
                {/* Settings content goes here */}
                <div className="mx-auto my-2 w-25 h-25 rounded-full overflow-hidden">
                    <img src="/images/user.png" alt="User" className="w-full h-full"/>
                </div>
                <div className="flex flex-col w-[60%] max-sm:w-full mx-auto items-start border-2 bg-white border-gray-200 rounded-xl p-3">
                    <span className="w-full py-2"><p className="text-gray-700">Name: John Doe</p></span>
                    <span className="w-full py-2"><p className="text-gray-500">Phone: (123) 456-7890</p></span>
                    <span className="w-full py-2 flex justify-between items-center"><p className="text-gray-500">Email: johndoe@example.com</p> <i className="bx bx-edit text-gray-600 p-1 cursor-pointer"></i></span>
                    <span className="w-full py-2"><p className="text-gray-500">Role: Employee</p></span>
                    <span className="w-full py-2 flex justify-between items-center"><p className="text-gray-500">Password: ********</p> <i className="bx bx-edit text-gray-600 p-1 cursor-pointer"></i></span>
                </div>
                <button className="mx-auto w-25 py-2 bg-red-500 text-white mt-10 rounded-lg shadow hover:bg-white hover:text-red-500 hover:border-2 transition">Logout <i className="bx bx-log-out"></i></button>
            </div>
        </div>
    )
}


export default EmployeeSettings