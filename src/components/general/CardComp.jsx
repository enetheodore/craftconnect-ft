import React from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Card, Paper } from "@mui/material";

const CardComp = ({ children ,className =''}) => {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`card_comp ${isDarkMode? "dark_card":"dark_light"} ${className}`}>
      {children}
    </div>
    
     
  );
};

export default CardComp;
