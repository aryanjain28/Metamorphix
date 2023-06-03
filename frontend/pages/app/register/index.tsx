import React from "react";
import { Grid, Paper } from "@mui/material";
import { RegisterForm } from "../../../components/forms/Register";

function Register(props: any) {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/random?motivational)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <RegisterForm />
      </Grid>
    </Grid>
  );
}

export default Register;
