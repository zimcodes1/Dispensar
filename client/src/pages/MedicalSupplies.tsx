import { useEffect, useState } from 'react'
import RegisterSupplyModal from '../components/supplies/RegisterSupplyModal'
import SuppliesList from '../components/supplies/SuppliesList'
import SuppliesFilters from '../components/supplies/SuppliesFilters'
import DeleteConfirmationModal from '../components/modals/DeleteConfirmationModal'
import SideNav from '../components/SideNav'
import Topbar from '../components/dashboard/Topbar'
import { useDarkMode } from '../utils/useDarkMode'

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
    const [supplies, setSupplies] = useState<Supply[]>([
        {
            id: '1',
            name: 'Disposable Syringes 5ml',
            category: 'Injection & Infusion',
            quantity: 500,
            price: 50,
            supplier: 'MedEquip Ltd',
            reorderLevel: 200,
            unit: 'pieces',
            location: 'Storage Room A',
            description: 'Sterile disposable syringes with needle'
        },
        {
            id: '2',
            name: 'Surgical Gloves (Medium)',
            category: 'Personal Protective',
            quantity: 150,
            price: 1200,
            supplier: 'SafetyFirst Supplies',
            reorderLevel: 100,
            unit: 'boxes',
            location: 'Storage Room B',
            description: 'Latex-free surgical gloves'
        },
        {
            id: '3',
            name: 'Sterile Gauze Pads 4x4',
            category: 'Wound Care',
            quantity: 80,
            price: 800,
            supplier: 'MedEquip Ltd',
            reorderLevel: 100,
            unit: 'packs',
            location: 'Storage Room A',
            description: 'Sterile gauze pads for wound dressing'
        },
        {
            id: '4',
            name: 'Digital Thermometer',
            category: 'Diagnostic',
            quantity: 25,
            price: 3500,
            supplier: 'HealthTech Solutions',
            reorderLevel: 10,
            unit: 'pieces',
            location: 'Equipment Room',
            description: 'Digital oral/rectal thermometer'
        },
        {
            id: '5',
            name: 'Blood Pressure Monitor',
            category: 'Diagnostic',
            quantity: 8,
            price: 15000,
            supplier: 'HealthTech Solutions',
            reorderLevel: 5,
            unit: 'pieces',
            location: 'Equipment Room',
            description: 'Automatic digital BP monitor'
        },
        {
            id: '6',
            name: 'IV Cannula 18G',
            category: 'Injection & Infusion',
            quantity: 0,
            price: 150,
            supplier: 'MedEquip Ltd',
            reorderLevel: 50,
            unit: 'pieces',
            location: 'Storage Room A',
            description: 'Intravenous cannula 18 gauge'
        },
        {
            id: '7',
            name: 'Surgical Masks (50pcs)',
            category: 'Personal Protective',
            quantity: 300,
            price: 2500,
            supplier: 'SafetyFirst Supplies',
            reorderLevel: 150,
            unit: 'boxes',
            location: 'Storage Room B',
            description: '3-ply disposable surgical masks'
        },
        {
            id: '8',
            name: 'Alcohol Swabs',
            category: 'Sterilization',
            quantity: 45,
            price: 600,
            supplier: 'MedEquip Ltd',
            reorderLevel: 50,
            unit: 'boxes',
            location: 'Storage Room A',
            description: '70% isopropyl alcohol prep pads'
        },
    ]) // This would be managed by your state management solution
    const [editSupply, setEditSupply] = useState<Supply | null>(null)
    const [filteredSupplies, setFilteredSupplies] = useState<Supply[]>([])
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; supplyId: string | null; supplyName: string }>({ isOpen: false, supplyId: null, supplyName: '' })

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
        const supply = supplies.find(s => s.id === supplyId)
        setDeleteModal({ isOpen: true, supplyId, supplyName: supply?.name || '' })
    }
    
    const confirmDelete = () => {
        if (deleteModal.supplyId) {
            setSupplies(prev => prev.filter(supply => supply.id !== deleteModal.supplyId))
        }
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
    useEffect(()=>{document.title = 'Medical Supplies | Dispensar'})
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    return (
        <div className="w-full min-h-screen">
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
                <div className="flex w-full h-[40%] max-[767px]:h-fit md:h-fit justify-between pt-4 max-[767px]:pt-2 md:pt-3 max-[767px]:flex-col">
                    
                        <div>
                            <h1 className={`text-2xl max-sm:text-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Medical Supplies</h1>
                            <p className={`my-2 max-sm:text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Manage your medical supplies inventory
                            </p>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="px-4 py-2 bg-green-600 max-sm:mb-2 h-12 w-fit text-white max-sm:text-sm rounded-lg hover:bg-green-700 transition flex items-center gap-2"
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
                    <div className={`rounded-lg shadow-sm border overflow-hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
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
                    
                    {/* Delete Confirmation Modal */}
                    <DeleteConfirmationModal
                        isOpen={deleteModal.isOpen}
                        onClose={() => setDeleteModal({ isOpen: false, supplyId: null, supplyName: '' })}
                        onConfirm={confirmDelete}
                        title="Delete Supply"
                        message="Are you sure you want to delete this supply item?"
                        itemName={deleteModal.supplyName}
                    />
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
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const colors = {
        blue: 'bg-blue-50 text-blue-600',
        yellow: 'bg-yellow-50 text-yellow-600',
        red: 'bg-red-50 text-red-600',
        green: 'bg-green-50 text-green-600'
    }

    return (
        <div className={`rounded-lg shadow p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center">
                <div className={`p-3 rounded-lg ${colors[color]}`}>
                    <i className={`bx ${icon} text-xl`}></i>
                </div>
                <div className="ml-4">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
                </div>
            </div>
        </div>
    )
}