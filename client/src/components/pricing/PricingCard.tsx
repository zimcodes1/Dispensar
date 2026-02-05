import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../utils/useDarkMode'

interface PricingCardProps {
    name: string
    price: number
    period: string
    description: string
    features: string[]
    isPopular?: boolean
    ctaText: string
    ctaLink: string
    index: number
}

function PricingCard({ name, price, period, description, features, isPopular, ctaText, ctaLink, index }: PricingCardProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`relative p-8 rounded-2xl ${
                isPopular
                    ? isDarkMode
                        ? 'bg-gray-800 border-2 border-green-500 shadow-xl shadow-green-500/20'
                        : 'gradient-to-br from-green-50 to-white border-2 border-green-400 shadow-xl'
                    : isDarkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200'
            } transition-all duration-300`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg">
                        MOST POPULAR
                    </span>
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {name}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {description}
                </p>
            </div>

            <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ${price}
                    </span>
                    <span className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        /{period}
                    </span>
                </div>
            </div>

            <ul className="space-y-4 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <i className='bx bx-check text-xl text-green-500 shrink-0 mt-0.5'></i>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <Link to={ctaLink}>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                    isPopular
                        ? 'bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg'
                        : isDarkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                }`}>
                    {ctaText}
                </button>
            </Link>
        </motion.div>
    )
}

export default PricingCard
