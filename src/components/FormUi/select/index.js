import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useField, useFormikContext } from "formik";

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

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect} sx={[{ width: "100%" }, customizedTextfield]}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
