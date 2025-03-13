import React, { useState } from "react";
import TabComp from "../components/ui/TabComp";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { ButtonComp } from "../components/ui/ButtonComp";
import DialogComp from "../components/ui/DialogComp";
import InputComp from "../components/ui/InputComp";

const ProductPage = () => {
  const theme = useTheme();
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name, value) => {
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    console.log("Form Data:", formData);
    setAuthUser(formData);
    // navigate('/')
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: "5px",
        }}
      >
        <Typography variant="h5" sx={{ padding: "10px", fontWeight: "bold" }}>
          Products
        </Typography>
        <DialogComp
          title="Create New Product"
          triger={
            <ButtonComp handleClick={() => setOpenCreateProduct(true)}>
              + New Product
            </ButtonComp>
          }
          content={
            <Box sx={{ padding: "10px", maxWidth: { sm: "500px" } }}>
              <InputComp
                type="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Username"
                sx={{ paddingBottom: "10px" }}
              />
              <InputComp
                type="password"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                sx={{ paddingBottom: "10px" }}
              />
            </Box>
          }
          open={openCreateProduct}
          setOpen={setOpenCreateProduct}
          action={
            <Box>
              <ButtonComp>Update</ButtonComp>
            </Box>
          }
        />
      </Box>
      <Paper
        sx={{
          borderRadius: "10px",
          backgroundColor: theme.palette.mode == "dark" ? "#1C252E" : "",
        }}
      >
        <TabComp />
      </Paper>
    </Box>
  );
};

export default ProductPage;
