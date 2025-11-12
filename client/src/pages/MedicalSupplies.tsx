import { useState } from 'react'
import RegisterSupplyModal from '../components/supplies/RegisterSupplyModal'
import SuppliesList from '../components/supplies/SuppliesList'
import SuppliesFilters from '../components/supplies/SuppliesFilters'
import SideNav from '../components/SideNav'
import Topbar from '../components/dashboard/Topbar'

// These would typically come from your backend
const SUPPLY_CATEGORIES = [
    'Injection & Infusion',
    'Wound Care',
    'Personal Protective',
    'Diagnostic',
    'Surgical Instruments',
    'Patient Care',
    'Sterilization',
    'Laboratory',
    'Others'
]

interface SupplyFormData {
    name: string
    category: string
    quantity: string
    price: string
    supplier: string
    reorderLevel: string
    description?: string
    unit: string
    location?: string
}

interface Supply {
    id: string
    name: string
    category: string
    quantity: number
    price: number
    supplier: string
    reorderLevel: number
    description?: string
    unit: string
    location?: string
}

export default function MedicalSupplies() {
    const [showAddModal, setShowAddModal] = useState(false)
    const [supplies, setSupplies] = useState<Supply[]>([]) // This would be managed by your state management solution
    const [editSupply, setEditSupply] = useState<Supply | null>(null)
    const [filteredSupplies, setFilteredSupplies] = useState<Supply[]>([])

    // Get unique suppliers from supplies
    const suppliers = [...new Set(supplies.map(s => s.supplier))]

    function handleAddSupply(formData: SupplyFormData) {
        // In a real app, this would make an API call
        const newSupply = {
            id: Date.now().toString(), // Use proper ID generation in production
            name: formData.name,
            category: formData.category,
            quantity: Number(formData.quantity),
            price: Number(formData.price),
            reorderLevel: Number(formData.reorderLevel),
            supplier: formData.supplier,
            description: formData.description,
            unit: formData.unit,
            location: formData.location
        }
        setSupplies(prev => [...prev, newSupply])
        setShowAddModal(false)
    }

    function handleEditSupply(formData: SupplyFormData) {
        if (!editSupply) return
        // In a real app, this would make an API call
        const updatedSupply = {
            ...editSupply,
            name: formData.name,
            category: formData.category,
            quantity: Number(formData.quantity),
            price: Number(formData.price),
            reorderLevel: Number(formData.reorderLevel),
            supplier: formData.supplier,
            description: formData.description,
            unit: formData.unit,
            location: formData.location
        }
        setSupplies(prev => 
            prev.map(supply => supply.id === editSupply.id ? updatedSupply : supply)
        )
        setEditSupply(null)
    }

    function handleDeleteSupply(supplyId: string) {
        // In a real app, this would make an API call
        setSupplies(prev => prev.filter(supply => supply.id !== supplyId))
    }

    function applyFilters(filters: {
        search: string
        category: string
        stockStatus: string
        supplier: string
    }) {
        let filtered = [...supplies]

        if (filters.search) {
            const searchLower = filters.search.toLowerCase()
            filtered = filtered.filter(supply => 
                supply.name.toLowerCase().includes(searchLower) ||
                supply.description?.toLowerCase().includes(searchLower)
            )
        }

        if (filters.category) {
            filtered = filtered.filter(supply => supply.category === filters.category)
        }

        if (filters.supplier) {
            filtered = filtered.filter(supply => supply.supplier === filters.supplier)
        }

        if (filters.stockStatus) {
            filtered = filtered.filter(supply => {
                const status = getStockStatus(supply.quantity, supply.reorderLevel)
                return status === filters.stockStatus
            })
        }

        setFilteredSupplies(filtered)
    }

    function getStockStatus(quantity: number, reorderLevel: number): string {
        if (quantity === 0) return 'out_of_stock'
        if (quantity <= reorderLevel) return 'low_stock'
        return 'in_stock'
    }

    return (
        <div className="w-full h-screen">
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
                <div className="flex w-full h-[40%] max-[767px]:h-fit md:h-fit justify-between pt-4 max-[767px]:pt-2 md:pt-3 max-[767px]:flex-col">
                    
                        <div>
                            <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900">Medical Supplies</h1>
                            <p className="text-gray-600 mt-1 max-sm:text-sm">
                                Manage your medical supplies inventory
                            </p>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="px-4 py-2 bg-green-600 h-12 w-fit text-white max-sm:text-sm rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                        >
                            <i className="bx bx-plus"></i>
                            Add New Supply
                        </button>
                    </div>

                    {/* Filters */}
                    <SuppliesFilters
                        onFilterChange={applyFilters}
                        categories={SUPPLY_CATEGORIES}
                        suppliers={suppliers}
                    />

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <StatCard
                            title="Total Items"
                            value={supplies.length.toString()}
                            icon="bx-package"
                            color="blue"
                        />
                        <StatCard
                            title="Low Stock Items"
                            value={supplies.filter(s => s.quantity <= s.reorderLevel && s.quantity > 0).length.toString()}
                            icon="bx-error"
                            color="yellow"
                        />
                        <StatCard
                            title="Out of Stock"
                            value={supplies.filter(s => s.quantity === 0).length.toString()}
                            icon="bx-x-circle"
                            color="red"
                        />
                        <StatCard
                            title="Total Value"
                            value={`₦${supplies.reduce((acc, s) => acc + (s.price * s.quantity), 0).toLocaleString()}`}
                            icon="bx-money"
                            color="green"
                        />
                    </div>

                    {/* Supplies List */}
                    <div className="bg-white rounded-lg shadow">
                        <SuppliesList
                            supplies={filteredSupplies.length > 0 ? filteredSupplies : supplies}
                            onEdit={setEditSupply}
                            onDelete={handleDeleteSupply}
                        />
                    </div>

                    {/* Add/Edit Modal */}
                    {(showAddModal || editSupply) && (
                        <RegisterSupplyModal
                            onClose={() => {
                                setShowAddModal(false)
                                setEditSupply(null)
                            }}
                            onSubmit={editSupply ? handleEditSupply : handleAddSupply}
                            initialData={editSupply ? {
                                ...editSupply,
                                quantity: editSupply.quantity.toString(),
                                price: editSupply.price.toString(),
                                reorderLevel: editSupply.reorderLevel.toString()
                            } : undefined}
                            isEdit={!!editSupply}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

interface StatCardProps {
    title: string
    value: string
    icon: string
    color: 'blue' | 'yellow' | 'red' | 'green'
}

function StatCard({ title, value, icon, color }: StatCardProps) {
    const colors = {
        blue: 'bg-blue-50 text-blue-600',
        yellow: 'bg-yellow-50 text-yellow-600',
        red: 'bg-red-50 text-red-600',
        green: 'bg-green-50 text-green-600'
    }

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
                <div className={`p-3 rounded-lg ${colors[color]}`}>
                    <i className={`bx ${icon} text-xl`}></i>
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-lg font-semibold text-gray-900">{value}</p>
                </div>
            </div>
        </div>
    )
}