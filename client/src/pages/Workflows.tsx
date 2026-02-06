import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../utils/useDarkMode";
import WorkflowStep from "../components/workflows/WorkflowStep";
import FeatureCard from "../components/workflows/FeatureCard";

function Workflows() {
  const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };

  useEffect(() => {
    document.title = "Workflows | Dispensar";
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
            <span className={`text-xl font-bold text-green-500`}>
              Dispensar
            </span>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-5xl max-sm:text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Choose Your Perfect Workflow
          </h1>
          <p
            className={`text-xl max-sm:text-base max-w-3xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Dispensar adapts to your pharmacy's unique operational structure.
            Select the workflow that matches your team size and business needs.
          </p>
        </motion.div>

        {/* Workflow 1: Single Worker */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-20 p-8 rounded-2xl border ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
              <i className="bx bx-user text-3xl text-white"></i>
            </div>
            <div>
              <h2
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Single Worker Workflow
              </h2>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Perfect for solo pharmacists or small operations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h3
                className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                How It Works
              </h3>
              <div className="space-y-4">
                <WorkflowStep
                  icon="bx bx-receipt"
                  title="Billing"
                  description="Create bill and add medications to the transaction"
                  stepNumber={1}
                  color="bg-blue-500"
                />
                <div className="h-8" />
                <WorkflowStep
                  icon="bx bx-money"
                  title="Payment Processing"
                  description="Collect payment and generate receipt"
                  stepNumber={2}
                  color="bg-blue-500"
                />
                <div className="h-8" />
                <WorkflowStep
                  icon="bx bx-package"
                  title="Dispensing"
                  description="Package and hand over medications to customer"
                  stepNumber={3}
                  color="bg-blue-500"
                  isLast
                />
              </div>
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Key Benefits
              </h3>
              <div className="grid gap-4">
                <FeatureCard
                  icon="bx bx-trending-up"
                  title="Maximum Efficiency"
                  description="No handoffs between staff means faster service and reduced wait times"
                  index={0}
                />
                <FeatureCard
                  icon="bx bx-shield"
                  title="Complete Control"
                  description="One person oversees the entire transaction from start to finish"
                  index={1}
                />
                <FeatureCard
                  icon="bx bx-dollar-circle"
                  title="Cost Effective"
                  description="Ideal for small pharmacies with limited staff resources"
                  index={2}
                />
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${isDarkMode ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
          >
            <p
              className={`text-sm ${isDarkMode ? "text-blue-300" : "text-blue-800"}`}
            >
              <i className="bx bx-info-circle mr-2"></i>
              <strong>Best for:</strong> Solo pharmacists, small neighborhood
              pharmacies, or low-traffic operations
            </p>
          </div>
        </motion.div>

        {/* Workflow 2: Three-Role Linear */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-20 p-8 rounded-2xl border-2 ${
            isDarkMode
              ? "bg-gray-800 border-green-500"
              : "gradient-to-br from-green-50 to-white border-green-400"
          }`}
        >
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
              <i className="bx bx-group text-3xl text-white"></i>
            </div>
            <div>
              <h2
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Billing → Payment → Dispense
              </h2>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Three specialized roles for optimal workflow
              </p>
            </div>
            <span className="ml-auto max-sm:mx-auto px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full">
              RECOMMENDED
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h3
                className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                How It Works
              </h3>
              <div className="space-y-4">
                <WorkflowStep
                  icon="bx bx-receipt"
                  title="Billing Clerk"
                  description="Creates bill, verifies prescriptions, and adds items to queue"
                  stepNumber={1}
                  color="bg-green-500"
                />
                <div className="h-8" />
                <WorkflowStep
                  icon="bx bx-money"
                  title="Payment Processor"
                  description="Collects payment, processes transactions, and generates receipt"
                  stepNumber={2}
                  color="bg-green-500"
                />
                <div className="h-8" />
                <WorkflowStep
                  icon="bx bx-package"
                  title="Dispenser"
                  description="Retrieves medications, packages them, and hands over to customer"
                  stepNumber={3}
                  color="bg-green-500"
                  isLast
                />
              </div>
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Key Benefits
              </h3>
              <div className="grid gap-4">
                <FeatureCard
                  icon="bx bx-check-double"
                  title="Enhanced Accuracy"
                  description="Multiple checkpoints reduce errors and improve medication safety"
                  index={0}
                />
                <FeatureCard
                  icon="bx bx-line-chart"
                  title="Higher Throughput"
                  description="Parallel processing allows handling more customers simultaneously"
                  index={1}
                />
                <FeatureCard
                  icon="bx bx-user-check"
                  title="Clear Accountability"
                  description="Each role has specific responsibilities with full audit trails"
                  index={2}
                />
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${isDarkMode ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
          >
            <p
              className={`text-sm ${isDarkMode ? "text-green-300" : "text-green-800"}`}
            >
              <i className="bx bx-info-circle mr-2"></i>
              <strong>Best for:</strong> Medium to large pharmacies,
              high-traffic locations, or operations prioritizing accuracy and
              compliance
            </p>
          </div>
        </motion.div>

        {/* Workflow 3: Dual Role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-20 p-8 rounded-2xl border ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center">
              <i className="bx bx-user-plus text-3xl text-white"></i>
            </div>
            <div>
              <h2
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Billing → Payment with Dual Roles
              </h2>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Flexible workflow for small teams
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h3
                className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                How It Works
              </h3>
              <div className="space-y-4">
                <WorkflowStep
                  icon="bx bx-receipt"
                  title="Billing & Payment"
                  description="One staff member handles both billing and payment collection"
                  stepNumber={1}
                  color="bg-purple-500"
                />
                <div className="h-8" />
                <WorkflowStep
                  icon="bx bx-package"
                  title="Dispensing"
                  description="Either the biller or a dedicated dispenser packages medications"
                  stepNumber={2}
                  color="bg-purple-500"
                  isLast
                />
              </div>

              <div
                className={`mt-6 p-4 rounded-lg ${isDarkMode ? "bg-purple-900/20 border border-purple-800" : "bg-purple-50 border border-purple-200"}`}
              >
                <p
                  className={`text-sm ${isDarkMode ? "text-purple-300" : "text-purple-800"}`}
                >
                  <i className="bx bx-shuffle mr-2"></i>
                  <strong>Flexible Assignment:</strong> The person who bills and
                  collects payment can also dispense, or a separate dispenser
                  can handle it
                </p>
              </div>
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Key Benefits
              </h3>
              <div className="grid gap-4">
                <FeatureCard
                  icon="bx bx-shuffle"
                  title="Maximum Flexibility"
                  description="Staff can switch roles based on workload and availability"
                  index={0}
                />
                <FeatureCard
                  icon="bx bx-group"
                  title="Balanced Workload"
                  description="Distributes tasks efficiently between two team members"
                  index={1}
                />
                <FeatureCard
                  icon="bx bx-wallet"
                  title="Cost-Effective Staffing"
                  description="Requires fewer staff while maintaining service quality"
                  index={2}
                />
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${isDarkMode ? "bg-purple-900/20 border border-purple-800" : "bg-purple-50 border border-purple-200"}`}
          >
            <p
              className={`text-sm ${isDarkMode ? "text-purple-300" : "text-purple-800"}`}
            >
              <i className="bx bx-info-circle mr-2"></i>
              <strong>Best for:</strong> Small to medium pharmacies with 2-3
              staff members, or operations needing flexible role assignments
            </p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Quick Comparison
          </h2>
          <div
            className={`overflow-x-auto rounded-xl border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <table className="w-full min-w-[600px]">
              <thead className={isDarkMode ? "bg-gray-800" : "bg-gray-100"}>
                <tr>
                  <th
                    className={`p-4 text-left ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Feature
                  </th>
                  <th
                    className={`p-4 text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Single Worker
                  </th>
                  <th
                    className={`p-4 text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Three-Role
                  </th>
                  <th
                    className={`p-4 text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Dual Role
                  </th>
                </tr>
              </thead>
              <tbody className={isDarkMode ? "bg-gray-800/50" : "bg-white"}>
                <tr
                  className={
                    isDarkMode
                      ? "border-t border-gray-700"
                      : "border-t border-gray-200"
                  }
                >
                  <td
                    className={`p-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Staff Required
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    1
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    3
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    2
                  </td>
                </tr>
                <tr
                  className={
                    isDarkMode
                      ? "border-t border-gray-700"
                      : "border-t border-gray-200"
                  }
                >
                  <td
                    className={`p-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Processing Speed
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Fast
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Very Fast
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Moderate
                  </td>
                </tr>
                <tr
                  className={
                    isDarkMode
                      ? "border-t border-gray-700"
                      : "border-t border-gray-200"
                  }
                >
                  <td
                    className={`p-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Error Checking
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Basic
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Excellent
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Good
                  </td>
                </tr>
                <tr
                  className={
                    isDarkMode
                      ? "border-t border-gray-700"
                      : "border-t border-gray-200"
                  }
                >
                  <td
                    className={`p-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Flexibility
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Low
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Low
                  </td>
                  <td
                    className={`p-4 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    High
                  </td>
                </tr>
                <tr
                  className={
                    isDarkMode
                      ? "border-t border-gray-700"
                      : "border-t border-gray-200"
                  }
                >
                  <td
                    className={`p-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Best For
                  </td>
                  <td
                    className={`p-4 text-center text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Small shops
                  </td>
                  <td
                    className={`p-4 text-center text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Busy pharmacies
                  </td>
                  <td
                    className={`p-4 text-center text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Growing teams
                  </td>
                </tr>
              </tbody>
            </table>
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
            Ready to Get Started?
          </h2>
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Choose your workflow and start streamlining your pharmacy operations
            today. You can always switch workflows later as your needs change.
          </p>
          <div className="flex gap-4 justify-center max-sm:flex-col">
            <Link to="/signup">
              <button className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-bold shadow-lg">
                Start Free Trial
              </button>
            </Link>
            <Link to="/">
              <button
                className={`px-8 py-4 rounded-lg border-2 font-bold transition ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Workflows;
