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
import Copyright from '../Copyright/Copyright';
import PricingTable from '../PricingTable/PricingTable';

import { withoutAuthorization, AuthUserContext } from '../../services/Session';


import imgChooser from '../../assets/images/undraw_Choose_bwbs.png';
import imgChoooser from '../../assets/images/undraw_inbox_cleanup_w2ur.png';
import cleaning from '../../assets/images/inboxCleaning.svg';
import IsMailField from '../IsMailField/IsMailField';



const useStyles = makeStyles(theme => ({
  paper: {
    //width: '100%',
    //height: '30%',
    //top: '50%',
    //transform: 'translateY(350%)',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(3),
    padding: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing(2),
  },
  boox: {
    background: theme.palette.background.paper,
    //background: 'linear-gradient(90deg, rgba(98,144,195,1) 0%, rgba(194,231,218,1) 51%, rgba(241,255,231,1) 100%)',
    //textAlign: 'center',
    //backgroundColor: '#f1ffe7',
    borderRadius: '10px',
    padding: '1.5em',
    margin: theme.spacing(3)
    //top: '50%',
    //transform: 'translateY(100%)'
  },
  boxImage: {
    height: '400px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${cleaning})`,
    marginTop: theme.spacing(8)
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
  },
  formBox: {
    margin: theme.spacing(4)
  },
  /*footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },*/
  footer: {
    backgroundColor: 'white',
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  }
}));

const LandingPage = function () {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Box boxShadow={3} className={classes.boox}>
        <Grid container spacing={3}>
          





        <Grid item xs={6} elevation={6} square>
          <Box className={classes.formBox}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            InboxSieve
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
            <IsMailField />
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
          </Box>
      </Grid>

      <Grid item xs={6}>
            
          {/*<Typography variant="h2" color="inherit">
            InboxSieve
      </Typography>
          <Typography variant="h4" color="inherit">
            Sieve your Spam away!
  </Typography>
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
            Get your InboxSieve
  </Button>*/}
        <Box className={classes.boxImage}></Box>
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
                InboxSieve is a completely new way of organizing and privatizing your personal Email-Adress.
                This service enables full control over your private inbox and gives you the option to hide your personal 
                Email address behind your InboxSieve email address. You can controll and receive a unlimited amount of emails completely for free.
                With InboxSieve Pro you even get your own InboxSieve Subdomain so you can create unlimited amounts of email addresses instantly!

        </Typography>
              </Box>
            
            </Grid>
            <Grid item xs={8}>
            <Box className={classes.infoText}>
              <Typography variant="h4" component="h3">
                How does InboxSieve work?
        </Typography>
              <Typography component="p">
                Each person who signs up to InboxSieve receives his own InboxSieve Email Address.
                Your personal and private email address hides behind your InboxSieve address.
                This means each message you recive to your InboxSieve address is forwarded to your private one.
                InboxSieve offers you full controll over who can send you messages or not.
                On your Dashboard you have the option to disable each individual source from sending you emails.
        </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
            <Box className={classes.chooosing}></Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <PricingTable />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              Terms
            </Grid>
            <Grid item xs={3}>
              Privacy
            </Grid>
            <Grid item xs={3}>
              FAQ
            </Grid>
            <Grid item xs={3}>
              Support
            </Grid>

          </Grid>
          <Copyright />
          
        </Container>
      </footer>

    </React.Fragment>
  )
};

const condition = authUser => !authUser;


export default withoutAuthorization(condition)(LandingPage);