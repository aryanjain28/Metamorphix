import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";

const TextFieldComp = (props: TextFieldProps) => {
  const {
    variant,
    sx = {},
    type = "text",
    value,
    onChange,
    label,
    required = false,
    InputProps = {},
  } = props;
  return (
    <TextField
      variant={variant}
      sx={{ m: 1.5, ...sx }}
      type={type}
      label={label}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      required={required}
      fullWidth
      InputProps={InputProps}
    />
  );
};

interface TextFieldProps {
  variant?: TextFieldVariants; // "contained" | "outlined" | "filled";
  sx?: any;
  value: string | null;
  onChange: (p: string) => void;
  label: string;
  required?: boolean;
  type?: string;
  InputProps?:
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | Partial<InputProps>;
}

export default TextFieldComp;
