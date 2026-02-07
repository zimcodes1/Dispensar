import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/useDarkMode";

function PrivacyPolicy() {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };

	useEffect(() => {
		document.title = "Privacy Policy | Dispensar";
	}, []);

	const Section = ({
		title,
		children,
	}: {
		title: string;
		children: React.ReactNode;
	}) => (
		<div className="mb-8">
			<h2
				className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
			>
				{title}
			</h2>
			<div
				className={`space-y-4 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
			>
				{children}
			</div>
		</div>
	);

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
					<Link to="/">
						<button
							className={`text-sm font-medium ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
						>
							<i className="bx bx-arrow-back mr-2"></i>Back to Home
						</button>
					</Link>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-4xl mx-auto px-6 py-16">
				<h1
					className={`text-4xl max-sm:text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
				>
					Privacy Policy
				</h1>
				<p className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
					Last updated: January 2026
				</p>

				<div
					className={`p-6 rounded-xl mb-8 ${isDarkMode ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
				>
					<p className={`${isDarkMode ? "text-green-300" : "text-green-800"}`}>
						<i className="bx bx-shield-check text-xl mr-2"></i>
						<strong>HIPAA Compliant:</strong> Dispensar is fully compliant with
						HIPAA regulations and takes data privacy seriously.
					</p>
				</div>

				<Section title="1. Information We Collect">
					<p>
						We collect information that you provide directly to us, including:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Account information (name, email, pharmacy details)</li>
						<li>
							Patient information (as required for prescription management)
						</li>
						<li>Inventory and transaction data</li>
						<li>Usage data and analytics</li>
						<li>
							Payment information (processed securely through third-party
							providers)
						</li>
					</ul>
				</Section>

				<Section title="2. How We Use Your Information">
					<p>We use the information we collect to:</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Provide, maintain, and improve our services</li>
						<li>Process transactions and send related information</li>
						<li>Send technical notices and support messages</li>
						<li>Respond to your comments and questions</li>
						<li>Comply with legal obligations and regulations</li>
						<li>Protect against fraudulent or illegal activity</li>
					</ul>
				</Section>

				<Section title="3. Data Security">
					<p>
						We implement industry-standard security measures to protect your
						data:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>End-to-end encryption for data in transit and at rest</li>
						<li>Regular security audits and penetration testing</li>
						<li>Role-based access control</li>
						<li>Secure cloud infrastructure with automatic backups</li>
						<li>HIPAA-compliant data handling procedures</li>
					</ul>
				</Section>

				<Section title="4. Data Sharing and Disclosure">
					<p>
						We do not sell your personal information. We may share your
						information only in the following circumstances:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>With your consent or at your direction</li>
						<li>With service providers who assist in our operations</li>
						<li>To comply with legal obligations</li>
						<li>To protect rights, property, or safety</li>
						<li>In connection with a merger or acquisition (with notice)</li>
					</ul>
				</Section>

				<Section title="5. Your Rights">
					<p>You have the right to:</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Access your personal information</li>
						<li>Correct inaccurate data</li>
						<li>Request deletion of your data</li>
						<li>Export your data</li>
						<li>Opt-out of marketing communications</li>
						<li>Lodge a complaint with a supervisory authority</li>
					</ul>
				</Section>

				<Section title="6. Data Retention">
					<p>
						We retain your information for as long as necessary to provide our
						services and comply with legal obligations. When you cancel your
						account, we retain your data for 30 days before permanent deletion,
						unless required by law to retain it longer.
					</p>
				</Section>

				<Section title="7. Children's Privacy">
					<p>
						Our services are not directed to individuals under 18. We do not
						knowingly collect personal information from children.
					</p>
				</Section>

				<Section title="8. Changes to This Policy">
					<p>
						We may update this privacy policy from time to time. We will notify
						you of any changes by posting the new policy on this page and
						updating the "Last updated" date.
					</p>
				</Section>

				<Section title="9. Contact Us">
					<p>
						If you have questions about this privacy policy, please contact us:
					</p>
					<ul className="list-none space-y-2 mt-4">
						<li>
							<i className="bx bx-envelope mr-2"></i>Email:
							privacy@dispensar.com
						</li>
						<li>
							<i className="bx bx-phone mr-2"></i>Phone: +1 (555) 123-4567
						</li>
						<li>
							<i className="bx bx-map mr-2"></i>Address: 123 Healthcare Ave,
							Medical District, CA 90210
						</li>
					</ul>
				</Section>

				<div
					className={`mt-12 p-6 rounded-xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
				>
					<p
						className={`text-center ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
					>
						By using Dispensar, you agree to this Privacy Policy and our{" "}
						<Link to="/terms" className="text-green-500 hover:underline">
							Terms of Service
						</Link>
						.
					</p>
				</div>
			</div>

			{/* Footer */}
			<div
				className={`py-8 px-6 text-center border-t ${isDarkMode ? "bg-gray-950 text-gray-400 border-gray-800" : "bg-gray-900 text-gray-400 border-gray-800"}`}
			>
				<p className="text-sm">
					© 2026 Dispensar by Rizon Labs. Built for the modern pharmacy.
				</p>
			</div>
		</div>
	);
}

export default PrivacyPolicy;
