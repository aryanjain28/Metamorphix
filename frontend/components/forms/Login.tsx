import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/VpnKey";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import PasswordField from "../fields/PasswordField";
import TextField from "../fields/TextField";

export const LoginForm = () => {
  const initFields = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fields, setFields] = useState<LoginFields>(initFields);
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <LoginIcon sx={{ mr: 1 }} />
        <Typography sx={{ my: 3 }} variant="h6">
          Login
        </Typography>
      </Box>

      <TextField
        label="Email"
        type="email"
        value={fields.email}
        onChange={(email) => setFields({ ...fields, email })}
        required
      />

      <PasswordField
        value={fields.password}
        onChange={(password) => setFields({ ...fields, password })}
        required
      />

      <Button fullWidth sx={{ m: 4 }} variant="contained">
        Login
      </Button>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href={"/app/register"}>
          <Typography variant="body2">Forgot Password?</Typography>
        </Link>
        <Link href={"/app/register"}>
          <Typography variant="body2">New here? Register.</Typography>
        </Link>
      </Box>
    </Box>
  );
};

// interfaces
interface LoginFields {
  fName: string;
  lName: string;
  email: string;
  password: string;
}
