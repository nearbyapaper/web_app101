"use client";

import { Grid, Typography } from "@mui/material";
import TextField101 from "../utils/text-input";
import Button101 from "../utils/button";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/home");
  };

  const navigateRegister = () => {
    router.push("/register");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ minHeight: "100vh" }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            App
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ marginBottom: 2, color: "#9cbb80" }}>
            101
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <TextField101
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField101
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item container direction="row" justifyContent="center" spacing={2}>
        <Grid item>
          <Button101 variant="contained" label="Login" onClick={navigateHome} />
        </Grid>
        <Grid item>
          <Button101
            variant="outlined"
            label="Register"
            onClick={navigateRegister}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
