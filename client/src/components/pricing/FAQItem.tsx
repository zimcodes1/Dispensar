import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDarkMode } from '../../utils/useDarkMode'

interface FAQItemProps {
    question: string
    answer: string
    index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`border rounded-lg overflow-hidden ${
                isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full p-6 text-left flex items-center justify-between ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                } transition-colors`}
            >
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {question}
                </span>
                <i className={`bx ${isOpen ? 'bx-minus' : 'bx-plus'} text-2xl ${
                    isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}></i>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className={`p-6 pt-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default FAQItem
