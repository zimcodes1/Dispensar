import React, { useEffect, useState } from 'react'

type ReportType = 'Clinical Intervention' | 'Dispensing Error / Near-Miss' | 'Shift Handover Note' | ''

interface CreateReportModalProps {
  onClose?: () => void
  onSubmit?: (data: any) => void
  onSaveDraft?: (data: any) => void
  initialData?: Partial<any>
}

const problemOptions = [
  'Therapeutic duplication',
  'Allergy / ADR',
  'Dose omission',
  'Drug interaction',
  'Other',
]

const errorTypes = ['Wrong drug', 'Wrong dose', 'Wrong route', 'Wrong patient', 'Near miss']

export default function CreateReportModal({ onClose, onSubmit, onSaveDraft, initialData = {} }: CreateReportModalProps){
  const [reportType, setReportType] = useState<ReportType>(initialData.reportType ?? '')
  const [patient, setPatient] = useState<string>(initialData.patient ?? '')
  const [prescriber, setPrescriber] = useState<string>(initialData.prescriber ?? '')

  // Clinical Intervention fields
  const [problemIdentified, setProblemIdentified] = useState<string>(initialData.problemIdentified ?? '')
  const [actionTaken, setActionTaken] = useState<string>(initialData.actionTaken ?? '')

  // Dispensing Error / Near-Miss fields
  const [errorType, setErrorType] = useState<string>(initialData.errorType ?? '')
  const [severity, setSeverity] = useState<'low'|'moderate'|'high'|''>(initialData.severity ?? '')

  // Shift Handover Note
  const [handoverNotes, setHandoverNotes] = useState<string>(initialData.handoverNotes ?? '')

  useEffect(()=>{
    // when report type changes, clear irrelevant fields to avoid stale data
    setProblemIdentified(prev => reportType === 'Clinical Intervention' ? prev : '')
    setActionTaken(prev => reportType === 'Clinical Intervention' ? prev : '')
    setErrorType(prev => reportType === 'Dispensing Error / Near-Miss' ? prev : '')
    setSeverity(prev => reportType === 'Dispensing Error / Near-Miss' ? prev : '')
    setHandoverNotes(prev => reportType === 'Shift Handover Note' ? prev : '')
  }, [reportType])

  function gatherData(){
    return {
      reportType,
      patient,
      prescriber,
      problemIdentified,
      actionTaken,
      errorType,
      severity,
      handoverNotes,
      createdAt: new Date().toISOString(),
    }
  }

  function handleSubmit(e?: React.FormEvent){
    e?.preventDefault()
    const data = gatherData()
    if(onSubmit) onSubmit(data)
    else console.log('Submit report:', data)
  }

  function handleSaveDraft(e?: React.MouseEvent){
    e?.preventDefault()
    const data = gatherData()
    if(onSaveDraft) onSaveDraft(data)
    else console.log('Save draft:', data)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Create New Report</h3>
          <button onClick={onClose} aria-label="Close" className="text-gray-600 hover:text-gray-900">
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        {/* body */}
        <form className="px-6 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {/* Standard fields */}
            <div className="flex flex-col">
              <label className="text-xs text-gray-600 mb-1">Patient</label>
              <input value={patient} onChange={e=>setPatient(e.target.value)} placeholder="Search or enter patient name / ID" className="h-10 p-2 border border-gray-300 rounded-md bg-white text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-gray-600 mb-1">Prescriber</label>
              <input value={prescriber} onChange={e=>setPrescriber(e.target.value)} placeholder="Prescriber name or ID" className="h-10 p-2 border border-gray-300 rounded-md bg-white text-sm" />
            </div>

            {/* Main selector */}
            <div className="flex flex-col">
              <label className="text-xs text-gray-600 mb-1">Report Type</label>
              <select value={reportType} onChange={e=>setReportType(e.target.value as ReportType)} className="h-10 p-2 border border-gray-300 rounded-md bg-white text-sm">
                <option value="">Select report type</option>
                <option value="Clinical Intervention">Clinical Intervention</option>
                <option value="Dispensing Error / Near-Miss">Dispensing Error / Near-Miss</option>
                <option value="Shift Handover Note">Shift Handover Note</option>
              </select>
            </div>

            {/* Conditional fields */}
            {reportType === 'Clinical Intervention' && (
              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Problem Identified</label>
                  <select value={problemIdentified} onChange={e=>setProblemIdentified(e.target.value)} className="h-10 p-2 border border-gray-300 rounded-md bg-white text-sm">
                    <option value="">Select problem</option>
                    {problemOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Action Taken</label>
                  <textarea value={actionTaken} onChange={e=>setActionTaken(e.target.value)} rows={4} placeholder="Describe the action taken" className="p-2 border border-gray-300 rounded-md bg-white text-sm" />
                </div>
              </div>
            )}

            {reportType === 'Dispensing Error / Near-Miss' && (
              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Error Type</label>
                  <select value={errorType} onChange={e=>setErrorType(e.target.value)} className="h-10 p-2 border border-gray-300 rounded-md bg-white text-sm">
                    <option value="">Select error type</option>
                    {errorTypes.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Severity</label>
                  <div className="flex items-center gap-4 text-sm">
                    <label className="inline-flex items-center"><input type="radio" name="severity" value="low" checked={severity==='low'} onChange={e=>setSeverity('low')} className="mr-2" />Low</label>
                    <label className="inline-flex items-center"><input type="radio" name="severity" value="moderate" checked={severity==='moderate'} onChange={e=>setSeverity('moderate')} className="mr-2" />Moderate</label>
                    <label className="inline-flex items-center"><input type="radio" name="severity" value="high" checked={severity==='high'} onChange={e=>setSeverity('high')} className="mr-2" />High</label>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'Shift Handover Note' && (
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">Pending Tasks and Observations</label>
                <textarea value={handoverNotes} onChange={e=>setHandoverNotes(e.target.value)} rows={6} placeholder="List pending tasks, observations, and any important notes for the incoming shift" className="p-2 border border-gray-300 rounded-md bg-white text-sm" />
              </div>
            )}
          </div>

          {/* footer */}
          <div className="mt-6 border-t border-gray-100 pt-4 flex justify-end gap-3">
            <button type="button" onClick={handleSaveDraft} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition">Save as Draft</button>
            <button type="submit" className="bg-[#5fdf85] text-gray-900 px-4 py-2 rounded-md hover:bg-green-700 hover:text-white transition ">Submit Report</button>
          </div>
        </form>
      </div>
    </div>
  )
}
