import { useState } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'

interface AddItemModalProps {
    isOpen: boolean
    onClose: () => void
    drugName?: string
}

export default function AddItemModal({ isOpen, onClose, drugName = "Paracetamol 500mg" }: AddItemModalProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [quantity, setQuantity] = useState('')
    const [manufactureDate, setManufactureDate] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    
    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ drugName, quantity, manufactureDate, expiryDate })
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className={`w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Add Stock</h3>
                    <button onClick={onClose} className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>
                
                {/* Drug Name Indicator */}
                <div className={`px-6 py-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Adding stock for:</p>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{drugName}</p>
                </div>
                
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto table-scroll">
                    <div className="p-6">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Quantity to Add*</label>
                                <input 
                                    required
                                    type="number" 
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    placeholder="Enter quantity" 
                                    className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`} 
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Manufacturing Date*</label>
                                <input 
                                    required
                                    type="date" 
                                    value={manufactureDate}
                                    onChange={(e) => setManufactureDate(e.target.value)}
                                    className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} 
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Expiry Date*</label>
                                <input 
                                    required
                                    type="date" 
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} 
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="px-6 pb-6 flex justify-end gap-3 shrink-0">
                    <button type="button" onClick={onClose} className={`px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                        Cancel
                    </button>
                    <button type="submit" onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                        Add Stock
                    </button>
                </div>
            </div>
        </div>
    )
}