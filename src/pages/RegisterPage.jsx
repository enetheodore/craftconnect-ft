// import { Box, Button, Card, Paper, TextField } from "@mui/material";
// import React, { useState } from "react";
// import InputComp from "../../components/ui/InputComp";
// import { colors } from "@mui/material";
// import { ButtonComp } from "../../components/ui/ButtonComp";
// import CardComp from "../../components/general/CardComp";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../contexts/AuthContext";
// import { useMutation } from "@tanstack/react-query";
// import { loginAdmin } from "../../utilities/makeApiRequest";
// const RegisterPage = () => {
//   const { setAuthUser } = useAuthContext();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (name, value) => {
//     console.log(name, value);
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("user", JSON.stringify(formData));
//     console.log("Form Data:", formData);
//     mutation.mutate(formData); // Send the credentials
//   };

//   const mutation = useMutation({
//     mutationFn: loginAdmin,
//     onSuccess: (data) => {
//       console.log("Login successful:", data);
//       localStorage.setItem("user", JSON.stringify(data));
//       setAuthUser(data);
//     },
//     onError: (error) => {
//       // Handle error (e.g., show error message)
//       console.error("Login failed:", error);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <CardComp
//         // sx={{
//         //   width: "100%",
//         //   display: "flex",
//         //   justifyContent: "center",
//         //   flexDirection: "column",
//         //   maxWidth: "450px",
//         //   gap: "20px",
//         //   padding: "50px 20px",
//         // }}
//         className="flex_10 flex_col "
//       >
//         <h1>Login</h1>
//         <InputComp
//           type="username"
//           name="username"
//           label="Username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Enter Username"
//         />
//         <InputComp
//           type="password"
//           name="password"
//           label="Password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Enter Password"
//         />
//         <ButtonComp handleClick={handleSubmit}>Submit </ButtonComp>

//         {mutation.error && <h1>{mutation.error.message}</h1>}

//         {mutation.isPending ? <h1>Loading</h1> : <h1></h1>}
//       </CardComp>
//     </Box>
//   );
// };

// export default RegisterPage;
