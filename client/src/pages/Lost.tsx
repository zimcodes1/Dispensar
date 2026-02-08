import { useEffect } from "react"
import { Link } from "react-router-dom"

function Lost() {
  useEffect(()=>{document.title = '404 Not Found | Dispensar'})
  return(
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex flex-col justify-center items-center px-4">
        <div className="text-center">
            <div className="mb-8">
                <i className="bx bx-error-circle text-9xl text-emerald-400 animate-pulse"></i>
            </div>
            <h1 className="text-8xl max-sm:text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl max-sm:text-xl font-semibold text-emerald-300 mb-4">Page Not Found</h2>
            <p className="text-gray-300 text-lg max-sm:text-base mb-8 max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <div className="flex gap-4 justify-center max-sm:flex-col">
                <Link to="/">
                    <button className="px-8 py-3 bg-emerald-500 text-gray-900 font-bold rounded-lg hover:bg-emerald-400 transition shadow-lg">
                        <i className="bx bx-home mr-2"></i>
                        Go Home
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="px-8 py-3 border-2 border-gray-400 text-white font-bold rounded-lg hover:bg-gray-800 transition">
                        <i className="bx bx-support mr-2"></i>
                        Contact Support
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Lost