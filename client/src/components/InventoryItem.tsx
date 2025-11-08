function InventoryItem(){
    return(
        <div className="flex items-center justify-evenly w-full h-10 border-2 border-gray-200 cursor-pointer px-1 rounded-md mt-1 bg-gray-200 transition duration-100 hover:bg-gray-50">
            {/* Checkbox */}
            <div className="flex text-gray-700 justify-center items-center w-[2%] h-full text-center text-xs">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600 accent-green-400" />
            </div>
            {/* Name */}
            <div className="flex text-gray-700 justify-start items-center w-[30%] h-full text-left text-sm pl-2"><p>Paracetamol</p></div>
            {/* Category */}
            <div className="flex text-gray-700 justify-center items-center w-[12%] h-full text-center text-xs"><p>Pain Reliever</p></div>
            {/* Manufacturer */}
            <div className="flex text-gray-700 justify-center items-center w-[12%] h-full text-center text-xs">Emzor</div>
            {/* Formulation */}
            <div className="flex text-gray-700 justify-center items-center w-[12%] h-full text-center text-xs">Tablets</div>
            {/* Price */}
            <div className="flex text-gray-700 justify-center items-center w-[12%] h-full text-center text-xs">200</div>
            {/* Stock */}
            <div className="flex text-gray-700 justify-center items-center w-[9%] h-full text-center text-xs">150</div>
            {/* Actions */}
            <div className="flex text-gray-700 justify-center items-center w-[8%] h-full text-center text-xs">
                <button className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300 mx-1">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300 mx-1">Delete</button>
            </div>
        </div>
    )
}

export default InventoryItem