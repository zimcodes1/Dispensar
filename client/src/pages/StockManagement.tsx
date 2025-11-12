import { useState } from 'react'
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import RegisterDrugModal from "../components/stock/RegisterDrugModal"
import DrugList from "../components/stock/DrugList"
import SearchFilters from "../components/stock/SearchFilters"

// Demo data - replace with API calls
interface Drug {
    id: string
    name: string
    nafdacNumber: string
    category: string
    price: number
    stock: number
    expiryDate: string
    manufactureDate: string
    status: 'active' | 'delisted' | 'expired' | 'expiring-soon'
}

const demoDrugs: Drug[] = [
    {
        id: "1",
        name: "Paracetamol 500mg",
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
        nafdacNumber: "04-5678",
        category: "Antibiotics",
        price: 1200,
        stock: 30,
        expiryDate: "2025-12-30",
        manufactureDate: "2025-01-30",
        status: "expiring-soon" as const
    },
    {
        id: "3",
        name: "Metformin 500mg",
        nafdacNumber: "04-9012",
        category: "Antidiabetic",
        price: 800,
        stock: 0,
        expiryDate: "2025-11-30",
        manufactureDate: "2025-01-30",
        status: "expired" as const
    }
]

export default function StockManagement() {
    const [showRegisterModal, setShowRegisterModal] = useState(false)
    const [editingDrug, setEditingDrug] = useState<typeof demoDrugs[0] | null>(null)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All Categories')
    const [status, setStatus] = useState('All Status')
    const [stockFilter, setStockFilter] = useState('All Stock Levels')

    // Filter drugs based on search and filters
    const filteredDrugs = demoDrugs.filter(drug => {
        const matchesSearch = drug.name.toLowerCase().includes(search.toLowerCase()) ||
                            drug.nafdacNumber.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === 'All Categories' || drug.category === category
        const matchesStatus = status === 'All Status' || drug.status === status.toLowerCase().replace(' ', '-')
        const matchesStock = stockFilter === 'All Stock Levels' ||
                           (stockFilter === 'Low Stock' && drug.stock < 50) ||
                           (stockFilter === 'Out of Stock' && drug.stock === 0) ||
                           (stockFilter === 'In Stock' && drug.stock > 0)

        return matchesSearch && matchesCategory && matchesStatus && matchesStock
    })

    function handleRegisterSubmit(data: any) {
        console.log('Register/Edit drug:', data)
        setShowRegisterModal(false)
        setEditingDrug(null)
    }

    function handleEdit(drug: Drug) {
        setEditingDrug({
            ...drug,
            price: drug.price.toString(),
            stock: drug.stock.toString()
        })
        setShowRegisterModal(true)
    }

    function handleDelist(drugId: string) {
        console.log('Delist drug:', drugId)
        // Implement delist logic
    }

    return (
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
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
                                <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900">Stock Management</h1>
                                <p className="text-sm text-gray-600">Manage your pharmacy inventory</p>
                            </div>
                            <button
                                onClick={() => setShowRegisterModal(true)}
                                className="bg-green-600 text-white px-4 py-2 max-sm:text-sm rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                            >
                                <i className="bx bx-plus"></i>
                                <span>Register New Drug</span>
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            {[
                                { label: 'Total Drugs', value: demoDrugs.length, icon: 'bx-package' },
                                { label: 'Low Stock Items', value: demoDrugs.filter(d => d.stock < 50).length, icon: 'bx-error' },
                                { label: 'Expired Items', value: demoDrugs.filter(d => d.status === 'expired').length, icon: 'bx-time' },
                                { label: 'Active Items', value: demoDrugs.filter(d => d.status === 'active').length, icon: 'bx-check-circle' }
                            ].map((stat, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600">{stat.label}</p>
                                            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
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
                        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200">
                            <DrugList
                                drugs={filteredDrugs}
                                onEdit={handleEdit}
                                onDelist={handleDelist}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Register/Edit Drug Modal */}
            {showRegisterModal && (
                <RegisterDrugModal
                    onClose={() => {
                        setShowRegisterModal(false)
                        setEditingDrug(null)
                    }}
                    onSubmit={handleRegisterSubmit}
                    initialData={editingDrug || undefined}
                    isEdit={!!editingDrug}
                />
            )}
        </>
    )
}