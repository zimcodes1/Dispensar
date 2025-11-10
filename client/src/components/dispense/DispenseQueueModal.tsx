import { useState } from 'react'

interface QueueItem {
    id: string
    drugName: string
    queuedAt: string
    cost: number
    quantity: number
}

interface DispenseQueueModalProps {
    onClose: () => void
}

// Demo data - replace with real data from your state/API
const demoQueue: QueueItem[] = [
    {
        id: 'q1',
        drugName: 'Paracetamol 500mg',
        queuedAt: '10:30 AM',
        cost: 1500,
        quantity: 20
    },
    {
        id: 'q2',
        drugName: 'Amoxicillin 250mg',
        queuedAt: '10:35 AM',
        cost: 2500,
        quantity: 15
    },
    {
        id: 'q3',
        drugName: 'Metformin 500mg',
        queuedAt: '10:40 AM',
        cost: 3000,
        quantity: 30
    },
    // Add more items to test scrolling
    {
        id: 'q4',
        drugName: 'Lisinopril 10mg',
        queuedAt: '10:45 AM',
        cost: 4500,
        quantity: 28
    },
    {
        id: 'q5',
        drugName: 'Omeprazole 20mg',
        queuedAt: '10:50 AM',
        cost: 3500,
        quantity: 14
    }
]

export default function DispenseQueueModal({ onClose }: DispenseQueueModalProps) {
    const [queue] = useState<QueueItem[]>(demoQueue)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-800">Dispense Queue</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{queue.length} items</span>
                    </div>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                {/* Queue List */}
                <div className="max-h-[60vh] overflow-y-auto p-4">
                    {queue.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">No items in queue</p>
                    ) : (
                        <div className="space-y-3">
                            {queue.map((item) => (
                                <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-150">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900">{item.drugName}</h4>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                            <span>Quantity: {item.quantity}</span>
                                            <span>Queued: {item.queuedAt}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-gray-900 font-medium">₦{item.cost.toLocaleString()}</span>
                                        <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition">
                                            Dispense
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-100 px-4 py-3 flex justify-end gap-3">
                    <button onClick={onClose} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                        Close
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                        Dispense All
                    </button>
                </div>
            </div>
        </div>
    )
}
