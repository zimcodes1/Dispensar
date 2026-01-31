

function AddEmployeeModal({ onClose }: { onClose: () => void }) {
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col">
                {/* header */}
                <div className="flex flex-col items-center justify-start px-10 py-5 border-b border-gray-200 flex-shrink-0">
                    <h3 className="text-lg font-semibold text-gray-800">Add Employee</h3>     
                    <form className="w-full space-y-4 mt-4 flex-1 overflow-y-auto table-scroll">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input 
                                type="text"
                                placeholder="Enter employee name" 
                                className="mt-1 h-10 w-full p-2 border border-gray-300 rounded-md bg-white text-sm" 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email"
                                placeholder="Enter email address" 
                                className="mt-1 h-10 w-full p-2 border border-gray-300 rounded-md bg-white text-sm" 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Role</label>
                            <select className="mt-1 h-10 w-full p-2 border border-gray-300 rounded-md bg-white text-sm">
                                <option value="">Select a role</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="employee">Employee</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department</label>
                            <input 
                                type="text"
                                placeholder="Enter department" 
                                className="mt-1 h-10 w-full p-2 border border-gray-300 rounded-md bg-white text-sm" 
                            />
                        </div>

                        <div className="flex justify-end space-x-3 pt-4 pb-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
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