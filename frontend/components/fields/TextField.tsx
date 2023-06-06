import { TextField } from "@mui/material";

const TextFieldComp = (props: TextFieldProps) => {
  const {
    sx = {},
    type = "text",
    value,
    onChange,
    label,
    required = false,
    endIcon,
  } = props;
  return (
    <TextField
      sx={{ m: 1.5, ...sx }}
      type={type}
      label={label}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      required={required}
      fullWidth
      InputProps={{ endAdornment: endIcon }}
    />
  );
};

interface TextFieldProps {
  sx?: any;
  value: string | null;
  onChange: (p: string) => void;
  label: string;
  required?: boolean;
  type?: string;
  endIcon?: React.ReactNode;
}

export default TextFieldComp;
