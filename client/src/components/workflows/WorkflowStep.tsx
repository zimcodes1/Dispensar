import { motion } from 'framer-motion'
import { useDarkMode } from '../../utils/useDarkMode'

interface WorkflowStepProps {
    icon: string
    title: string
    description: string
    stepNumber: number
    isLast?: boolean
    color: string
}

function WorkflowStep({ icon, title, description, stepNumber, isLast, color }: WorkflowStepProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    return (
        <div className="flex items-center gap-4">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stepNumber * 0.2 }}
                className="flex flex-col items-center"
            >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color} shadow-lg`}>
                    <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <span className={`text-xs font-semibold mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Step {stepNumber}
                </span>
            </motion.div>

            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stepNumber * 0.2 + 0.1 }}
                className="flex-1"
            >
                <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
            </motion.div>

            {!isLast && (
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: stepNumber * 0.2 + 0.3 }}
                    className={`w-0.5 h-12 ml-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                    style={{ originY: 0 }}
                />
            )}
        </div>
    )
}

export default WorkflowStep
