import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../utils/useDarkMode";
import PricingCard from "../components/pricing/PricingCard";
import { faqs } from "../utils/faqList";
import { plans, planTableEnteries } from "../utils/plansList";
import FAQItem from "../components/pricing/FAQItem";
import Footer from "../components/Footer";

function Pricing() {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };
	const [isAnnual, setIsAnnual] = useState(false);

	useEffect(() => {
		document.title = "Pricing | Dispensar";
	}, []);

	return (
		<div
			className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
		>
			{/* Header */}
			<div
				className={`${isDarkMode ? "bg-gray-800 border-b border-gray-700" : "bg-white border-b border-gray-200"}`}
			>
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<Link to="/" className="flex items-center gap-3">
						<img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
						<span
							className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
						>
							<span className="text-green-500">Dispensar</span>
						</span>
					</Link>
					<div className="flex items-center gap-4">
						<Link to="/signup">
							<button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold">
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Hero Section */}
			<div className="max-w-7xl mx-auto px-6 py-16">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h1
						className={`text-5xl max-sm:text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
					>
						Simple, Transparent Pricing
					</h1>
					<p
						className={`text-xl max-sm:text-base max-w-3xl mx-auto mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
					>
						Choose the plan that fits your pharmacy. No hidden fees, cancel
						anytime.
					</p>

					{/* Billing Toggle */}
					<div className="flex items-center justify-center gap-4 mb-4">
						<span
							className={`text-sm font-medium ${!isAnnual ? "text-green-500" : isDarkMode ? "text-gray-400" : "text-gray-600"}`}
						>
							Monthly
						</span>
						<button
							onClick={() => setIsAnnual(!isAnnual)}
							className={`relative w-14 h-7 rounded-full transition-colors ${
								isAnnual
									? "bg-green-500"
									: isDarkMode
										? "bg-gray-700"
										: "bg-gray-300"
							}`}
						>
							<motion.div
								animate={{ x: isAnnual ? 28 : 2 }}
								transition={{ type: "spring", stiffness: 500, damping: 30 }}
								className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
							/>
						</button>
						<span
							className={`text-sm font-medium ${isAnnual ? "text-green-500" : isDarkMode ? "text-gray-400" : "text-gray-600"}`}
						>
							Annual
						</span>
						{isAnnual && (
							<motion.span
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full"
							>
								Save 17%
							</motion.span>
						)}
					</div>
				</motion.div>

				{/* Pricing Cards */}
				<div className="grid md:grid-cols-3 gap-8 mb-20">
					{plans.map((plan, index) => (
						<PricingCard
							key={plan.name}
							name={plan.name}
							price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
							period={isAnnual ? "year" : "month"}
							description={plan.description}
							features={plan.features}
							isPopular={plan.isPopular}
							ctaText={plan.ctaText}
							ctaLink={plan.ctaLink}
							index={index}
						/>
					))}
				</div>

				{/* Feature Comparison Table */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-20"
				>
					<h2
						className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}
					>
						Compare Plans
					</h2>
					<div
						className={`overflow-x-auto rounded-xl border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
					>
						<table className="w-full min-w-[700px]">
							<thead className={isDarkMode ? "bg-gray-800" : "bg-gray-100"}>
								<tr>
									<th
										className={`p-4 text-left ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
									>
										Features
									</th>
									<th
										className={`p-4 text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
									>
										Free
									</th>
									<th
										className={`p-4 text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
									>
										Standard
									</th>
									<th
										className={`p-4 text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
									>
										Enterprise
									</th>
								</tr>
							</thead>
							<tbody className={isDarkMode ? "bg-gray-800/50" : "bg-white"}>
								{planTableEnteries.map((row, i) => (
									<tr
										key={i}
										className={
											isDarkMode
												? "border-t border-gray-700"
												: "border-t border-gray-200"
										}
									>
										<td
											className={`p-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
										>
											{row.feature}
										</td>
										<td
											className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
										>
											{row.free}
										</td>
										<td
											className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
										>
											{row.standard}
										</td>
										<td
											className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
										>
											{row.enterprise}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</motion.div>

				{/* Trust Badges */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className={`p-8 rounded-2xl mb-20 ${
						isDarkMode
							? "bg-gray-800 border border-gray-700"
							: "bg-white border border-gray-200"
					}`}
				>
					<div className="grid md:grid-cols-4 gap-8 text-center">
						<div>
							<i className="bx bx-shield-check text-4xl text-green-500 mb-3"></i>
							<h4
								className={`font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
							>
								HIPAA Compliant
							</h4>
							<p
								className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
							>
								Full compliance with healthcare regulations
							</p>
						</div>
						<div>
							<i className="bx bx-lock-alt text-4xl text-green-500 mb-3"></i>
							<h4
								className={`font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
							>
								Secure & Encrypted
							</h4>
							<p
								className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
							>
								Bank-level encryption for all data
							</p>
						</div>
						<div>
							<i className="bx bx-time text-4xl text-green-500 mb-3"></i>
							<h4
								className={`font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
							>
								99.9% Uptime
							</h4>
							<p
								className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
							>
								Reliable service you can count on
							</p>
						</div>
						<div>
							<i className="bx bx-support text-4xl text-green-500 mb-3"></i>
							<h4
								className={`font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
							>
								24/7 Support
							</h4>
							<p
								className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
							>
								Help whenever you need it
							</p>
						</div>
					</div>
				</motion.div>

				{/* FAQ Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-20"
				>
					<h2
						className={`text-3xl font-bold text-center mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
					>
						Frequently Asked Questions
					</h2>
					<p
						className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
					>
						Have questions? We've got answers. Can't find what you're looking
						for? Contact our support team.
					</p>
					<div className="max-w-3xl mx-auto space-y-4">
						{faqs.map((faq, index) => (
							<FAQItem
								key={index}
								question={faq.question}
								answer={faq.answer}
								index={index}
							/>
						))}
					</div>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className={`p-12 rounded-2xl text-center ${
						isDarkMode
							? "gradient-to-br from-green-900/30 to-gray-800 border border-green-800"
							: "gradient-to-br from-green-50 to-white border border-green-200"
					}`}
				>
					<h2
						className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
					>
						Ready to Transform Your Pharmacy?
					</h2>
					<p
						className={`text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
					>
						Start your 14-day free trial today. No credit card required.
					</p>
					<div className="flex gap-4 justify-center max-sm:flex-col">
						<Link to="/signup">
							<button className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-bold shadow-lg">
								Start Free Trial
							</button>
						</Link>
						<Link to="/contact">
							<button
								className={`px-8 py-4 rounded-lg border-2 font-bold transition ${
									isDarkMode
										? "border-gray-600 text-gray-300 hover:bg-gray-800"
										: "border-gray-300 text-gray-700 hover:bg-gray-50"
								}`}
							>
								Contact Sales
							</button>
						</Link>
					</div>
				</motion.div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Pricing;
