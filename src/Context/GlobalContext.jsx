"use client"
import React, { createContext, useState } from 'react'

const GlobalContext = createContext()


export const GlobalProvider = ({children}) => {
    const [showSocials, setShowSocials] = useState(false);

  return (
		<GlobalContext.Provider value={{showSocials }}>{children}</GlobalContext.Provider>
	);
}

export default GlobalContext
 