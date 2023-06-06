import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RegisterIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import TextField from "../fields/TextField";
import PasswordField from "../fields/PasswordField";
import { useRegisterUser } from "../../hooks/user.hooks";
import { CloseOutlined } from "@mui/icons-material";

export const RegisterForm = () => {
  const { mutate: registerUser, isLoading } = useRegisterUser();

  const initFields = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };

  const handleRegisterClick = () => {
    // call register API
    registerUser({
      payload: fields,
      callback: () => {
        // TODO
      },
    });
  };

  const [fields, setFields] = useState<RegisterFields>(initFields);
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
          endIcon={
            <Box display="flex" alignContent="center" justifyContent="end">
              <div onClick={() => {}}>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Verify
                </Typography>
              </div>
            </Box>
          }
        />
        <PasswordField
          value={fields.password}
          onChange={(password) => setFields({ ...fields, password })}
          required
        />

        <Button
          fullWidth
          sx={{ m: 4 }}
          variant="contained"
          onClick={handleRegisterClick}
        >
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

      <Dialog open={true} fullWidth maxWidth="sm">
        <DialogTitle>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>Modal Title</Typography>
            <CloseOutlined />
          </Box>
        </DialogTitle>
        <Divider />

        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={1}
          >
            <Typography variant="body2">
              Enter 6-digit verification code sent to "{fields.email}"
            </Typography>
            <TextField
              type="number"
              value=""
              onChange={() => {}}
              label="Verification Code"
              sx={{ mx: 0, my: 2, width: "40%" }}
            />
          </Box>
        </DialogContent>

        <Divider />
        <DialogActions>
          <Button variant="contained" disabled>
            Verify
          </Button>
        </DialogActions>
      </Dialog>
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
