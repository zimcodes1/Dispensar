import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/useDarkMode";
import Footer from "../components/Footer";

function TermsOfService() {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };

	useEffect(() => {
		document.title = "Terms of Service | Dispensar";
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
					Terms of Service
				</h1>
				<p className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
					Last updated: January 2026
				</p>

				<div
					className={`p-6 rounded-xl mb-8 ${isDarkMode ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
				>
					<p className={`${isDarkMode ? "text-blue-300" : "text-blue-800"}`}>
						<i className="bx bx-info-circle text-xl mr-2"></i>
						Please read these terms carefully before using Dispensar.
					</p>
				</div>

				<Section title="1. Acceptance of Terms">
					<p>
						By accessing or using Dispensar, you agree to be bound by these
						Terms of Service and all applicable laws and regulations. If you do
						not agree with any of these terms, you are prohibited from using
						this service.
					</p>
				</Section>

				<Section title="2. Description of Service">
					<p>
						Dispensar provides a cloud-based pharmacy management system that
						includes:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Inventory management and tracking</li>
						<li>Prescription processing and dispensing</li>
						<li>Billing and payment processing</li>
						<li>Reporting and analytics</li>
						<li>Compliance and security features</li>
					</ul>
				</Section>

				<Section title="3. User Accounts">
					<p>To use Dispensar, you must:</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Provide accurate and complete registration information</li>
						<li>Maintain the security of your account credentials</li>
						<li>Be at least 18 years old</li>
						<li>Have the authority to bind your pharmacy to these terms</li>
						<li>Notify us immediately of any unauthorized access</li>
					</ul>
					<p className="mt-4">
						You are responsible for all activities that occur under your
						account.
					</p>
				</Section>

				<Section title="4. Subscription and Payment">
					<p>Dispensar offers various subscription plans:</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Subscriptions are billed monthly or annually in advance</li>
						<li>All fees are non-refundable except as required by law</li>
						<li>We may change pricing with 30 days notice</li>
						<li>You can cancel your subscription at any time</li>
						<li>
							Upon cancellation, access continues until the end of the billing
							period
						</li>
					</ul>
				</Section>

				<Section title="5. Acceptable Use">
					<p>You agree not to:</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Use the service for any illegal purpose</li>
						<li>Violate any healthcare regulations or laws</li>
						<li>Attempt to gain unauthorized access to the system</li>
						<li>Interfere with or disrupt the service</li>
						<li>Share your account with unauthorized users</li>
						<li>Reverse engineer or copy any part of the service</li>
						<li>Use the service to transmit malware or harmful code</li>
					</ul>
				</Section>

				<Section title="6. Data Ownership and Privacy">
					<p>You retain all rights to your data. We:</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Do not own your pharmacy or patient data</li>
						<li>Will not sell your data to third parties</li>
						<li>Use your data only to provide and improve our services</li>
						<li>Comply with HIPAA and other applicable regulations</li>
						<li>Provide data export capabilities</li>
					</ul>
					<p className="mt-4">
						See our{" "}
						<Link to="/privacy" className="text-green-500 hover:underline">
							Privacy Policy
						</Link>{" "}
						for more details.
					</p>
				</Section>

				<Section title="7. Service Availability">
					<p>
						We strive to provide 99.9% uptime, but we do not guarantee
						uninterrupted service. We are not liable for:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Scheduled maintenance downtime</li>
						<li>Service interruptions beyond our control</li>
						<li>Third-party service failures</li>
						<li>Internet connectivity issues</li>
					</ul>
				</Section>

				<Section title="8. Intellectual Property">
					<p>
						All content, features, and functionality of Dispensar are owned by
						Rizon Labs and protected by copyright, trademark, and other
						intellectual property laws. You may not:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Copy, modify, or distribute our software</li>
						<li>Use our trademarks without permission</li>
						<li>Create derivative works</li>
						<li>Remove any proprietary notices</li>
					</ul>
				</Section>

				<Section title="9. Limitation of Liability">
					<p>
						To the maximum extent permitted by law, Dispensar and Rizon Labs
						shall not be liable for:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Indirect, incidental, or consequential damages</li>
						<li>Loss of profits, data, or business opportunities</li>
						<li>Damages exceeding the amount paid in the last 12 months</li>
						<li>Issues arising from your misuse of the service</li>
					</ul>
				</Section>

				<Section title="10. Indemnification">
					<p>
						You agree to indemnify and hold harmless Dispensar and Rizon Labs
						from any claims, damages, or expenses arising from:
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Your use of the service</li>
						<li>Your violation of these terms</li>
						<li>Your violation of any laws or regulations</li>
						<li>Your infringement of third-party rights</li>
					</ul>
				</Section>

				<Section title="11. Termination">
					<p>We may terminate or suspend your account immediately if you:</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Violate these terms</li>
						<li>Fail to pay subscription fees</li>
						<li>Engage in fraudulent activity</li>
						<li>Pose a security risk</li>
					</ul>
					<p className="mt-4">
						Upon termination, you have 30 days to export your data before it is
						permanently deleted.
					</p>
				</Section>

				<Section title="12. Changes to Terms">
					<p>
						We reserve the right to modify these terms at any time. We will
						notify you of significant changes via email or through the service.
						Continued use after changes constitutes acceptance of the new terms.
					</p>
				</Section>

				<Section title="13. Governing Law">
					<p>
						These terms are governed by the laws of the State of California,
						United States, without regard to conflict of law provisions. Any
						disputes shall be resolved in the courts of California.
					</p>
				</Section>

				<Section title="14. Contact Information">
					<p>For questions about these terms, contact us:</p>
					<ul className="list-none space-y-2 mt-4">
						<li>
							<i className="bx bx-envelope mr-2"></i>Email: legal@dispensar.com
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
						By using Dispensar, you acknowledge that you have read and agree to
						these Terms of Service and our{" "}
						<Link to="/privacy" className="text-green-500 hover:underline">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default TermsOfService;
