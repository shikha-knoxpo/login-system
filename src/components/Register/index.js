import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { height } from "@mui/system";
import { grey } from "@mui/material/colors";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const theme = createTheme();

export default function SignUp() {
    const [value, setValue] = useState()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border:'1px solid grey',
            borderRadius:5,
            paddingY:10,
            paddingX:5,
          

          }}
        >
          <Typography component="h1" variant="h5">
            Register Yourself with us
          </Typography>
          <Typography component="h9" variant="h9" color={'grey'}>
            Let us help you serve more so we can help you
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <PhoneInput
  defaultCountry="RU"
  value={value}
  onChange={setValue}
  placeholder="Enter phone number"
  style={{height:'20px',marginY:'30px'}}/>
              </Grid>
              
              <Grid item xs={12}>
                <Multiselect
                placeholder="Roles *"
                  options={[
                    { name: "React Developer", id: 1 },
                    { name: "Customer Support Specialist", id: 2 },
                    { name: "Angular Developer", id: 3 },
                  ]} // Options to display in the dropdown
                  displayValue="name" // Property name to display in the dropdown options
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
