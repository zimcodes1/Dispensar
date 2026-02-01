import { useDarkMode } from "../../utils/useDarkMode"

interface ReportItemProps {
  title: string
  type: string
  patient?: string
  prescriber?: string
  date?: string
  status?: 'Draft' | 'Submitted' | 'Closed'
  excerpt?: string
}

export default function ReportItem({ title, type, patient, prescriber, date, status = 'Submitted', excerpt }: ReportItemProps){
  const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
  
  return (
    <div className={`border rounded-lg p-4 shadow-sm w-full mb-4 transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex max-sm:flex-col justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className={`text-md max-sm:text-sm font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
            <span className={`text-xs px-2 py-1 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-100 text-gray-700'
            }`}>{type}</span>
          </div>
          <p className={`text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{excerpt}</p>
          <div className={`flex text-xs gap-4 mt-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            {patient && <span>Patient: <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{patient}</span></span>}
            {prescriber && <span>Prescriber: <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{prescriber}</span></span>}
          </div>
        </div>

        <div className="flex flex-col items-end ml-4 max-sm:ml-0 max-sm:items-start mt-2 max-sm:mt-4">
          <div className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{date}</div>
          <div className={`mt-2 text-xs px-2 py-1 rounded-md transition-colors duration-300 ${
            status==='Draft'? isDarkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800' 
            : status==='Submitted'? isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800' 
            : isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'
          }`}>
            {status}
          </div>
          <div className="mt-3 flex gap-2">
            <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition-colors duration-300">View</button>
            <button className={`px-3 py-1 rounded-md text-sm transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
