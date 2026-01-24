import { useEffect } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Login() {
    useEffect(()=>{document.title = 'Login to your account | Dispensar'})
    return(
        <div className="w-full min-h-dvh bg-[#5fdf85] flex justify-center items-center">
            <div className="flex w-[400px] h-[500px] bg-white rounded-3xl shadow-lg flex-col max-sm:w-full max-sm:h-[80dvh] max-sm:rounded-none max-sm:absolute max-sm:bottom-0 max-sm:rounded-t-3xl max-sm:shadow-2xl">
                <div className="flex flex-col justify-center items-center w-full pt-10 max-sm:pt-20">
                    <img src="/images/logo.png" alt="Logo" className="w-20"/>
                    <h1 className="text-2xl font-bold mt-3 text-gray-800">Welcome to <span className="text-green-400">Dispensar</span></h1>
                    <p className="text-gray-600 mt-2">Please log in to continue</p>
                </div>
                {/* Login Form */}
                <form className="flex flex-col w-full px-5 mt-5">
                    <input type="text" placeholder="Employee ID" className="p-2 border border-gray-300 rounded-md mb-4" />
                    <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-md mb-4" />
                    <button type="submit" className="font-bold transition-all duration-300 bg-[#5fdf85] text-white p-2 rounded-md hover:bg-white border-2 border-green-500 hover:text-gray-900">Log In <i className="bx bx-right-arrow-alt"></i></button>
                </form>
                {/*Forgotten Password */}
                <div className="flex justify-center items-center w-full py-3">
                    <p className="text-gray-600">Forgot your password? <a href="#" className="text-green-400 hover:underline">Reset it here</a></p>
                </div>
                {/*Admin Login*/}
                <div className="flex justify-center items-center w-full py-3">
                    <p className="text-gray-600">Admin? <Link to="/adminlogin" className="text-green-400 hover:underline">Log in here</Link></p>
                </div>
            </div>
        </div>
    )
}



export default Login