import { useEffect } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../utils/useDarkMode'

function Login() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    useEffect(()=>{document.title = 'Login to your account | Dispensar'})
    return(
        <div className={`w-full min-h-dvh flex justify-center items-center ${isDarkMode ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-linear-to-br from-slate-900 via-emerald-900 to-slate-900'}`}>
            <div className={`flex w-[400px] min-h-[500px] rounded-3xl shadow-2xl flex-col max-sm:w-full max-sm:min-h-[80dvh] max-sm:rounded-none max-sm:absolute max-sm:bottom-0 max-sm:rounded-t-3xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
                <div className="flex flex-col justify-center items-center w-full pt-10 max-sm:pt-20">
                    <img src="/images/logo.png" alt="Logo" className="w-20"/>
                    <h1 className={`text-2xl font-bold mt-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Welcome to <span className="text-green-400">Dispensar</span></h1>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Please log in to continue</p>
                </div>
                {/* Login Form */}
                <form className="flex flex-col w-full px-10 mt-8">
                    <input type="text" placeholder="Employee ID" className={`p-3 rounded-lg mb-4 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' : 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500'}`} />
                    <input type="password" placeholder="Password" className={`p-3 rounded-lg mb-6 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' : 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500'}`} />
                    <button type="submit" className="font-semibold transition-all duration-300 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 shadow-md hover:shadow-lg">Log In <i className="bx bx-right-arrow-alt"></i></button>
                </form>
                {/*Forgotten Password */}
                <div className="flex justify-center items-center w-full py-3 mt-2">
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Forgot your password? <Link to="/forgot-password" className="text-green-400 hover:text-green-500 hover:underline font-medium">Reset it here</Link></p>
                </div>
                {/*Admin Login*/}
                <div className="flex justify-center items-center w-full py-3">
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Admin? <Link to="/adminlogin" className="text-green-400 hover:text-green-500 hover:underline font-medium">Log in here</Link></p>
                </div>
            </div>
        </div>
    )
}



export default Login