import { useDarkMode } from "../../utils/useDarkMode"

function Topbar(){
    const { isDarkMode, toggleDarkMode } = useDarkMode() as { isDarkMode: boolean, toggleDarkMode: () => void }

    return(
        <div className={`flex w-full h-[60px] max-sm:h-[50px] max-sm:pl-12 px-5 items-center justify-between fixed top-0 z-50 border-b transition-colors duration-300 ${
            isDarkMode 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-white border-gray-300'
        }`}>
             <div className="flex justify-center items-center">
                <img src="/images/logo.png" alt="Logo" className="w-10 h-10"/>
                <h1 className={`text-2xl max-sm:text-lg font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Dispensar</h1>
             </div>
             <h2 className={`text-xl font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
            }`}></h2>
             <div className="flex w-auto h-full justify-between items-center gap-4 max-sm:gap-0">
                <button 
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-lg transition duration-300 ${
                        isDarkMode 
                            ? 'hover:bg-gray-800' 
                            : 'hover:bg-gray-100'
                    }`}
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? (
                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.829a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 7a3 3 0 110 6 3 3 0 010-6zm-4.22 7.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.829a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.64 7.64a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm0 5.656a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM3.464 3.464a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414L3.464 4.878a1 1 0 010-1.414zm9.172 9.172a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm0-5.656a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM3 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>
                <p className={`text-md mx-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                }`}>User</p>
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden cursor-pointer">
                    <img src="/images/defaultUser.jpg" alt="User" />
                </div>
             </div>
        </div>
    )
}

export default Topbar