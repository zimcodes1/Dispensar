import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'



const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
