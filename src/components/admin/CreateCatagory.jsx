import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import DialogComp from "../ui/DialogComp";
import { ButtonComp } from "../ui/ButtonComp";
import InputComp from "../ui/InputComp";
import { useMutation } from "@tanstack/react-query";
import { createCatagory } from "../../utilities/makeApiRequest";
import { toast } from "react-toastify";

const CreateCatagory = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
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
    console.log("shkdjfhahfhdjkf",formData)
    mutation.mutate(formData);
    // localStorage.setItem("user", JSON.stringify(formData));
    // console.log("Form Data:", formData);
    // setAuthUser(formData);
    // navigate('/')
  };

  const mutation = useMutation({
    mutationFn: createCatagory,
    onSuccess: (data) => {
        console.log("Login successful:", data);
      //   localStorage.setItem("user", JSON.stringify(data.user));
      //   setAuthUser(data.user);
      //   navigate("/");
       setOpenCreateProduct(false)
       toast("Category created successfully!")
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
        Catagories
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
              type="name"
              name="name"
              label="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Username"
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
          </Box>
        }
        open={openCreateProduct}
        setOpen={setOpenCreateProduct}
        action={
          <Box >
            {
                mutation.isPending ?<CircularProgress />:<ButtonComp handleClick={handleSubmit}>Create</ButtonComp>
            }
            {mutation.error && <h1>{mutation.error.message}</h1>}
          </Box>
        }
      />
    </Box>
  );
};

export default CreateCatagory;
