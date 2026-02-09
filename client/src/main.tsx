import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { DarkModeProvider } from "./utils/DarkModeContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Dispense from "./pages/Dispense";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import BillPayments from "./pages/BillPayments";
import StockManagement from "./pages/StockManagement";
import MedicalSupplies from "./pages/MedicalSupplies";
import Lost from "./pages/Lost";
import SignUp from "./pages/SignUp";
import Billing from "./pages/Billing";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import Workflows from "./pages/Workflows";
import Pricing from "./pages/Pricing";
import Employees from "./pages/Employees";
import SalesDistribution from "./pages/SalesDistribution";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/dispense",
		element: <Dispense />,
	},
	{
		path: "/inventory",
		element: <Inventory />,
	},
	{
		path: "/reports",
		element: <Reports />,
	},
	{
		path: "/settings",
		element: <Settings />,
	},
	{
		path: "/admin-login",
		element: <AdminLogin />,
	},
	{
		path: "/admin",
		element: <AdminDashboard />,
	},
	{
		path: "/billpayments",
		element: <BillPayments />,
	},
	{
		path: "/stock",
		element: <StockManagement />,
	},
	{
		path: "/supplies",
		element: <MedicalSupplies />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/onboarding",
		element: <Onboarding />,
	},
	{
		path: "/workflows",
		element: <Workflows />,
	},
	{
		path: "/pricing",
		element: <Pricing />,
	},
	{
		path: "/billing",
		element: <Billing />,
	},
	{
		path: "/admin/employees",
		element: <Employees />,
	},
	{
		path: "/sales",
		element: <SalesDistribution />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/reset-password",
		element: <ResetPassword />,
	},
	{
		path: "/privacy",
		element: <PrivacyPolicy />,
	},
	{
		path: "/terms",
		element: <TermsOfService />,
	},
	{
		path: "*",
		element: <Lost />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<DarkModeProvider>
			<RouterProvider router={router} />
		</DarkModeProvider>
	</StrictMode>,
);
