import React from "react";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    fullWidth: false,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
