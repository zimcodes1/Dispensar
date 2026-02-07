import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../utils/useDarkMode";

function ResetPassword() {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		password: "",
		confirmPassword: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		document.title = "Reset Password | Dispensar";
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (formData.password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}

		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		console.log("Password reset successful");
		navigate("/login");
	};

	return (
		<div
			className={`w-full min-h-dvh flex justify-center items-center ${isDarkMode ? "gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "gradient-to-br from-slate-900 via-emerald-900 to-slate-900"}`}
		>
			<div
				className={`flex w-[400px] min-h-[500px] rounded-3xl shadow-2xl flex-col max-sm:w-full max-sm:min-h-[80dvh] max-sm:rounded-none max-sm:absolute max-sm:bottom-0 max-sm:rounded-t-3xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white"}`}
			>
				<div className="flex flex-col justify-center items-center w-full pt-10 max-sm:pt-20">
					<img src="/images/logo.png" alt="Logo" className="w-20" />
					<h1
						className={`text-2xl font-bold mt-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}
					>
						Reset Password
					</h1>
					<p
						className={`mt-2 text-center px-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
					>
						Enter your new password
					</p>
				</div>

				<form
					className="flex flex-col w-full px-10 mt-8"
					onSubmit={handleSubmit}
				>
					{error && (
						<div
							className={`p-3 rounded-lg mb-4 ${isDarkMode ? "bg-red-900/20 border border-red-800" : "bg-red-50 border border-red-200"}`}
						>
							<p
								className={`text-sm ${isDarkMode ? "text-red-300" : "text-red-800"}`}
							>
								<i className="bx bx-error-circle mr-2"></i>
								{error}
							</p>
						</div>
					)}

					<div className="relative mb-4">
						<input
							type={showPassword ? "text" : "password"}
							value={formData.password}
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
							placeholder="New Password"
							required
							className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
								isDarkMode
									? "bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
									: "bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500"
							}`}
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
						>
							<i
								className={`bx ${showPassword ? "bx-hide" : "bx-show"} text-xl`}
							></i>
						</button>
					</div>

					<input
						type={showPassword ? "text" : "password"}
						value={formData.confirmPassword}
						onChange={(e) =>
							setFormData({ ...formData, confirmPassword: e.target.value })
						}
						placeholder="Confirm New Password"
						required
						className={`p-3 rounded-lg mb-4 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
							isDarkMode
								? "bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
								: "bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500"
						}`}
					/>

					<div
						className={`p-3 rounded-lg mb-6 ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
					>
						<p
							className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
						>
							<i className="bx bx-info-circle mr-1"></i>
							Password must be at least 8 characters long
						</p>
					</div>

					<button
						type="submit"
						className="font-semibold transition-all duration-300 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 shadow-md hover:shadow-lg"
					>
						Reset Password <i className="bx bx-check ml-2"></i>
					</button>
				</form>

				<div className="flex justify-center items-center w-full py-3 mt-4">
					<p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
						Remember your password?{" "}
						<Link
							to="/login"
							className="text-green-400 hover:text-green-500 hover:underline font-medium"
						>
							Log in here
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ResetPassword;
