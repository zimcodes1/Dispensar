import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDarkMode } from "../utils/useDarkMode"

function SignUp(){
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    useEffect(()=>{document.title = 'Signup | Dispensar'})
    return(
        <div className={`w-full min-h-dvh flex justify-center items-center ${isDarkMode ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-linear-to-br from-slate-900 via-emerald-900 to-slate-900'}`}>
            <div className={`flex w-[400px] min-h-[550px] rounded-3xl shadow-2xl flex-col max-sm:w-full max-sm:min-h-[80dvh] max-sm:rounded-none max-sm:absolute max-sm:bottom-0 max-sm:rounded-t-3xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
                <div className="flex flex-col justify-center items-center w-full pt-8 max-sm:pt-20">
                    <img src="/images/logo.png" alt="Logo" className="w-20"/>
                    <h1 className={`text-2xl font-bold mt-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Welcome to <span className="text-green-400">Dispensar</span></h1>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Please fill the form to continue</p>
                </div>
                {/* Signup Form */}
                <form className="flex flex-col w-full px-10 mt-8">
                    <input type="email" placeholder="Your Email" className={`p-3 rounded-lg mb-4 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' : 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500'}`} />
                    <input type="password" placeholder="Password" className={`p-3 rounded-lg mb-4 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' : 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500'}`} />
                    <input type="password" placeholder="Confirm Password" className={`p-3 rounded-lg mb-6 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' : 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500'}`} />
                    <button  className="font-semibold transition-all duration-300 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 shadow-md hover:shadow-lg">Sign Up <i className="bx bx-right-arrow-alt"></i></button>
                </form>
                {/*Login */}
                <div className="flex justify-center items-center w-full py-3 mt-2">
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Already have an account? <Link to='/onboarding' className="text-green-400 hover:text-green-500 hover:underline font-medium">Login here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp