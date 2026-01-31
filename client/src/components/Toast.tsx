import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToastProps {
    message: string
    type?: 'success' | 'error' | 'info'
    onClose: () => void
    duration?: number
}

export default function Toast({ message, type = 'success', onClose, duration = 3000 }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration)
        return () => clearTimeout(timer)
    }, [duration, onClose])

    const styles = {
        success: 'bg-green-600 text-white',
        error: 'bg-red-600 text-white',
        info: 'bg-blue-600 text-white'
    }

    const icons = {
        success: 'bx-check-circle',
        error: 'bx-error-circle',
        info: 'bx-info-circle'
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className={`fixed top-20 right-4 z-50 ${styles[type]} px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md`}
            >
                <i className={`bx ${icons[type]} text-2xl`}></i>
                <p className="flex-1">{message}</p>
                <button onClick={onClose} className="hover:opacity-80">
                    <i className="bx bx-x text-2xl"></i>
                </button>
            </motion.div>
        </AnimatePresence>
    )
}
