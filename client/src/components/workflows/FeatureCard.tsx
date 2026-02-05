import { motion } from 'framer-motion'
import { useDarkMode } from '../../utils/useDarkMode'

interface FeatureCardProps {
    icon: string
    title: string
    description: string
    index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-xl border ${
                isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-green-500' 
                    : 'bg-white border-gray-200 hover:border-green-400'
            } transition-all duration-300`}
        >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                isDarkMode ? 'bg-green-500/20' : 'bg-green-100'
            }`}>
                <i className={`${icon} text-2xl text-green-500`}></i>
            </div>
            <h4 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h4>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {description}
            </p>
        </motion.div>
    )
}

export default FeatureCard
