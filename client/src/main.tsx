import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Dispense from './pages/Dispense'
import Inventory from './pages/Inventory'
import Settings from './pages/Settings'
import Reports from './pages/Reports'
import AdminLogin from './pages/AdminLogin'



const router = createBrowserRouter([
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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
