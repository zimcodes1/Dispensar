import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SideNav(){
    const [isOpen, setIsOpen] = useState(false)

    // close on Escape
    useEffect(() => {
        function onKey(e: KeyboardEvent){
            if(e.key === 'Escape') setIsOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const navItems = [
        { to: '/dashboard', icon: 'bx bx-tachometer', label: 'Dashboard' },
        { to: '/admin', icon: 'bx bx-shield-quarter', label: 'Admin Dashboard' },
        { to: '/dispense', icon: 'bx bx-dollar', label: 'Dispense' },
        { to: '/billpayments', icon: 'bx bx-receipt', label: 'Bill Payments' },
        { to: '/inventory', icon: 'bx bx-package', label: 'Inventory' },
        { to: '/stock', icon: 'bx bx-cabinet', label: 'Stock Management' },
        { to: '/supplies', icon: 'bx bx-first-aid', label: 'Medical Supplies' },
        { to: '/reports', icon: 'bx bx-notepad', label: 'Reports' },
        { to: '/settings', icon: 'bx bx-cog', label: 'Settings' },
    ]

    return(
        <>
            {/* Hamburger (mobile only) */}
            <button
                aria-label="Open menu"
                className="fixed top-1.5 left-2 z-50 p-1 px-2 rounded-md border border-gray-100 md:hidden"
                onClick={() => setIsOpen(true)}
            >
                <i className="bx bx-menu text-2xl text-gray-800"></i>
            </button>

            {/* Overlay for mobile when open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar: hidden on small unless opened; tablet: narrow (icons only); desktop: full width with text */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col bg-[#5fdf85] fixed max-sm:top-[50px] top-[60px] left-0 z-50 w-64 md:w-16 lg:w-[20%] h-[95dvh] px-2 justify-between pb-5 transition-all duration-300`}>

                {/* Close button (mobile only) */}
                <button className="absolute top-2 right-2 md:hidden" onClick={() => setIsOpen(false)}>
                    <i className="bx bx-x text-2xl text-gray-800"></i>
                </button>

                <div className="mt-2">
                    {navItems.map(item => (
                        <Link key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                            <div className="mt-2 flex items-center justify-start max-md:justify-center w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                                <i className={`${item.icon} text-gray-800 text-lg`}></i>
                                {/* Text: visible on mobile and desktop (lg), hidden on tablet (md) */}
                                <span className="ml-2 text-gray-800 font-semibold inline-block md:hidden lg:inline-block">{item.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-2 flex items-center justify-start md:justify-center w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                    <i className="bx bx-log-out text-red-500 text-lg"></i>
                    <span className="ml-2 text-red-500 font-semibold inline-block md:hidden lg:inline-block">Logout</span>
                </div>
            </div>
        </>
    )
}

export default SideNav