import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import imgChooser from '../../assets/images/undraw_Choose_bwbs.png';
import imgChoooser from '../../assets/images/undraw_inbox_cleanup_w2ur.png';

const useStyles = makeStyles(theme => ({
  paper: {
    //width: '100%',
    //height: '30%',
    //top: '50%',
    //transform: 'translateY(350%)',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing(2),
  },
  boox: {
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(98,144,195,1) 0%, rgba(194,231,218,1) 51%, rgba(241,255,231,1) 100%)',
    //textAlign: 'center',
    //backgroundColor: '#f1ffe7',
    borderRadius: '10px',
    padding: '1.5em',
    margin: theme.spacing(3)
    //top: '50%',
    //transform: 'translateY(100%)'
  },
  choosing: {
    height: '300px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${imgChooser})`,
  },
  chooosing: {
    height: '300px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${imgChoooser})`,
  },
  infoText: {
    padding: theme.spacing(4)
  }
}));

const LandingPage = function () {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Box boxShadow={3} className={classes.boox}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
          <Typography variant="h2" color="inherit">
            InboxSieve
      </Typography>
          <Typography variant="h4" color="inherit">
            Sieve your Spam away!
      </Typography>
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
            Get your InboxSieve
        </Button>
        </Grid>





        <Grid item xs={6} elevation={6} square>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
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
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        
      </Grid>








        </Grid>
        </Box>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box className={classes.choosing}></Box>
            </Grid>
            <Grid item xs={8}>
              <Box className={classes.infoText}>
              <Typography variant="h4" component="h3">
                What is InboxSieve?
        </Typography>
              <Typography component="p">
                InboxSieve is a way of organizing and privatizing your personal Email-Adress.
        </Typography>
              </Box>
            
            </Grid>
            <Grid item xs={8}>
            <Box className={classes.infoText}>
              <Typography variant="h4" component="h3">
                What is InboxSieve?
        </Typography>
              <Typography component="p">
                InboxSieve is a way of organizing and privatizing your personal Email-Adress.
        </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
            <Box className={classes.chooosing}></Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  )
};
export default LandingPage;