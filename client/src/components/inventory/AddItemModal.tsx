interface AddItemModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function AddItemModal({ isOpen, onClose }: AddItemModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
                    <h3 className="text-lg font-semibold text-gray-900">Add New Item</h3>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto table-scroll">
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Drug Name</label>
                                <input type="text" placeholder="Enter drug name" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                                    <option>Pain Relief</option>
                                    <option>Antibiotics</option>
                                    <option>Digestive</option>
                                    <option>Diabetes</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturer</label>
                                <input type="text" placeholder="Enter manufacturer" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Formulation</label>
                                <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                                    <option>Tablets</option>
                                    <option>Capsules</option>
                                    <option>Syrup</option>
                                    <option>Injection</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price (₦)</label>
                                <input type="number" placeholder="Enter price" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                                <input type="number" placeholder="Enter quantity" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Reorder Level</label>
                                <input type="number" placeholder="Minimum stock level" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-6 flex justify-end gap-3 shrink-0">
                    <button onClick={onClose} className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    )
}
