import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = async () => {
    await submitForm();
  };

  const configButton = {
    ...otherProps,
    variant: "contained",
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
