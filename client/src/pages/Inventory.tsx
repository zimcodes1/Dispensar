import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import InventoryItem from "../components/InventoryItem"
import DrugSearch from "../components/DrugSearch"
import AddItemModal from "../components/inventory/AddItemModal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDarkMode } from "../utils/useDarkMode"

const Inventory = ()=>{
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const navigate = useNavigate()
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [selectAll, setSelectAll] = useState(false)
    const [showAddStockModal, setShowAddStockModal] = useState(false)
    const [selectedDrugForStock, setSelectedDrugForStock] = useState<string | null>(null)
    
    // TODO: Get actual user role from auth context
    const userRole = 'admin' // 'biller' or 'admin'
    const isBiller = userRole === 'biller'
    const isAdmin = userRole === 'admin'
    
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
    
    const handleAddToBill = () => {
        // Navigate to billing page with selected items
        const selectedDrugs = inventoryData.filter(item => selectedItems.includes(item.id))
        console.log('Adding to bill:', selectedDrugs)
        navigate('/billing', { state: { selectedDrugs } })
    }
    
    const handleAddStock = (id: string) => {
        setSelectedDrugForStock(id)
        setShowAddStockModal(true)
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
                    {isBiller && (
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {selectedItems.length > 0 ? `${selectedItems.length} item${selectedItems.length > 1 ? 's' : ''} selected` : 'Select items to add to bill'}
                        </p>
                    )}
                </div>
                
                {/*--------------Drugs Search Bar------------------ */}
               <DrugSearch></DrugSearch>

                {/**--------------Drugs List Table------------------ */}
                <div className={`rounded-lg border shadow-sm mt-2 overflow-hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="overflow-x-auto table-scroll">
                        <table className="w-full min-w-[800px]">
                            <thead className={`border-b ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                                <tr>
                                    {isBiller && (
                                        <th className="py-3 px-4 text-left">
                                            <input 
                                                type="checkbox" 
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                                className="form-checkbox h-4 w-4 text-green-600 accent-green-400 cursor-pointer" 
                                            />
                                        </th>
                                    )}
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Category</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Manufacturer</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Formulation</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Price</th>
                                    <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Stock</th>
                                    {isAdmin && (
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Action</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}`}>
                                {inventoryData.map(item => (
                                    <InventoryItem
                                        key={item.id}
                                        {...item}
                                        isSelected={selectedItems.includes(item.id)}
                                        onSelect={isBiller ? handleSelectItem : undefined}
                                        onAddStock={isAdmin ? handleAddStock : undefined}
                                        showCheckbox={isBiller}
                                        showAddStock={isAdmin}
                                        showActions={false}
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
        
        {/* Floating Add to Bill Button - Biller Only */}
        {isBiller && selectedItems.length > 0 && (
            <div className="fixed bottom-6 right-6 z-40 max-sm:bottom-4 max-sm:right-4">
                <button
                    onClick={handleAddToBill}
                    className="bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105 flex items-center gap-3 font-semibold"
                >
                    <i className='bx bx-cart-add text-2xl'></i>
                    <span>Add {selectedItems.length} to Bill</span>
                </button>
            </div>
        )}
        
        {/* Add Stock Modal - Admin Only */}
        {isAdmin && showAddStockModal && (
            <AddItemModal 
                isOpen={showAddStockModal} 
                onClose={() => {
                    setShowAddStockModal(false)
                    setSelectedDrugForStock(null)
                }} 
                drugId={selectedDrugForStock}
                isAddingStock={true}
            />
        )}
        </>
    )
}


export default Inventory