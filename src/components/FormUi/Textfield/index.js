import React from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

const TextFieldWrapper = ({ name, onChanged, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullwith: true,
    variant: "outlined",
    onChange: onChanged,
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }

  return <TextField {...configTextField} />;
};

export default TextFieldWrapper;
