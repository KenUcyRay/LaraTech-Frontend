import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../../features/auth/Login'
import Dashboard from '../../features/dashboard/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])