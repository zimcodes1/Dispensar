import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import InventoryItem from "../components/InventoryItem"
import DrugSearch from "../components/DrugSearch"
import AddItemModal from "../components/inventory/AddItemModal"
import { useEffect, useState } from "react"

const Inventory = ()=>{
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [selectAll, setSelectAll] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    
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
        console.log('Delete item:', id)
    }
    return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full min-h-screen bg-gray-100 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                <div className="flex justify-between items-center mt-5 mb-4">
                    <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900">Inventory</h1>
                    <div className="flex gap-2">
                        {selectedItems.length > 0 && (
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm">
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
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm mt-2 overflow-hidden">
                    <div className="overflow-x-auto table-scroll">
                        <table className="w-full min-w-[800px]">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="py-3 px-4 text-left">
                                        <input 
                                            type="checkbox" 
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                            className="form-checkbox h-4 w-4 text-green-600 accent-green-400 cursor-pointer" 
                                        />
                                    </th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Manufacturer</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Formulation</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Stock</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
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
                    <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">{inventoryData.length}</span> of <span className="font-medium">{inventoryData.length}</span> results
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50" disabled>
                                Previous
                            </button>
                            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50" disabled>
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        {/* Add Item Modal */}
        <AddItemModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
        </>
    )
}


export default Inventory