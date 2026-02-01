import { useDarkMode } from '../../utils/useDarkMode'

interface ExportReportModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ExportReportModal({ isOpen, onClose }: ExportReportModalProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className={`w-full max-w-md max-h-[90vh] rounded-lg shadow-lg flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Export Report</h3>
                    <button onClick={onClose} className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Report Type</label>
                        <select className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300 bg-white'}`}>
                            <option>Sales Report</option>
                            <option>Inventory Report</option>
                            <option>Employee Performance</option>
                            <option>Financial Summary</option>
                        </select>
                    </div>
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Date Range</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="date" className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300 bg-white'}`} />
                            <input type="date" className={`w-full p-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300 bg-white'}`} />
                        </div>
                    </div>
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Format</label>
                        <div className="flex gap-3">
                            <label className="flex items-center">
                                <input type="radio" name="format" value="pdf" defaultChecked className="mr-2" />
                                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>PDF</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="format" value="excel" className="mr-2" />
                                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>Excel</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="format" value="csv" className="mr-2" />
                                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>CSV</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-6 flex justify-end gap-3 shrink-0">
                    <button onClick={onClose} className={`px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                        <i className="bx bx-download mr-2"></i>Export
                    </button>
                </div>
            </div>
        </div>
    )
}