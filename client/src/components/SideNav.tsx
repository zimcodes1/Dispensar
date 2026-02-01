import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useDarkMode } from "../utils/useDarkMode"


const NavLinkStyles = ({ isActive, isDarkMode }: { isActive: string | any, isDarkMode: boolean }) => `mt-2 flex items-center justify-start max-sm:justify-start max-[900px]:justify-center w-full rounded-lg h-12 px-2 transition-all duration-300 cursor-pointer
${isActive 
    ? isDarkMode 
        ? 'bg-white/20' 
        : 'bg-[#1313132a]'
    : isDarkMode 
        ? 'hover:bg-white/10' 
        : 'hover:bg-[#1313132a]'
}`
function SideNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // close on Escape
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setIsOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const navItems = [
        { to: '/dashboard', icon: 'bx bx-tachometer', label: 'Dashboard' },
        { to: '/admin', icon: 'bx bx-shield-quarter', label: 'Admin Dashboard' },
        { to: '/billing', icon: 'bx bx-dollar', label: 'Billing' },
        { to: '/dispense', icon: 'bx bx-capsule', label: 'Dispense' },
        { to: '/billpayments', icon: 'bx bx-receipt', label: 'Bill Payments' },
        { to: '/inventory', icon: 'bx bx-package', label: 'Inventory' },
        { to: '/stock', icon: 'bx bx-cabinet', label: 'Stock Management' },
        { to: '/supplies', icon: 'bx bx-first-aid', label: 'Medical Supplies' },
        { to: '/reports', icon: 'bx bx-notepad', label: 'Reports' },
        { to: '/settings', icon: 'bx bx-cog', label: 'Settings' },
    ]

    return (
        <>
            {/* Hamburger (mobile only) */}
            <button
                aria-label="Open menu"
                className={`fixed top-1.5 left-2 z-50 p-1 px-2 rounded-md border transition-colors duration-300 md:hidden ${
                    isDarkMode 
                        ? 'border-gray-700 hover:bg-gray-800' 
                        : 'border-gray-100 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(true)}
            >
                <i className={`bx bx-menu text-2xl transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}></i>
            </button>

            {/* Overlay for mobile when open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar: hidden on small screen devices unless opened; tablet: narrow (icons only); desktop: full width with text */}
            <AnimatePresence>
                {(isOpen || !isMobile) && (
                    <motion.div
                        initial={isMobile ? { x: -280 } : false}
                        animate={{ x: 0 }}
                        exit={isMobile ? { x: -280 } : {}}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`flex flex-col fixed max-sm:top-[50px] top-[60px] left-0 z-50 w-64 md:w-16 lg:w-[20%] h-[95dvh] px-2 justify-between pb-6 overflow-y-scroll hide-scrollbar transition-colors duration-300 ${
                            isDarkMode 
                                ? 'bg-emerald-700' 
                                : 'bg-[#5fdf85]'
                        }`}>

                {/* Close button (mobile only) */}
                <button className="fixed top-15 right-2 md:hidden" onClick={() => setIsOpen(false)}>
                    <i className={`bx bx-x text-3xl p-2 rounded-4xl transition duration-300 hover:rotate-90 ${
                        isDarkMode
                            ? 'text-gray-200 bg-gray-800 hover:bg-gray-200 hover:text-gray-800'
                            : 'text-gray-50 bg-gray-700 hover:bg-gray-50 hover:text-gray-700'
                    }`}></i>
                </button>

                <div>
                    {navItems.map(item => (
                        <NavLink 
                            key={item.to} 
                            to={item.to} 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => NavLinkStyles({ isActive, isDarkMode })}
                        >
                            <div>
                                <i className={`${item.icon} text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}></i>
                                {/* Text: visible on mobile and desktop (lg), hidden on tablet (md) */}
                                <span className={`ml-2 font-semibold inline-block md:hidden lg:inline-block transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{item.label}</span>
                            </div>
                        </NavLink>
                    ))}
                </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default SideNav