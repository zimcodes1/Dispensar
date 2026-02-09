import { useEffect, useState } from "react";
import Topbar from "../components/dashboard/Topbar";
import SideNav from "../components/SideNav";
import DrugDetails from "../components/dispense/DrugDetails";
import DrugSearch from "../components/DrugSearch";
import BillingHistoryModal from "../components/billing/BillingHistoryModal";
import { useDarkMode } from "../utils/useDarkMode";

function Billing() {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };
	const [showHistory, setShowHistory] = useState(false);

	const billingHistory = [
		{
			id: "BL-2024-001",
			items: 3,
			total: 8500,
			date: "15/01/2025",
			time: "10:30 AM",
			paymentMethod: "Cash"
		},
		{
			id: "BL-2024-002",
			items: 2,
			total: 5200,
			date: "15/01/2025",
			time: "11:15 AM",
			paymentMethod: "Card"
		},
		{
			id: "BL-2024-003",
			items: 5,
			total: 12300,
			date: "15/01/2025",
			time: "02:45 PM",
			paymentMethod: "Transfer"
		}
	];
	useEffect(() => {
		document.title = "Billing | Dispensar";
	});
	return (
		<>
			{/*--------Topbar Component--------*/}
			<Topbar></Topbar>
			{/*-----------Side Nav & Main Contents Container-----------*/}
			<div
				className={`flex w-full min-h-screen pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0 transition-colors duration-300 ${
					isDarkMode ? "bg-gray-950" : "bg-gray-100"
				}`}
			>
				{/*----------Side navigation-----*/}
				<div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
					<SideNav></SideNav>
				</div>
				{/*--------Main Contents-----------*/}
				<div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-fit flex-col max-[767px]:px-2 md:px-4">
					<h1
						className={`text-2xl max-sm:text-lg font-semibold text-center mt-5 max-sm:mt-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
					>
						Billing
					</h1>
					<DrugSearch></DrugSearch>
					{/*---------Selected Drugs' details will appear here--------- */}
					<DrugDetails 
						name="Paracetamol 500mg"
						category="Pain Reliever"
						manufacturer="HealthPharma"
						stock={150}
						formulation="Tablet"
						expiryDate="07/03/2026"
						price={2500}
						onRemove={() => console.log('Remove Paracetamol')}
					/>
					<DrugDetails 
						name="Amoxicillin 250mg"
						category="Antibiotic"
						manufacturer="MediCare Labs"
						stock={75}
						formulation="Capsule"
						expiryDate="12/08/2025"
						price={1800}
						image="/images/drug_test.png"
						onRemove={() => console.log('Remove Amoxicillin')}
					/>
					<button className="w-50 mx-auto my-10 bg-green-600 max-sm:w-[40%] text-gray-900 font-semibold py-2 px-5 rounded-lg mt-5 hover:bg-gray-900 hover:text-[#5fdf85] transition duration-500">
						Bill <i className="bx bx-right-arrow-alt"></i>
					</button>
				</div>
			</div>

			{/* Fixed History Button */}
			<button
				onClick={() => setShowHistory(true)}
				className="fixed bottom-6 max-sm:bottom-2 right-6 max-sm:right-2 bg-gray-900 text-[#5fdf85] px-4 py-3 rounded-full max-sm:rounded-xl shadow-lg hover:bg-green-600 hover:text-gray-900 transition duration-500 flex items-center gap-2"
			>
				<i className="bx bx-history text-xl"></i>
				<span className="max-sm:hidden">History</span>
			</button>

			{/* History Modal */}
			{showHistory && <BillingHistoryModal bills={billingHistory} onClose={() => setShowHistory(false)} />}
		</>
	);
}

export default Billing;
