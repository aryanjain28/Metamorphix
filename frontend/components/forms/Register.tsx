import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import RegisterIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";

export const RegisterForm = () => {
  const initFields = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };
  const [fields, setFields] = useState<RegisterFields>(initFields);
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
        <RegisterIcon sx={{ mr: 1 }} />
        <Typography sx={{ my: 3 }} variant="h6">
          Sign Up
        </Typography>
      </Box>

      <TextField
        sx={{ m: 1.5 }}
        label="First Name"
        value=""
        onChange={() => {}}
        required
        fullWidth
      />
      <TextField
        sx={{ m: 1.5 }}
        label="Last Name (Optional)"
        value=""
        onChange={() => {}}
        fullWidth
      />
      <TextField
        sx={{ m: 1.5 }}
        label="Email"
        value=""
        onChange={() => {}}
        required
        fullWidth
      />
      <TextField
        sx={{ m: 1.5 }}
        label="Password"
        value=""
        onChange={() => {}}
        required
        fullWidth
      />
      <TextField
        sx={{ m: 1.5 }}
        label="Confirm Password"
        value=""
        onChange={() => {}}
        required
        fullWidth
      />

      <Button fullWidth sx={{ m: 4 }} variant="contained">
        Get Started
      </Button>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="">
          <Typography variant="body2">Forgot Password?</Typography>
        </Link>
        <Link href={"/app/login"}>
          <Typography variant="body2">Already have an account?</Typography>
        </Link>
      </Box>
    </Box>
  );
};

// interfaces
interface RegisterFields {
  fName: string;
  lName: string;
  email: string;
  password: string;
}
