import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import google from "./icons/google.jpg";
import linkedin from"./icons/linkedin.jpg";
import stack from "./icons/stack.png";
import git from "./icons/git.png";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            paddingY:10,
            paddingX:5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border:'1px solid grey',
            borderRadius:5
          }}
        >
         
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <Typography component="h5" variant="h7" color={"grey"}>
            Lets get you started with logging in your account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography component="h5" variant="h7" color={"grey"} paddingY={3}>
            ----- one click sign in -----
          </Typography>
          <Grid container>
            <Grid item paddingX={2}><Avatar paddingX={5} alt="google" src={google} />
          </Grid>
          <Grid item paddingX={2}><Avatar  alt="google" src={linkedin} />
          </Grid>
          <Grid item paddingX={2}><Avatar  alt="google" src={stack} />
          </Grid>
          <Grid item paddingX={2}><Avatar  alt="google" src={git} />
          </Grid>
          </Grid>
            
          </Box>
        </Box>
        </Container>
    </ThemeProvider>
  );
}