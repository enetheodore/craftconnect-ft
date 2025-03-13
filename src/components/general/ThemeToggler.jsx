import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext'
import { Button, IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
const ThemeToggler = () => {
    const { isDarkMode, toggleTheme } = useThemeContext()
  return (
    <div>
     <IconButton onClick={()=>toggleTheme()}>
        {
            isDarkMode ?<Brightness7Icon />:<DarkModeIcon />
        }
     </IconButton>
    
    </div>
  )
}

export default ThemeToggler
