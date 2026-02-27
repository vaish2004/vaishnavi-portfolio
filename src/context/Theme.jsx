import React, { Children, createContext, useContext, useState } from 'react'
import { ThemeProvider } from './ThemeContext';

const ThemeContext=createContext()

const Theme = ({Children}) => {
    const[dark1,setDark1]=useState(true);
    const theme={
        dark1,
        bg
    }

    const toggleTheme= () => setDark1((prev) => (!prev))
  return (
    <ThemeProvider.Provider value={{theme,toggleTheme}}>
        {Children}
    </ThemeProvider.Provider>
  )
}

export default Theme

export function useTheme(){
    return useContext(ThemeContext);
}
