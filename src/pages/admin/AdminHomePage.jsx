import ArtisnaDashboard from "../../components/artisan/ArtisnaDashboard";
import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import ProductPage from "../ProductPage";
import AdminDashboard from "../../components/admin/AdminDashboard";

const AdminHomePage = () => {
  return (
    <Box className="">
    <Sidebar />

    <Box
      className=""
      sx={{ display: "flex", flexDirection: "column" }}
    >
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
            <Route path="/" element={<AdminDashboard />} />
            <Route
              path="/product/:pageNo"
              element={<ProductPage />}
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  </Box>
  )
}

export default AdminHomePage
