"use client"
import React, { createContext, useState } from 'react'

const GlobalContext = createContext()


export const GlobalProvider = ({children}) => {
      const [scrolled, setScrolled] = useState(false);


  return (
		<GlobalContext.Provider value={{scrolled, setScrolled }}>{children}</GlobalContext.Provider>
	);
}

export default GlobalContext
 