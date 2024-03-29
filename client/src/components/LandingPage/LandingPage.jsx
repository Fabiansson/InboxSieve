import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import PricingTable from '../PricingTable/PricingTable';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { withoutAuthorization } from '../../services/Session';


import imgChooser from '../../assets/images/undraw_Choose_bwbs.png';
import imgChoooser from '../../assets/images/undraw_inbox_cleanup_w2ur.png';
import cleaning from '../../assets/images/inboxCleaning.svg';
import Footer from '../Footer/Footer';


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
    margin: theme.spacing(4),
    //whiteSpace: 'nowrap'
  },
  /*footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },*/
}));

const signUp = function (history, username) {
  history.push('/signup', { username: username })
}

const LandingPage = function (props) {
  const classes = useStyles();
  const [username, setUsername] = useState('');

  return (
    <React.Fragment>
      <Container>
        <Box boxShadow={3} className={classes.boox}>
          <Grid container spacing={3}>
            <Grid item xs={6} elevation={6}>
              <Typography component="h1" variant="h3" className={classes.margin}>
                Free inbox organizer and privatizer.
          </Typography>
              <Typography component="h2" variant="h6" className={classes.margin}>
                Sieves your spam away...
          </Typography>
              <TextField
                className={classes.margin}
                variant="outlined"
                name="isMail"
                label="Username"
                id="isMail"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">@inboxsieve.com</InputAdornment>
                }}
              />
              <Fab variant="extended" onClick={() => signUp(props.history, username)} color="primary" aria-label="add" className={classes.margin}>
                Get Started
              </Fab>
              {/*<Box className={classes.formBox}>
          
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
  
  </Box>*/}
            </Grid>
            <Grid item xs={6}>
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

      <Footer />
    </React.Fragment>
  )
};

const condition = authUser => !authUser;


export default withRouter(withoutAuthorization(condition)(LandingPage));