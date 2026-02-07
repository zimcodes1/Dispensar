import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/useDarkMode";

function ForgotPassword() {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		document.title = "Forgot Password | Dispensar";
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Password reset requested for:", email);
		setSubmitted(true);
	};

	return (
		<div
			className={`w-full min-h-dvh flex justify-center items-center ${isDarkMode ? "gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "gradient-to-br from-slate-900 via-emerald-900 to-slate-900"}`}
		>
			<div
				className={`flex w-[400px] min-h-[450px] rounded-3xl shadow-2xl flex-col max-sm:w-full max-sm:min-h-[80dvh] max-sm:rounded-none max-sm:absolute max-sm:bottom-0 max-sm:rounded-t-3xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white"}`}
			>
				<div className="flex flex-col justify-center items-center w-full pt-10 max-sm:pt-20">
					<img src="/images/logo.png" alt="Logo" className="w-20" />
					<h1
						className={`text-2xl font-bold mt-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}
					>
						Forgot Password?
					</h1>
					<p
						className={`mt-2 text-center px-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
					>
						{submitted
							? "Check your email for reset instructions"
							: "Enter your email to reset your password"}
					</p>
				</div>

				{submitted ? (
					<div className="flex flex-col w-full px-10 mt-8">
						<div
							className={`p-4 rounded-lg mb-6 ${isDarkMode ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
						>
							<div className="flex items-center gap-3">
								<i className="bx bx-check-circle text-2xl text-green-500"></i>
								<div>
									<p
										className={`font-semibold ${isDarkMode ? "text-green-300" : "text-green-800"}`}
									>
										Email Sent!
									</p>
									<p
										className={`text-sm ${isDarkMode ? "text-green-400" : "text-green-700"}`}
									>
										We've sent password reset instructions to {email}
									</p>
								</div>
							</div>
						</div>

						<div
							className={`p-4 rounded-lg mb-6 ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
						>
							<p
								className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
							>
								<i className="bx bx-info-circle mr-2"></i>
								Didn't receive the email? Check your spam folder or try again.
							</p>
						</div>

						<button
							onClick={() => setSubmitted(false)}
							className={`font-semibold transition-all duration-300 p-3 rounded-lg mb-4 ${
								isDarkMode
									? "bg-gray-700 text-white hover:bg-gray-600 border border-gray-600"
									: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
							}`}
						>
							Try Another Email
						</button>
					</div>
				) : (
					<form
						className="flex flex-col w-full px-10 mt-8"
						onSubmit={handleSubmit}
					>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email Address"
							required
							className={`p-3 rounded-lg mb-6 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
								isDarkMode
									? "bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
									: "bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500"
							}`}
						/>
						<button
							type="submit"
							className="font-semibold transition-all duration-300 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 shadow-md hover:shadow-lg"
						>
							Send Reset Link <i className="bx bx-send ml-2"></i>
						</button>
					</form>
				)}

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

export default ForgotPassword;
