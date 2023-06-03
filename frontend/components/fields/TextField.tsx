import { TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = (props: TextFieldProps) => {
  const {
    name,
    sx = {},
    type = "text",
    value,
    label = "",
    disabled = false,
    onChange,
  } = props;
  return (
    <TextField
      fullWidth
      name={name}
      sx={{ p: 0, ...sx }}
      variant="outlined"
      type={type}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
};

// interfaces
interface TextFieldProps {
  name?: string;
  sx?: any;
  type?: string;
  value: string | null;
  label?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export default TextFieldComponent;
