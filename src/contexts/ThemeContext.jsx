import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../utilities/theme";
import { CssBaseline } from "@mui/material";

 const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('thememode')));

  const toggleTheme = () => {
    if(isDarkMode){
      localStorage.setItem('thememode', false)

    }else{
      localStorage.setItem('thememode', true)

    }
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;
// useEffect(()=>{
//   let mode =  localStorage.getItem('thememode');
//   setIsDarkMode(mode)
//   console.log(mode,'mode')
// },[])
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
