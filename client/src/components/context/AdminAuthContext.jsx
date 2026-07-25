import React, { createContext, useContext, useState, useCallback } from 'react'

const AdminAuthContext = createContext(undefined)

const ADMIN_PASSWORD = 'admin123'
const SESSION_KEY = 'eis_admin_logged_in'

export const AdminAuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === 'true'
    } catch {
      return false
    }
  })
  const [loginError, setLoginError] = useState('')

  const login = useCallback((password) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true)
      setLoginError('')
      try {
        sessionStorage.setItem(SESSION_KEY, 'true')
      } catch {
        // ignore storage errors
      }
      return true
    }
    setLoginError('Incorrect password. Please try again.')
    return false
  }, [])

  const logout = useCallback(() => {
    setIsAdminLoggedIn(false)
    try {
      sessionStorage.removeItem(SESSION_KEY)
    } catch {
      // ignore storage errors
    }
  }, [])

  const value = {
    isAdminLoggedIn,
    login,
    logout,
    loginError,
  }

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext)
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider')
  }
  return context
}

export default AdminAuthContext