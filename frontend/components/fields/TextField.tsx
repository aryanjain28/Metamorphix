import { TextField } from "@mui/material";

const TextFieldComp = (props: TextFieldProps) => {
  const { type = "text", value, onChange, label, required = false } = props;
  return (
    <TextField
      sx={{ m: 1.5 }}
      type={type}
      label={label}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      required={required}
      fullWidth
    />
  );
};

interface TextFieldProps {
  value: string | null;
  onChange: (p: string) => void;
  label: string;
  required?: boolean;
  type?: string;
}

export default TextFieldComp;
