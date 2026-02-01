import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { DarkModeProvider } from './context/DarkModeContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Dispense from './pages/Dispense'
import Inventory from './pages/Inventory'
import Settings from './pages/Settings'
import Reports from './pages/Reports'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import BillPayments from './pages/BillPayments'
import StockManagement from './pages/StockManagement'
import MedicalSupplies from './pages/MedicalSupplies'
import Lost from './pages/Lost'
import SignUp from './pages/SignUp'
import Billing from './pages/Billing'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/dispense',
    element: <Dispense/>
  },
  {
    path: '/inventory',
    element: <Inventory/>
  },
  {
    path: '/reports',
    element: <Reports/>
  },
  {
    path: '/settings',
    element: <Settings/>
  },
  {
    path: '/adminlogin',
    element: <AdminLogin/>
  },
  {
    path: '/admin',
    element: <AdminDashboard/>
  },
  {
    path: '/billpayments',
    element: <BillPayments/>
  },
  {
    path: '/stock',
    element: <StockManagement/>
  },
  {
    path: '/supplies',
    element: <MedicalSupplies/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/onboarding',
    element: <Onboarding/>
  },
  {
    path: '/billing',
    element: <Billing/>
  },
  {
    path: '*',
    element: <Lost/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>,
)
