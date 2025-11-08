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
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full mb-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-md font-semibold text-gray-800">{title}</h3>
            <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{type}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{excerpt}</p>
          <div className="flex text-xs text-gray-500 gap-4 mt-3">
            {patient && <span>Patient: <span className="text-gray-700">{patient}</span></span>}
            {prescriber && <span>Prescriber: <span className="text-gray-700">{prescriber}</span></span>}
          </div>
        </div>

        <div className="flex flex-col items-end ml-4">
          <div className="text-xs text-gray-500">{date}</div>
          <div className={`mt-2 text-xs px-2 py-1 rounded-md ${status==='Draft'? 'bg-yellow-100 text-yellow-800' : status==='Submitted'? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </div>
          <div className="mt-3 flex gap-2">
            <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">View</button>
            <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-200">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
