import React, { useState } from 'react';
import { Container, Grid, Typography, Button, TextField } from '@mui/material';
import { Facebook, Google, LinkedIn } from '@mui/icons-material';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {isSignUp ? 'Create Account' : 'Sign in'}
          </Typography>
        </Grid>
        <Grid item spacing={2} xs={12} container justifyContent="center">
          <Grid item>
            <Button variant="contained" startIcon={<Facebook />}>
            
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<Google />}>
           
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<LinkedIn />}>
             
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item>
            <Typography variant="body2">
              or use your email for {isSignUp ? 'registration' : 'login'}
            </Typography>
          </Grid>
        </Grid>
        {isSignUp && (
          <Grid item xs={12}>
            <TextField fullWidth label="Name" />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField fullWidth label="Email" type="email" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Password" type="password" />
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item>
            {isSignUp ? (
              <Button variant="contained" onClick={handleSignUp}>
                Sign Up
              </Button>
            ) : (
              <>
                <Button color="secondary">Forgot your password?</Button>
                <Button variant="contained" onClick={handleSignIn}>
                  Sign In
                </Button>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item>
              <div className={`overlay ${isSignUp ? 'overlay-right' : 'overlay-left'}`}>
                <div className="overlay-panel">
                  {isSignUp ? (
                    <>
                     <span >Already have an account?</span>
                      <Button className="ghost" onClick={handleSignIn}>
                      Sign In
                      </Button>
                    </>
                  ) : (
                    <>
                      <span>Don't have an account?</span>
                      <Button className="ghost" onClick={handleSignUp}>
                      Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
