import { Box, Button, CircularProgress, Typography } from "@mui/material";

const ButtonComp = (props: ButtonProps) => {
  const {
    sx,
    variant = "contained",
    onClick,
    label,
    isLoading = false,
  } = props;
  return (
    <Button
      fullWidth
      sx={{ p: 0, textTransform: "capitalize", ...sx }}
      variant={variant}
      onClick={onClick}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        sx={{ p: 1 }}
      >
        <Typography letterSpacing={0.5} variant="body1">
          {label}
        </Typography>
        <CircularProgress
          sx={{ ml: 2, ...(!isLoading && { display: "none" }) }}
          color="inherit"
          size={20}
        />
      </Box>
    </Button>
  );
};

interface ButtonProps {
  variant?: "contained" | "text" | "outlined";
  label: string;
  onClick: () => void;
  sx?: any;
  isLoading?: boolean;
}

export default ButtonComp;
