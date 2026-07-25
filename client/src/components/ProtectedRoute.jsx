import React from 'react'
import { useAdminAuth } from '../context/AdminAuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAdminLoggedIn } = useAdminAuth()

  // Admin.jsx itself renders the login screen when not authenticated,
  // so we simply pass children through and let the page handle auth state.
  return children
}

export default ProtectedRoute