import { Link } from "react-router-dom"
import { useDarkMode } from "../../utils/useDarkMode"

function Topbar(){
    const { isDarkMode, toggleDarkMode } = useDarkMode() as { isDarkMode: boolean, toggleDarkMode:()=>void };;

    return(
        <div className="absolute z-50 w-full px-10 max-sm:px-0 h-20 max-sm:h-15 bg-transparent flex justify-between items-center">
            <div className="flex items-center ml-10 max-sm:ml-2">
                <img src="/images/logo.png" alt="Logo" className="w-10 max-sm:w-8"/>
                <h1 className="text-gray-50 font-bold text-xl ml-3 max-sm:text-lg">Dispensar</h1>
            </div>
            <div className="flex items-center gap-4 mr-10 max-sm:mr-2">
                <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg transition duration-300 hover:bg-gray-50/20"
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? (
                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.829a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 7a3 3 0 110 6 3 3 0 010-6zm-4.22 7.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.829a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.64 7.64a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm0 5.656a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM3.464 3.464a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414L3.464 4.878a1 1 0 010-1.414zm9.172 9.172a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm0-5.656a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM3 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-50" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>
                <Link to='/login'><button className="text-gray-950 hover:text-gray-50 hover:bg-transparent border-2 border-gray-50 cursor-pointer px-7 max-sm:py-2 max-sm:px-5 max-sm:text-xs py-3 rounded-lg bg-gray-50 font-bold transition duration-300 hover:shadow-md shadow-[#80808058]">Login</button></Link>
            </div>
        </div>
    )
}

export default Topbar