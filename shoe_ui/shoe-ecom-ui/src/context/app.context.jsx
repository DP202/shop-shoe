import { createContext, useState } from 'react'
import { getAccessTokenLocalStorage } from '../ultils/auth.js'

const initialAppContext = {
  isAuthenticated: Boolean(getAccessTokenLocalStorage()),
  setIsAuthenticated: () => null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated)

  return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AppContext.Provider>
}
