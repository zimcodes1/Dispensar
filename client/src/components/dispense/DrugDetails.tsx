import { useDarkMode } from '../../utils/useDarkMode'

function DrugDetails(){
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    return(
                <div className={`flex max-sm:flex-col w-full h-fit max-sm:h-fit mt-4 rounded-2xl border p-4 justify-start items-start gap-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className={`w-[30%] max-sm:w-full aspect-square rounded-2xl overflow-hidden flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        {/* Drug Image */}
                        <img src="/images/drug_test.png" alt="Drug Image" className="w-full h-full object-contain" />
                    </div>
                    {/* Drug Details */}
                    <div className="flex flex-col flex-1 h-fit rounded-2xl">
                        <div className="flex flex-col h-full justify-start px-5 max-sm:px-0 py-2 relative">
                            <i className={`bx bx-star absolute right-0 text-xl cursor-pointer ${isDarkMode ? 'text-gray-400' : ''}`}></i>
                            <div>
                                <h1 className={`text-2xl max-sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Paracetamol 500mg</h1>
                                <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Category: Pain Reliever</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manufacturer: HealthPharma</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Stock Available: 150 units</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Formulation: Tablet</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expiry Date: 07/03/2026</p>
                            </div>
                            <div className="mt-2">
                                <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Description:</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Paracetamol is used to relieve pain and reduce fever. It is commonly used for headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers.</p>
                            </div>
                        </div>
                        {/*--------------Price & Quantity----------- */}
                <div className={`w-[80%] overflow-hidden max-sm:w-full mx-auto flex justify-between border h-15 rounded-2xl ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                    <input type="text" placeholder="Price (₦)" className={`focus:outline-none focus:ring-0 border-r rounded-r-none rounded-lg p-2 w-[50%] text-xl max-sm:text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300 text-gray-900'}`} />
                    <span className={`w-[50%] rounded-lg h-full flex justify-between items-center px-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                        <input min={0} type="number" placeholder="Quantity" className={`focus:outline-none focus:ring-0 p-2 text-xl max-sm:text-sm w-[70%] ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-500' : 'text-gray-900'}`} />
                        <p className={`font-semibold max-sm:text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>100</p>
                        <h1 className={`font-semibold cursor-pointer max-sm:text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>MAX</h1>
                    </span>
                </div>
                    </div>
                    
                </div>
    )
}

export default DrugDetails