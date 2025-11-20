import React from 'react'
import { AppContext } from './context'

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const contextValue = {
        theme: 'light', 
        language: 'es',
        isLoggedIn: false
    };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

