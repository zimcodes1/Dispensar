

function DrugSearch(){
    return(
                <div className="flex w-full h-[20%] justify-between items-center mt-4">
                    <input type="text" placeholder="Drug name..." className="bg-white w-[80%] h-12 p-3 border border-gray-300 rounded-lg"/>
                    <span className="hover:bg-[#5fdf85] h-12 px-4 rounded-lg hover:text-gray-900 text-lg flex justify-center items-center cursor-pointer transition duration-500 bg-gray-900 text-[#5fdf85]"><i className="bx bx-search"></i></span>
                    <div className="w-[100px] flex justify-between px-4 hover:border-2 items-center bg-white h-12 border border-gray-300 rounded-lg cursor-pointer">
                        <p className="text-gray-800 font-semibold">Filter</p>
                        <i className="bx bx-filter-alt text-gray-800"></i>
                    </div>
                </div>
    )
}

export default DrugSearch