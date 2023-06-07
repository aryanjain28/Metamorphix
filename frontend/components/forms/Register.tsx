import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import RegisterIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import TextField from "../fields/TextField";
import PasswordField from "../fields/PasswordField";
import { useRegisterUser } from "../../hooks/user.hooks";
import { VerificationModal } from "../modals/verification";
import Button from "../buttons/Button";

export const RegisterForm = () => {
  const { mutate: registerUser, isLoading } = useRegisterUser();

  const initFields = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };

  const handleRegisterClick = () => {
    setOpen(true);
    // call register API
    registerUser({
      payload: fields,
      callback: () => {
        // TODO
      },
    });
  };

  const [fields, setFields] = useState<RegisterFields>(initFields);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
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
        <Button
          sx={{ my: 2 }}
          label="Get Started"
          onClick={handleRegisterClick}
        />
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
      <VerificationModal
        open={open}
        setOpen={(p) => setOpen(p)}
        email={fields.email}
      />
    </>
  );
};

// interfaces
interface RegisterFields {
  fName: string;
  lName?: string;
  email: string;
  password: string;
}
