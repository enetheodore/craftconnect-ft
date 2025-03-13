import React, { memo, useState } from "react";
import { colors, styled, TextField } from "@mui/material";
const InputComp = memo(
  ({ name, value, onChange, placeholder, type, className, label,sx }) => {
    const handleChange = (e) => onChange(name, e.target.value);

    return (
      <CustomTextField
      fullWidth
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        id="outlined-basic"
        label={label}
        variant="outlined"
        sx={sx}
      />
    );

  }
);

InputComp.displayName = "InputComp";

export default InputComp;

const CustomTextField = styled(TextField)(
   ({theme})=>( {
    
    "& .MuiInputLabel-root": {
      color: "gray", // Default label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.mode === "dark" ?colors.grey["100"]: colors.grey["900"], // Label color when focused
    },
    "& .MuiInputLabel-root.Mui-error": {
      color: "red", // Label color for error state
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px", // Apply border radius
  
      "& fieldset": {
        borderColor: theme.palette.mode === "dark" ?colors.grey["600"]: colors.grey["400"], // Default border color
      },
      "&:hover fieldset": {
        borderColor: theme.palette.mode === "dark" ?colors.grey["400"]: colors.grey["600"], // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.mode === "dark" ?colors.grey["100"]: colors.grey["900"], // Border color when focused
      },
    },
  })
);
