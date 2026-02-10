import { useState } from "react";
import { useDarkMode } from "../../utils/useDarkMode";

interface DrugItem {
	id: string;
	name: string;
	quantity: number;
	pricePerUnit: number;
	totalPrice: number;
}

interface BillDetailsModalProps {
	onClose: () => void;
	dispenseCode: string;
	employeeName: string;
	timestamp: string;
	items: DrugItem[];
	status: "pending" | "completed" | "cancelled";
}

export default function BillDetailsModal({
	onClose,
	dispenseCode,
	employeeName,
	timestamp,
	items,
	status,
}: BillDetailsModalProps) {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };
	const [paymentMethod, setPaymentMethod] = useState<string>("");
	const [error, setError] = useState<string>("");
	const total = items.reduce((sum, item) => sum + item.totalPrice, 0);

	const handleProcessPayment = () => {
		if (!paymentMethod) {
			setError("Please select a payment method");
			return;
		}
		setError("");
		console.log("Processing payment via:", paymentMethod);
		// Process payment logic here
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
			<div
				className={`w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
			>
				{/* Modal Header */}
				<div
					className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
				>
					<div>
						<h3
							className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
						>
							Bill Details
						</h3>
						<p
							className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
						>
							Dispense Code:{" "}
							<span className="font-mono font-medium">{dispenseCode}</span>
						</p>
					</div>
					<button
						onClick={onClose}
						className={`${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-900"}`}
					>
						<i className="bx bx-x text-2xl"></i>
					</button>
				</div>

				{/* Bill Info */}
				<div
					className={`px-6 py-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
				>
					<div className="flex justify-between items-center">
						<div className="space-y-1">
							<p
								className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
							>
								Employee:{" "}
								<span className={isDarkMode ? "text-white" : "text-gray-900"}>
									{employeeName}
								</span>
							</p>
							<p
								className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
							>
								Time:{" "}
								<span className={isDarkMode ? "text-white" : "text-gray-900"}>
									{timestamp}
								</span>
							</p>
						</div>
						<span
							className={`px-3 py-1 rounded-full text-sm ${
								status === "completed"
									? isDarkMode
										? "bg-green-900/30 text-green-300"
										: "bg-green-100 text-green-800"
									: status === "cancelled"
										? isDarkMode
											? "bg-red-900/30 text-red-300"
											: "bg-red-100 text-red-800"
										: isDarkMode
											? "bg-yellow-900/30 text-yellow-300"
											: "bg-yellow-100 text-yellow-800"
							}`}
						>
							{status.charAt(0).toUpperCase() + status.slice(1)}
						</span>
					</div>
				</div>

				{/* Items List */}
				<div className="flex-1 overflow-y-auto table-scroll">
					<div className="px-6 py-4 overflow-x-auto table-scroll">
						<table className="w-full min-w-[500px]">
							<thead>
								<tr
									className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
								>
									<th className="pb-3 text-left">Drug Name</th>
									<th className="pb-3 text-center">Quantity</th>
									<th className="pb-3 text-right">Price/Unit</th>
									<th className="pb-3 text-right">Total</th>
								</tr>
							</thead>
							<tbody
								className={`divide-y ${isDarkMode ? "divide-gray-700" : "divide-gray-100"}`}
							>
								{items.map((item) => (
									<tr key={item.id} className="text-sm">
										<td
											className={`py-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
										>
											{item.name}
										</td>
										<td
											className={`py-3 text-center ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
										>
											{item.quantity}
										</td>
										<td
											className={`py-3 text-right ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
										>
											₦{item.pricePerUnit.toLocaleString()}
										</td>
										<td
											className={`py-3 text-right ${isDarkMode ? "text-white" : "text-gray-900"}`}
										>
											₦{item.totalPrice.toLocaleString()}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Footer with Total */}
				<div
					className={`px-6 py-4 border-t shrink-0 ${isDarkMode ? "border-gray-700 bg-gray-700" : "border-gray-200 bg-gray-50"}`}
				>
					{/* Payment Method Selection */}
					<div className="mb-4">
						<label
							className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
						>
							Payment Method*
						</label>
						<div className="flex gap-3">
							{["Cash", "POS Transfer", "Bank Transfer"].map((method) => (
								<button
									key={method}
									type="button"
									onClick={() => {
										setPaymentMethod(method);
										setError("");
									}}
									className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition ${
										paymentMethod === method
											? "bg-green-600 text-white"
											: isDarkMode
												? "bg-gray-800 text-gray-300 hover:bg-gray-600 border border-gray-600"
												: "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
									}`}
								>
									{method}
								</button>
							))}
						</div>
						{error && (
							<p className="text-red-500 text-sm mt-2 flex items-center gap-1">
								<i className="bx bx-error-circle"></i>
								{error}
							</p>
						)}
					</div>

					<div className="flex justify-between items-center mb-4">
						<div className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
							Total Items:{" "}
							<span
								className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
							>
								{items.length}
							</span>
						</div>
						<div
							className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
						>
							Total: ₦{total.toLocaleString()}
						</div>
					</div>
					<div className="flex justify-end gap-3">
						<button
							onClick={onClose}
							className={`px-4 py-2 text-sm rounded-lg ${isDarkMode ? "text-gray-200 bg-gray-500 hover:text-gray-200" : "text-gray-600 bg-gray-300 hover:text-gray-900"}`}
						>
							Close
						</button>
						<button
							onClick={handleProcessPayment}
							className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
						>
							Process Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
