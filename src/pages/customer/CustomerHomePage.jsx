import { Box } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import ProductPage from "../ProductPage";

const CustomerHomePage = () => {
  return (
    <Box className="">
      <Sidebar />

      <Box className="" sx={{ display: "flex", flexDirection: "column" }}>
        <Topbar />
        <Box
          sx={{
            marginTop: "90px",
            paddingLeft: { md: "280px", xs: "10px" },
            paddingRight: { md: "40px", xs: "10px" },
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/product/:pageNo" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerHomePage;
