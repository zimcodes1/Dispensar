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
                    <div className="flex max-sm:w-full flex-col flex-1 h-fit rounded-2xl">
                        <div className="flex flex-col h-full justify-start px-5 max-sm:px-0 py-2 relative">
                            <button className={`absolute right-0 top-2 p-1 rounded-lg transition ${isDarkMode ? 'text-red-400 hover:bg-red-900/20' : 'text-red-600 hover:bg-red-50'}`} title="Remove">
                                <i className='bx bx-trash text-xl'></i>
                            </button>
                            <div>
                                <h1 className={`text-2xl max-sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Paracetamol 500mg</h1>
                                <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Category: Pain Reliever</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manufacturer: HealthPharma</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Stock Available: 150 units</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Formulation: Tablet</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expiry Date: 07/03/2026</p>
                                
                                {/* Price Display */}
                                <div className="mt-3">
                                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                                        ₦2,500 <span className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>per unit</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*--------------Quantity Input----------- */}
                        <div className={`w-[80%] max-sm:w-full mx-auto mt-4 flex items-center gap-3 p-3 rounded-xl border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                            <label className={`text-sm font-medium whitespace-nowrap ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Quantity:
                            </label>
                            <div className="flex items-center gap-2 flex-1">
                                <input 
                                    min={1} 
                                    max={150}
                                    type="number" 
                                    defaultValue={1}
                                    className={`focus:outline-none focus:ring-2 focus:ring-green-500 p-2 rounded-lg text-lg font-semibold w-full ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-900'}`} 
                                />
                                <button 
                                    className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition ${isDarkMode ? 'bg-green-900/30 text-green-300 hover:bg-green-900/50' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                                >
                                    MAX (150)
                                </button>
                            </div>
                        </div>
                        
                        {/* Total Price */}
                        <div className={`w-[80%] max-sm:w-full mx-auto mt-3 p-3 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'}`}>
                            <div className="flex justify-between items-center">
                                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Subtotal:</span>
                                <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₦2,500</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}

export default DrugDetails