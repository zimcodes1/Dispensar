function InventoryItem(){
    return(
        <div className="flex items-center justify-between w-full h-10 border-2 border-gray-200 cursor-pointer px-1 rounded-md mt-1 bg-gray-200 transition duration-100 hover:bg-gray-50">
            <div className="flex text-gray-700 justify-start items-center w-[20%] h-full text-center text-sm pr-1"><p>Paracetamol</p></div>
            <div className="flex text-gray-700 justify-center items-center w-[13%] h-full text-center text-xs"><p>Pain Reliever</p></div>
            <div className="flex text-gray-700 justify-center items-center w-[15%] h-full text-center text-xs">Emzor</div>
            <div className="flex text-gray-700 justify-center items-center w-[15%] h-full text-center text-xs">Tablets</div>
            <div className="flex text-gray-700 justify-center items-center w-[15%] h-full text-center text-xs">200</div>
            <div className="flex text-gray-700 justify-center items-center w-[10%] h-full text-center text-xs">150</div>
            <div className="flex text-gray-700 justify-center items-center w-[10%] h-full text-center text-xs">
                <button className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300 mx-1">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300 mx-1">Delete</button>
            </div>
        </div>
    )
}

export default InventoryItem