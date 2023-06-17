import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  logo: {
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  text: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <img src="/logo.svg" alt="Logo" className={classes.logo} />
      </Grid>
      <Grid item xs={12} className={classes.text}>
        If you have an account, click on the login button. If not, click on the registration button.
      </Grid>
      <Grid container justifyContent="center" className={classes.buttonContainer}>
        <Button variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Signup
        </Button>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
