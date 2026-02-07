import { useDarkMode } from '../../utils/useDarkMode'

interface DeleteConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    message: string
    itemName?: string
}

function DeleteConfirmationModal({ isOpen, onClose, onConfirm, title, message, itemName }: DeleteConfirmationModalProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className={`w-full max-w-md rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {/* Header */}
                <div className="p-6 pb-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                            <i className='bx bx-trash text-2xl text-red-500'></i>
                        </div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {title}
                        </h3>
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {message}
                    </p>
                    {itemName && (
                        <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {itemName}
                            </p>
                        </div>
                    )}
                </div>

                {/* Warning */}
                <div className={`mx-6 mb-4 p-3 rounded-lg ${isDarkMode ? 'bg-red-900/20 border border-red-800' : 'bg-red-50 border border-red-200'}`}>
                    <p className={`text-sm ${isDarkMode ? 'text-red-300' : 'text-red-800'}`}>
                        <i className='bx bx-error-circle mr-2'></i>
                        This action cannot be undone.
                    </p>
                </div>

                {/* Actions */}
                <div className={`flex gap-3 p-6 pt-0`}>
                    <button
                        onClick={onClose}
                        className={`flex-1 py-3 rounded-lg font-semibold transition ${
                            isDarkMode 
                                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm()
                            onClose()
                        }}
                        className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmationModal
