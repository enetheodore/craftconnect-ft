import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
// Light Theme
export const lightTheme = createTheme({
    typography:{
        fontFamily:[
            "Plus Jakarta Sans", 'serif'
        ].join(',')
    },
  palette: {
    mode: "light",
    primary: {
      main: colors.red[500], // Default red
    },
    background: {
      default: "#f4f6f8", // Light background
      paper: "#FFFFFF", // Light paper color
    },
    text: {
      primary: "#000000", // Dark text
      secondary: "#555555", // Secondary text
    },
  },

});

// Dark Theme
export const darkTheme = createTheme({
    typography:{
        fontFamily:[
            "Plus Jakarta Sans", 'serif'
        ].join(',')
    },
  palette: {
    mode: "dark",
    primary: {
      main: colors.red[500], // Same red as in light theme
    },
    background: {
      default: "#151a20", // Dark background
      paper: "#1C252", // Dark paper color
    },
    text: {
      primary: "#ffffff", // Light text
      secondary: "#aaaaaa", // Secondary text
    },
  },


});
