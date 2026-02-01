import { useDarkMode } from '../../utils/useDarkMode'

interface CreateNewReportModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function CreateNewReportModal({ isOpen, onClose }: CreateNewReportModalProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className={`w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Create New Report</h3>
                    <button onClick={onClose} className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto table-scroll">
                    <div className="p-6 space-y-4">
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Report Title</label>
                            <input type="text" placeholder="Enter report title" className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 bg-white'}`} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Report Type</label>
                                <select className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300 bg-white'}`}>
                                    <option>Daily Sales</option>
                                    <option>Inventory Status</option>
                                    <option>Low Stock Alert</option>
                                    <option>Expiry Report</option>
                                    <option>Employee Performance</option>
                                </select>
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Period</label>
                                <select className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300 bg-white'}`}>
                                    <option>Today</option>
                                    <option>This Week</option>
                                    <option>This Month</option>
                                    <option>Custom Range</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description</label>
                            <textarea rows={4} placeholder="Add report description..." className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 bg-white'}`}></textarea>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-6 flex justify-end gap-3 shrink-0">
                    <button onClick={onClose} className={`px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    )
}