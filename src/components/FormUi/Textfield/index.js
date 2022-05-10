import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

export const customizedTextfield = {
  "& label.Mui-focused": {
    color: "#290038",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#290038",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#290038",
    },
    "&:hover fieldset": {
      borderColor: "#290038",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff8000",
    },
  },
};

const TextFieldWrapper = ({ name, value, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    variant: "outlined",
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }

  return (
    <TextField
      {...configTextField}
      sx={[{ width: "100%" }, customizedTextfield]}
      value={value}
    />
  );
};

export default TextFieldWrapper;
