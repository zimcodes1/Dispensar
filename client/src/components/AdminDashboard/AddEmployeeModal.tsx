import { useDarkMode } from '../../utils/useDarkMode'

function AddEmployeeModal({ onClose }: { onClose: () => void }) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className={`w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {/* header */}
                <div className={`flex flex-col items-center justify-start px-10 py-5 border-b flex-shrink-0 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Add Employee</h3>     
                    <form className="w-full space-y-4 mt-4 flex-1 overflow-y-auto table-scroll">
                        <div>
                            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                            <input 
                                type="text"
                                placeholder="Enter employee name" 
                                className={`mt-1 h-10 w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}
                            />
                        </div>

                        <div>
                            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                            <input 
                                type="email"
                                placeholder="Enter email address" 
                                className={`mt-1 h-10 w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}
                            />
                        </div>

                        <div>
                            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Role</label>
                            <select className={`mt-1 h-10 w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                                <option value="">Select a role</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="employee">Employee</option>
                            </select>
                        </div>

                        <div>
                            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Department</label>
                            <input 
                                type="text"
                                placeholder="Enter department" 
                                className={`mt-1 h-10 w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}
                            />
                        </div>

                        <div className="flex justify-end space-x-3 pt-4 pb-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${isDarkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-700 bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500"
                            >
                                Add Employee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeModal;