import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import InventoryItem from "../components/InventoryItem"
import DrugSearch from "../components/DrugSearch"
import AddItemModal from "../components/inventory/AddItemModal"
import DeleteConfirmationModal from "../components/modals/DeleteConfirmationModal"
import { useEffect, useState } from "react"
import { useDarkMode } from "../utils/useDarkMode"

const Inventory = ()=>{
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [selectAll, setSelectAll] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; itemId: string | null; itemName: string }>({ isOpen: false, itemId: null, itemName: '' })
    
    useEffect(()=>{document.title = 'Your Inventory | Dispensar'})
    
    // Demo data
    const inventoryData = [
        { id: '1', name: 'Paracetamol 500mg', category: 'Pain Relief', manufacturer: 'Emzor', formulation: 'Tablets', price: 200, stock: 150 },
        { id: '2', name: 'Amoxicillin 250mg', category: 'Antibiotics', manufacturer: 'GSK', formulation: 'Capsules', price: 450, stock: 45 },
        { id: '3', name: 'Ibuprofen 400mg', category: 'Pain Relief', manufacturer: 'Pfizer', formulation: 'Tablets', price: 350, stock: 200 },
        { id: '4', name: 'Omeprazole 20mg', category: 'Digestive', manufacturer: 'AstraZeneca', formulation: 'Capsules', price: 500, stock: 30 },
        { id: '5', name: 'Metformin 500mg', category: 'Diabetes', manufacturer: 'Merck', formulation: 'Tablets', price: 300, stock: 120 },
    ]
    
    const handleSelectItem = (id: string) => {
        setSelectedItems(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }
    
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([])
        } else {
            setSelectedItems(inventoryData.map(item => item.id))
        }
        setSelectAll(!selectAll)
    }
    
    const handleEdit = (id: string) => {
        console.log('Edit item:', id)
    }
    
    const handleDelete = (id: string) => {
        const item = inventoryData.find(i => i.id === id)
        setDeleteModal({ isOpen: true, itemId: id, itemName: item?.name || '' })
    }
    
    const confirmDelete = () => {
        if (deleteModal.itemId) {
            console.log('Delete item:', deleteModal.itemId)
            // Implement actual delete logic here
        }
    }
    
    const handleBulkDelete = () => {
        if (selectedItems.length > 0) {
            setDeleteModal({ isOpen: true, itemId: 'bulk', itemName: `${selectedItems.length} items` })
        }
    }
    
    const confirmBulkDelete = () => {
        console.log('Delete items:', selectedItems)
        setSelectedItems([])
        setSelectAll(false)
    }
    return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className={`flex w-full min-h-screen pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0 transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-950' : 'bg-gray-100'
        }`}>
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                <div className="flex justify-between items-center mt-5 mb-4">
                    <h1 className={`text-2xl max-sm:text-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Inventory</h1>
                    <div className="flex gap-2">
                        {selectedItems.length > 0 && (
                            <button onClick={handleBulkDelete} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm">
                                <i className="bx bx-trash mr-1"></i>
                                Delete ({selectedItems.length})
                            </button>
                        )}
                        <button 
                            onClick={() => setShowAddModal(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
                        >
                            <i className="bx bx-plus mr-1"></i>
                            Add Item
                        </button>
                    </div>
                </div>
                
                {/*--------------Drugs Search Bar------------------ */}
               <DrugSearch></DrugSearch>

                {/**--------------Drugs List Table------------------ */}
                <div className={`rounded-lg border shadow-sm mt-2 overflow-hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="overflow-x-auto table-scroll">
                        <table className="w-full min-w-[800px]">
                            <thead className={`border-b ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                                <tr>
                                    <th className="py-3 px-4 text-left">
                                        <input 
                                            type="checkbox" 
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                            className="form-checkbox h-4 w-4 text-green-600 accent-green-400 cursor-pointer" 
                                        />
                                    </th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Category</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Manufacturer</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Formulation</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Price</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Stock</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actions</th>
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}`}>
                                {inventoryData.map(item => (
                                    <InventoryItem
                                        key={item.id}
                                        {...item}
                                        isSelected={selectedItems.includes(item.id)}
                                        onSelect={handleSelectItem}
                                        onEdit={handleEdit}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Pagination */}
                    <div className={`px-4 py-3 border-t flex items-center justify-between ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Showing <span className="font-medium">1</span> to <span className="font-medium">{inventoryData.length}</span> of <span className="font-medium">{inventoryData.length}</span> results
                        </div>
                        <div className="flex gap-2">
                            <button className={`px-3 py-1 border rounded-md text-sm disabled:opacity-50 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-600' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`} disabled>
                                Previous
                            </button>
                            <button className={`px-3 py-1 border rounded-md text-sm disabled:opacity-50 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-600' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`} disabled>
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        {/* Add Item Modal */}
        <AddItemModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
        
        {/* Delete Confirmation Modal */}
        <DeleteConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={() => setDeleteModal({ isOpen: false, itemId: null, itemName: '' })}
            onConfirm={deleteModal.itemId === 'bulk' ? confirmBulkDelete : confirmDelete}
            title="Delete Item"
            message="Are you sure you want to delete this item? This action cannot be undone."
            itemName={deleteModal.itemName}
        />
        </>
    )
}


export default Inventory