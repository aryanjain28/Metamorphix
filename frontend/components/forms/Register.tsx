import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import RegisterIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import TextField from "../fields/TextField";
import PasswordField from "../fields/PasswordField";

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
        label="First Name"
        value={fields.fName}
        onChange={(fName) => setFields({ ...fields, fName })}
        required
      />
      <TextField
        label="Last Name (Optional)"
        value={fields.lName}
        onChange={(lName) => setFields({ ...fields, lName })}
      />
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
