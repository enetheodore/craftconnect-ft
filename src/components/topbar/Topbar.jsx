import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggler from "../general/ThemeToggler";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Avatar, useTheme } from "@mui/material";
import { Logout, Notifications, Settings } from "@mui/icons-material";
import LanguageSelector from "../general/LanguageSelector";
import { useAuthContext } from "../../contexts/AuthContext";

const Topbar = ({ role, navItem }) => {
  const { isDarkMode } = useThemeContext();
  const theme = useTheme();
  const { logout } = useAuthContext();
  return (
    // <Box >
    //   <AppBar  sx={{
    //         boxShadow: 'none', // Remove shadow
    //         borderBottom: 'none', // Remove bottom border

    //       }} >
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <Box
      className={``}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "30px",
        position: "fixed",
        width: "100%",
        backgroundColor: theme.palette.background.default,
        zIndex: "1000",
      }}
    >
      <Box className="">Hello</Box>
      <Box>{role}</Box>
      {navItem}

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LanguageSelector />
        <Notifications />
        <ThemeToggler />
        <Settings />
        <IconButton onClick={() => logout()}>
          <Logout />
        </IconButton>
        <Avatar />
      </Box>
    </Box>
  );
};

export default Topbar;
