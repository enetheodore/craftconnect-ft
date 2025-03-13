
import "./App.css";
import {
  
  CircularProgress,
  
} from "@mui/material";

import { I18nextProvider, useTranslation } from "react-i18next";
import { ThemeContextProvider} from "./contexts/ThemeContext";
import { useAuthContext } from "./contexts/AuthContext";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ArtisanHomePage from "./pages/artisan/ArtisanHomePage";
import CustomerHomePage from "./pages/customer/CustomerHomePage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import HomePage from "./pages/home/HomePage";
import { ToastContainer } from 'react-toastify';
import CartProvider from "./context/CartContext";


const queryClient = new QueryClient();
function App() {
  const { authUser, isLoading } = useAuthContext();
  const {  i18n } = useTranslation();

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
        return <p>Access Denied</p>; 
    }
  };
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ThemeContextProvider>
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <CartProvider>
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
            </CartProvider>
            <ToastContainer />
          </QueryClientProvider>
        </ThemeContextProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
