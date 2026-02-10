import { useState, useEffect } from 'react'
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import RegisterItemModal from "../components/stock/RegisterItemModal"
import DrugList from "../components/stock/DrugList"
import SearchFilters from "../components/stock/SearchFilters"
import DeleteConfirmationModal from "../components/modals/DeleteConfirmationModal"
import { useDarkMode } from "../utils/useDarkMode"

// Demo data - replace with API calls
interface Item {
    id: string
    name: string
    itemType: 'drug' | 'supply'
    nafdacNumber?: string
    category: string
    price: number
    stock: number
    expiryDate?: string
    manufactureDate?: string
    supplier?: string
    unit?: string
    status: 'active' | 'delisted' | 'expired' | 'expiring-soon'
}

const demoItems: Item[] = [
    {
        id: "1",
        name: "Paracetamol 500mg",
        itemType: "drug",
        nafdacNumber: "04-1234",
        category: "Pain Relief",
        price: 500,
        stock: 150,
        expiryDate: "2026-06-30",
        manufactureDate: "2025-06-30",
        status: "active"
    },
    {
        id: "2",
        name: "Amoxicillin 250mg",
        itemType: "drug",
        nafdacNumber: "04-5678",
        category: "Antibiotics",
        price: 1200,
        stock: 30,
        expiryDate: "2025-12-30",
        manufactureDate: "2025-01-30",
        status: "expiring-soon"
    },
    {
        id: "3",
        name: "Metformin 500mg",
        itemType: "drug",
        nafdacNumber: "04-9012",
        category: "Antidiabetic",
        price: 800,
        stock: 0,
        expiryDate: "2025-11-30",
        manufactureDate: "2025-01-30",
        status: "expired"
    },
    {
        id: "4",
        name: "Disposable Syringes 5ml",
        itemType: "supply",
        category: "Injection & Infusion",
        price: 50,
        stock: 500,
        supplier: "MedEquip Ltd",
        unit: "pieces",
        status: "active"
    },
    {
        id: "5",
        name: "Surgical Gloves (Medium)",
        itemType: "supply",
        category: "Personal Protective",
        price: 1200,
        stock: 150,
        supplier: "SafetyFirst Supplies",
        unit: "boxes",
        status: "active"
    },
    {
        id: "6",
        name: "Ibuprofen 400mg",
        itemType: "drug",
        nafdacNumber: "04-3456",
        category: "Pain Relief",
        price: 350,
        stock: 200,
        expiryDate: "2026-08-15",
        manufactureDate: "2025-08-15",
        status: "active"
    },
    {
        id: "7",
        name: "Sterile Gauze Pads 4x4",
        itemType: "supply",
        category: "Wound Care",
        price: 800,
        stock: 80,
        supplier: "MedEquip Ltd",
        unit: "packs",
        status: "active"
    },
    {
        id: "8",
        name: "Omeprazole 20mg",
        itemType: "drug",
        nafdacNumber: "04-7890",
        category: "Gastrointestinal",
        price: 600,
        stock: 45,
        expiryDate: "2026-03-20",
        manufactureDate: "2025-03-20",
        status: "active"
    },
    {
        id: "9",
        name: "Digital Thermometer",
        itemType: "supply",
        category: "Diagnostic",
        price: 3500,
        stock: 25,
        supplier: "HealthTech Solutions",
        unit: "pieces",
        status: "active"
    },
    {
        id: "10",
        name: "Ciprofloxacin 500mg",
        itemType: "drug",
        nafdacNumber: "04-2468",
        category: "Antibiotics",
        price: 950,
        stock: 15,
        expiryDate: "2025-11-10",
        manufactureDate: "2025-01-10",
        status: "expiring-soon"
    },
    {
        id: "11",
        name: "IV Cannula 18G",
        itemType: "supply",
        category: "Injection & Infusion",
        price: 150,
        stock: 0,
        supplier: "MedEquip Ltd",
        unit: "pieces",
        status: "active"
    },
    {
        id: "12",
        name: "Amlodipine 5mg",
        itemType: "drug",
        nafdacNumber: "04-1357",
        category: "Cardiovascular",
        price: 450,
        stock: 180,
        expiryDate: "2026-12-30",
        manufactureDate: "2025-12-30",
        status: "active"
    }
]

export default function StockManagement() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [showRegisterModal, setShowRegisterModal] = useState(false)
    const [editingItem, setEditingItem] = useState<typeof demoItems[0] | null>(null)
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; itemId: string | null; itemName: string }>({ isOpen: false, itemId: null, itemName: '' })
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All Categories')
    const [status, setStatus] = useState('All Status')
    const [stockFilter, setStockFilter] = useState('All Stock Levels')

    // Filter items based on search and filters
    const filteredItems = demoItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                            (item.nafdacNumber && item.nafdacNumber.toLowerCase().includes(search.toLowerCase()))
        const matchesCategory = category === 'All Categories' || item.category === category
        const matchesStatus = status === 'All Status' || item.status === status.toLowerCase().replace(' ', '-')
        const matchesStock = stockFilter === 'All Stock Levels' ||
                           (stockFilter === 'Low Stock' && item.stock < 50) ||
                           (stockFilter === 'Out of Stock' && item.stock === 0) ||
                           (stockFilter === 'In Stock' && item.stock > 0)

        return matchesSearch && matchesCategory && matchesStatus && matchesStock
    })

    function handleRegisterSubmit(data: any) {
        console.log('Register/Edit item:', data)
        setShowRegisterModal(false)
        setEditingItem(null)
    }

    function handleEdit(item: Item) {
        setEditingItem({
            ...item,
            price: item.price,
            stock: item.stock
        })
        setShowRegisterModal(true)
    }

    function handleDelist(itemId: string) {
        const item = demoItems.find(d => d.id === itemId)
        setDeleteModal({ isOpen: true, itemId, itemName: item?.name || '' })
    }
    
    const confirmDelete = () => {
        if (deleteModal.itemId) {
            console.log('Delist item:', deleteModal.itemId)
        }
    }

    useEffect(()=>{document.title = 'Stock Management | Dispensar'})
    return (
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
 
                    {/* Header */}
                    <div className="p-6 max-sm:p-0">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className={`text-2xl max-sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Stock Management</h1>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your pharmacy inventory</p>
                            </div>
                            <button
                                onClick={() => setShowRegisterModal(true)}
                                className="bg-green-600 text-white px-4 py-2 max-sm:text-sm rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                            >
                                <i className="bx bx-plus"></i>
                                <span>Register New Item</span>
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            {[
                                { label: 'Total Items', value: demoItems.length, icon: 'bx-package' },
                                { label: 'Low Stock Items', value: demoItems.filter(d => d.stock < 50).length, icon: 'bx-error' },
                                { label: 'Expired Items', value: demoItems.filter(d => d.status === 'expired').length, icon: 'bx-time' },
                                { label: 'Active Items', value: demoItems.filter(d => d.status === 'active').length, icon: 'bx-check-circle' }
                            ].map((stat, index) => (
                                <div key={index} className={`p-4 rounded-lg shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                                            <p className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <i className={`bx ${stat.icon} text-xl text-green-600`}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Search and Filters */}
                        <SearchFilters
                            search={search}
                            onSearchChange={setSearch}
                            category={category}
                            onCategoryChange={setCategory}
                            status={status}
                            onStatusChange={setStatus}
                            stockFilter={stockFilter}
                            onStockFilterChange={setStockFilter}
                        />

                        {/* Drug List */}
                        <div className={`mt-6 rounded-lg shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            <DrugList
                                drugs={filteredItems}
                                onEdit={handleEdit}
                                onDelist={handleDelist}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Register/Edit Item Modal */}
            {showRegisterModal && (
                <RegisterItemModal
                    onClose={() => {
                        setShowRegisterModal(false)
                        setEditingItem(null)
                    }}
                    onSubmit={handleRegisterSubmit}
                    initialData={editingItem ? {
                        ...editingItem,
                        price: editingItem.price.toString(),
                        stock: editingItem.stock.toString()
                    } : undefined}
                    isEdit={!!editingItem}
                />
            )}
            
            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false, itemId: null, itemName: '' })}
                onConfirm={confirmDelete}
                title="Delist Item"
                message="Are you sure you want to delist this item from your inventory?"
                itemName={deleteModal.itemName}
            />
        </>
    )
}