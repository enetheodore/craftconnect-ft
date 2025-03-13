import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Button,
  CssBaseline,
  ThemeProvider,
  MenuItem,
  Select,
  CircularProgress,
  Box,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { darkTheme, lightTheme } from "./utilities/theme";
import { I18nextProvider, useTranslation } from "react-i18next";
import { ThemeContextProvider, useThemeContext } from "./contexts/ThemeContext";
import ThemeToggler from "./components/general/ThemeToggler";
import LanguageSelector from "./components/general/LanguageSelector";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardContent from "./components/DashboardContent/DashboardContent";
import Login from "./pages/login/Login";
import { useAuthContext } from "./contexts/AuthContext";
import ProductPage from "./pages/ProductPage";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ArtisanHomePage from "./pages/artisan/ArtisanHomePage";
import CustomerHomePage from "./pages/customer/CustomerHomePage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import HomePage from "./pages/home/HomePage";
import { ToastContainer, toast } from 'react-toastify';

const queryClient = new QueryClient();
function App() {
  const { authUser, isLoading } = useAuthContext();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    console.log("changein language");
    i18n.changeLanguage(lng);
  };

  const DashboardPage = () => {
    console.log(authUser)
    switch (authUser.role) {
      case 'artisan':
        return <ArtisanHomePage />;
      case 'customer':
        return <CustomerHomePage />;
      case 'admin':
        return <AdminHomePage />;
      default:
        return <p>Access Denied</p>; // Optional default case
    }
  };
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ThemeContextProvider>
          <QueryClientProvider client={queryClient} contextSharing={true}>
            {authUser ? (
              <DashboardPage />
            ) : (
              <>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {/* <Topbar/>  */}
                    <HomePage />
                  </div>
                )}
              </>
            )}
            <ToastContainer />
          </QueryClientProvider>
        </ThemeContextProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
