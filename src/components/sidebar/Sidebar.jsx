import React from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import logo from "../../assets/logo_bg_transparent.png";
import { ButtonComp } from "../ui/ButtonComp";
import {
  Box,
  Button,
  colors,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CarCrash, Home, Person } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
const Sidebar = ({ children }) => {
  const { isDarkMode } = useThemeContext();
  const drawerWidth = 240;
  const theme = useTheme();
  console.log(theme);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // <div className={`sidebar  pl_small  ${isDarkMode == true ? "sidebar_dark" : ""}`}>
    //   <div className={` sidebar_top  ${isDarkMode ? "bg_dark sidebar_top_dark" : "bg_light"}`}>
    //    <h1 className="text_lg text_bold"> <img src={logo} width={50} height={50} alt="" /> </h1>
    //   </div>

    // </div>

    <>
      {!isSmallScreen && (
        <Box sx={{ display: "flex" }}>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                background: theme.palette.background.default,
                boxSizing: "border-box",
                overflowY: "hidden", // Hide the scrollbar by default
                "&:hover": {
                  overflowY: "auto", // Show scrollbar on hover
                  scrollbarWidth: "thin", // For Firefox
                  "&::-webkit-scrollbar": {
                    width: "8px", // Custom width for WebKit
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888", // Color of the scrollbar thumb
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555", // Color when hovering over thumb
                  },
                },
              },
            }}
          >
            {children}
          </Drawer>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
