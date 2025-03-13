import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import DialogComp from "../ui/DialogComp";
import { ButtonComp } from "../ui/ButtonComp";
import InputComp from "../ui/InputComp";
import { useMutation } from "@tanstack/react-query";
import { createCatagory, createProduct } from "../../utilities/makeApiRequest";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthContext";
import SelectCatagory from "./SelectCatagory";
import UploadImage from "../ui/UploadImage";

const CreateProduct = () => {
    const [imageUrl,setImageUrl] = useState("")
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const { authUser } = useAuthContext();
  const [catagoryId,setCatagoryId] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    artisanId: authUser._id,
    inventoryCount: 0,
  });

  const handleChange = (name, value) => {
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  /**
   * Handle form submission
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.categoryId = catagoryId
    formData.images =[imageUrl]
    console.log("catagory id", catagoryId);
    mutation.mutate(formData);
    // localStorage.setItem("user", JSON.stringify(formData));
    // console.log("Form Data:", formData);
    // setAuthUser(formData);
    // navigate('/')
  };

  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      //   localStorage.setItem("user", JSON.stringify(data.user));
      //   setAuthUser(data.user);
      //   navigate("/");
      setOpenCreateProduct(false);
      toast("Category created successfully!");
    },
    onError: (error) => {
      // Handle error (e.g., show error message)
      console.log("Login failed:", error);
    },
  });
  return (
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
          <UploadImage imageTitle="Upload Product Image" setImageUrl={setImageUrl} imageUrl={imageUrl} />
            <InputComp
              type="title"
              name="title"
              label="title"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Title"
              sx={{ paddingBottom: "10px" }}
            />
            <InputComp
              type="text"
              name="description"
              label="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              sx={{ paddingBottom: "10px" }}
            />

            <InputComp
              type="number"
              name="price"
              label="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter description"
              sx={{ paddingBottom: "10px" }}
            />
            <InputComp
              type="number"
              name="inventoryCount"
              label="inventoryCount"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Enventory Count"
              sx={{ paddingBottom: "10px" }}
            />
            <SelectCatagory setCatagoryId={setCatagoryId} catagoryId={catagoryId} />
          </Box>
        }
        open={openCreateProduct}
        setOpen={setOpenCreateProduct}
        action={
          <Box>
            {mutation.isPending ? (
              <CircularProgress />
            ) : (
              <ButtonComp handleClick={handleSubmit}>Create</ButtonComp>
            )}
            {mutation.error && <h1>{mutation.error.message}</h1>}
          </Box>
        }
      />
    </Box>
  );
};

export default CreateProduct;
