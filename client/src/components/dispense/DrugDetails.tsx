import { useState } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'

interface DrugDetailsProps {
    name: string
    category: string
    manufacturer: string
    stock: number
    formulation: string
    expiryDate: string
    price: number
    image?: string
    onRemove?: () => void
}

function DrugDetails({ name, category, manufacturer, stock, formulation, expiryDate, price, image = '/images/drug_test.png', onRemove }: DrugDetailsProps){
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [quantity, setQuantity] = useState(1)
    const [fraction, setFraction] = useState('1')
    const [customPrice, setCustomPrice] = useState(price)
    const [inputMode, setInputMode] = useState<'quantity' | 'price'>('quantity')
    
    // Determine if formulation supports fractional units (tablets, capsules in blister packs)
    const supportsFractions = ['Tablets', 'Capsules'].includes(formulation)
    // Determine if formulation uses price input (loose items like capsules sold individually)
    const isLooseItem = ['Loose Capsules', 'Loose Tablets'].includes(formulation)
    
    // Calculate based on mode
    const subtotal = inputMode === 'price' ? customPrice : price * quantity * parseFloat(fraction)
    const calculatedQuantity = inputMode === 'price' ? Math.floor(customPrice / price) : quantity * parseFloat(fraction)

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value) || 1
        setQuantity(Math.min(Math.max(value, 1), stock))
    }
    
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0
        setCustomPrice(Math.max(value, 0))
    }

    const handleMaxClick = () => {
        setQuantity(stock)
    }

    return(
                <div className={`flex max-sm:flex-col w-full h-fit max-sm:h-fit mt-4 rounded-2xl border p-4 justify-start items-start gap-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className={`w-[30%] max-sm:w-full aspect-square rounded-2xl overflow-hidden flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <img src={image} alt={name} className="w-auto h-full" />
                    </div>
                    <div className="flex max-sm:w-full flex-col flex-1 h-fit rounded-2xl">
                        <div className="flex flex-col h-full justify-start px-5 max-sm:px-0 py-2 relative">
                            <button onClick={onRemove} className={`absolute right-0 top-2 p-1 rounded-lg transition ${isDarkMode ? 'text-red-400 hover:bg-red-900/20' : 'text-red-600 hover:bg-red-50'}`} title="Remove">
                                <i className='bx bx-trash text-xl'></i>
                            </button>
                            <div>
                                <h1 className={`text-2xl max-sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{name}</h1>
                                <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Category: {category}</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manufacturer: {manufacturer}</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Stock Available: {stock} units</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Formulation: {formulation}</p>
                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expiry Date: {expiryDate}</p>
                                
                                <div className="mt-3">
                                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                                        ₦{price.toLocaleString()} <span className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>per unit</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`w-[80%] max-sm:w-full mx-auto mt-4 flex flex-col gap-3 p-3 rounded-xl border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                            {/* Toggle between Quantity and Price input for loose items */}
                            {isLooseItem && (
                                <div className="flex items-center gap-2 mb-2">
                                    <button
                                        onClick={() => setInputMode('quantity')}
                                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition ${inputMode === 'quantity' ? 'bg-green-600 text-white' : isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'}`}
                                    >
                                        By Quantity
                                    </button>
                                    <button
                                        onClick={() => setInputMode('price')}
                                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition ${inputMode === 'price' ? 'bg-green-600 text-white' : isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'}`}
                                    >
                                        By Price
                                    </button>
                                </div>
                            )}
                            
                            {inputMode === 'quantity' ? (
                                <>
                                    <div className="flex items-center gap-3">
                                        <label className={`text-sm font-medium whitespace-nowrap ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Quantity:
                                        </label>
                                        <div className="flex items-center gap-2 flex-1">
                                            <input 
                                                min={1} 
                                                max={stock}
                                                type="number" 
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                disabled={supportsFractions && fraction !== '1'}
                                                className={`focus:outline-none focus:ring-2 focus:ring-green-500 p-2 rounded-lg text-lg font-semibold w-full ${supportsFractions && fraction !== '1' ? 'opacity-50 cursor-not-allowed' : ''} ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-900'}`} 
                                            />
                                            <button 
                                                onClick={handleMaxClick}
                                                disabled={supportsFractions && fraction !== '1'}
                                                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition ${supportsFractions && fraction !== '1' ? 'opacity-50 cursor-not-allowed' : ''} ${isDarkMode ? 'bg-green-900/30 text-green-300 hover:bg-green-900/50' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                                            >
                                                MAX ({stock})
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {supportsFractions && (
                                        <div className="flex items-center gap-3">
                                            <label className={`text-sm font-medium whitespace-nowrap ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Unit:
                                            </label>
                                            <select
                                                value={fraction}
                                                onChange={(e) => setFraction(e.target.value)}
                                                className={`focus:outline-none focus:ring-2 focus:ring-green-500 p-2 rounded-lg text-sm font-medium w-full ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-900'}`}
                                            >
                                                <option value="1">Whole (1)</option>
                                                <option value="0.75">3/4</option>
                                                <option value="0.5">1/2</option>
                                                <option value="0.25">1/4</option>
                                            </select>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <label className={`text-sm font-medium whitespace-nowrap ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Price:
                                    </label>
                                    <div className="flex items-center gap-2 flex-1">
                                        <span className={`text-lg font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>₦</span>
                                        <input 
                                            min={0}
                                            type="number" 
                                            value={customPrice}
                                            onChange={handlePriceChange}
                                            className={`focus:outline-none focus:ring-2 focus:ring-green-500 p-2 rounded-lg text-lg font-semibold w-full ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-900'}`} 
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className={`w-[80%] max-sm:w-full mx-auto mt-3 p-3 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'}`}>
                            <div className="flex justify-between items-center">
                                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {inputMode === 'price' ? 'Quantity:' : 'Subtotal:'}
                                </span>
                                <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {inputMode === 'price' ? `${calculatedQuantity} units` : `₦${subtotal.toLocaleString()}`}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}

export default DrugDetails