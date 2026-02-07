import { motion } from "framer-motion";
import { useDarkMode } from "../../utils/useDarkMode";

interface ContactInfoCardProps {
	icon: string;
	title: string;
	info: string;
	link?: string;
	index: number;
}

function ContactInfoCard({
	icon,
	title,
	info,
	link,
	index,
}: ContactInfoCardProps) {
	const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };

	const content = (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			whileHover={{ y: -5 }}
			className={`p-6 rounded-xl border text-center ${
				isDarkMode
					? "bg-gray-800 border-gray-700 hover:border-green-500"
					: "bg-white border-gray-200 hover:border-green-400"
			} transition-all duration-300`}
		>
			<div
				className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
					isDarkMode ? "bg-green-500/20" : "bg-green-100"
				}`}
			>
				<i className={`${icon} text-2xl text-green-500`}></i>
			</div>
			<h3
				className={`font-bold text-lg mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
			>
				{title}
			</h3>
			<p
				className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
			>
				{info}
			</p>
		</motion.div>
	);

	if (link) {
		return (
			<a href={link} target="_blank" rel="noopener noreferrer">
				{content}
			</a>
		);
	}

	return content;
}

export default ContactInfoCard;
