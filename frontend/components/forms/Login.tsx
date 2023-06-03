import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "../fields/TextField";
import LoginIcon from "@mui/icons-material/VpnKey";
import Link from "next/link";

export const LoginForm = () => {
  const initFields = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };
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

      <TextField sx={{ m: 1.5 }} label="Email" value="" onChange={() => {}} />
      <TextField
        sx={{ m: 1.5 }}
        label="Password"
        value=""
        onChange={() => {}}
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
