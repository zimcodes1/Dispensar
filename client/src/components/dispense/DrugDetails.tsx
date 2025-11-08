

function DrugDetails(){
    return(
                <div className="flex w-full h-fit mt-4 bg-white rounded-2xl border border-gray-200 p-4 justify-start items-center">
                    <div className="w-[30%] h-full rounded-2xl overflow-hidden flex justify-center items-center bg-white">
                        {/* Drug Image */}
                        <img src="/images/drug_test.png" alt="Drug Image" className="w-full h-full" />
                    </div>
                    {/* Drug Details */}
                    <div className="w-[70%] h-fit rounded-2xl">
                        <div className="flex flex-col h-full justify-start px-5 py-2 relative">
                            <i className="bx bx-star absolute right-0 text-xl cursor-pointer"></i>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Paracetamol 500mg</h1>
                                <p className="text-sm text-gray-600 mt-2">Category: Pain Reliever</p>
                                <p className="text-sm text-gray-600 mt-1">Manufacturer: HealthPharma</p>
                                <p className="text-sm text-gray-600 mt-1">Stock Available: 150 units</p>
                                <p className="text-sm text-gray-600 mt-1">Formulation: Tablet</p>
                                <p className="text-sm text-gray-600 mt-1">Expiry Date: 07/03/2026</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-sm text-gray-800 font-semibold">Description:</p>
                                <p className="text-sm text-gray-600 mt-1">Paracetamol is used to relieve pain and reduce fever. It is commonly used for headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers.</p>
                            </div>
                        </div>
                        {/*--------------Price & Quantity----------- */}
                <div className="w-[80%] mx-auto flex justify-between bg-white border border-gray-200 h-15 rounded-2xl">
                    <input type="text" placeholder="Price (₦)" className="focus:outline-none focus:ring-0 border-r rounded-r-none border-gray-300 rounded-lg p-2 w-[50%] text-xl text-gray-900" />
                    <span className="w-[50%] border-gray-300 rounded-lg h-full flex justify-between items-center px-2">
                        <input type="number" placeholder="Quantity" className="focus:outline-none focus:ring-0 p-2 text-xl text-gray-900 w-[70%]" />
                        <p className="text-gray-700 font-semibold">/ 100</p>
                        <h1 className="text-gray-900 font-semibold cursor-pointer">MAX</h1>
                    </span>
                </div>
                    </div>
                    
                </div>
    )
}

export default DrugDetails