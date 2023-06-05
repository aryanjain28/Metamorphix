import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useState } from "react";

const PasswordField = (props: PasswordFieldProps) => {
  const {
    value,
    onChange,
    label,
    showVisibilityOption = true,
    required = false,
  } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <TextField
      sx={{ m: 1.5 }}
      type={showPassword ? "text" : "password"}
      label={label ? label : "Password"}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      InputProps={
        showVisibilityOption && {
          endAdornment: showPassword ? (
            <VisibilityOff
              sx={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <Visibility
              sx={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            />
          ),
        }
      }
      required={required}
      fullWidth
    />
  );
};

interface PasswordFieldProps {
  value: string | null;
  onChange: (p: string) => void;
  showVisibilityOption?: boolean;
  label?: string;
  required?: boolean;
}

export default PasswordField;
