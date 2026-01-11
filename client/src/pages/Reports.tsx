import { useEffect, useState } from "react"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import CreateReportModal from "../components/CreateReportModal"
import ReportItem from "../components/reports/ReportItem"

const Reports = ()=>{
    const [showModal, setShowModal] = useState(false)

    function handleOpen(){
        setShowModal(true)
    }

    function handleClose(){
        setShowModal(false)
    }

    function handleSubmit(data: any){
        // placeholder: wire to API or store
        console.log('Report submitted', data)
        setShowModal(false)
    }

    function handleSaveDraft(data: any){
        console.log('Draft saved', data)
        setShowModal(false)
    }

    const dummyReports = [
        {
            id: 'r1',
            title: 'Clinical intervention: dose adjustment',
            type: 'Clinical Intervention',
            patient: 'John Doe (P-001)',
            prescriber: 'Dr. Ada',
            date: '2025-11-08 09:12',
            status: 'Submitted',
            excerpt: 'Identified potential supratherapeutic dosing for patient with renal impairment. Adjusted dose and informed prescriber.'
        },
        {
            id: 'r2',
            title: 'Shift handover: pending lab results',
            type: 'Shift Handover Note',
            patient: '',
            prescriber: '',
            date: '2025-11-07 18:45',
            status: 'Draft',
            excerpt: 'Pending INR results for two patients; monitor and follow up with prescriber if INR > 4.0.'
        }
    ]
    useEffect(()=>{document.title = 'Reports | Dispensar'})
    return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                <div className="flex items-center justify-between p-4 max-sm:p-0">
                    <h2 className="text-lg font-semibold text-gray-800">Reports</h2>
                    <button onClick={handleOpen} className="bg-green-600 text-white max-sm:text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                        <i className="bx bx-plus"></i>
                        <span>Create Report</span>
                    </button>
                </div>

                {/* reports list */}
                <div className="p-4 max-sm:p-0 max-sm:mt-2">
                    {dummyReports.map(r => (
                        <ReportItem key={r.id} title={r.title} type={r.type} patient={r.patient} prescriber={r.prescriber} date={r.date} status={r.status as any} excerpt={r.excerpt} />
                    ))}
                </div>
            </div>
        </div>

        {showModal && (
            <CreateReportModal onClose={handleClose} onSubmit={handleSubmit} onSaveDraft={handleSaveDraft} />
        )}

        </>
    )
}


export default Reports