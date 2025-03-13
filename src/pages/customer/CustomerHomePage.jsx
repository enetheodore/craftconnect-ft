import { Badge, Box, Button, colors, useTheme } from "@mui/material";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import ProductPage from "../ProductPage";
import { Home, Shop2Outlined } from "@mui/icons-material";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import ListOfProducts from "../../components/product/ListOfProducts";
import ExploreProducts from "../../components/home/ExploreProducts";
import { useCart } from "../../context/CartContext";
import CartList from "../../components/home/CartList";

const CustomerHomePage = () => {
  const theme = useTheme();
  const {
    cart,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
    totalItems,
  } = useCart();

  return (
    <BrowserRouter>
      <Box className="">
        <Sidebar>
          <Box
            sx={{
              position: "fixed",
              borderRight: `${
                theme.palette.mode == "light"
                  ? " 1px solid rgb(214, 216, 218)"
                  : " 1px solid rgb(50, 54, 58)"
              }`,
              width: "240px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              zIndex: "1000",
              backgroundColor: theme.palette.background.default,
            }}
          >
            {/* <h1 className="text_lg text_bold">
                {" "}
                <img src={logo} width={50} height={50} alt="" />{" "}
              </h1> */}
          </Box>
          <Box className="" sx={{ paddingTop: "80px", paddingInline: "10px" }}>
            <Link to="/">
              <Button
                sx={{
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  textAlign: "start",
                  color: colors.red[500],
                  display: "flex",
                  justifyContent: "start",
                  padding: "10px",
                  gap: "20px",
                }}
                className="w_full"
              >
                <Home /> <span className="title_sm">Home</span>
              </Button>
            </Link>
            <Button
              sx={{
                textAlign: "start",
                color: colors.grey[500],
                display: "flex",
                justifyContent: "start",
                padding: "10px",
                gap: "20px",
              }}
              className="w_full"
            >
              <Shop2Outlined /> <span className="title_sm">Product</span>
            </Button>
            <Button
              sx={{
                textAlign: "start",
                color: colors.grey[500],
                display: "flex",
                justifyContent: "start",
                padding: "10px",
                gap: "20px",
              }}
              className="w_full"
            >
              <ShoppingBag /> <span className="title_sm">Orders</span>
            </Button>
          </Box>
        </Sidebar>

        <Box className="" sx={{ display: "flex", flexDirection: "column" }}>
          <Topbar
            role="Customer"
            navItem={
              <>
                <Link to="/cart">
                  <Badge badgeContent={totalItems} color="primary">
                    <ShoppingCart />
                  </Badge>
                </Link>
              </>
            }
          />
          <Box
            sx={{
              marginTop: "90px",
              paddingLeft: { md: "280px", xs: "10px" },
              paddingRight: { md: "40px", xs: "10px" },
            }}
          >
            <Routes>
              <Route path="/" element={<ExploreProducts />} />
              <Route path="/cart" element={<CartList />} />

              <Route path="/product/:pageNo" element={<ProductPage />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default CustomerHomePage;
