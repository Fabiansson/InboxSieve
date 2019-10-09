import React from 'react';
import { AuthUserContext } from '../../services/Session';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Linkk from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SignOutButton from '../SignOut/SignOut';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    //borderBottom: `1px solid ${theme.palette.divider}`,
    background: 'transparent',
    boxShadow: 'none'
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = function(){
  const classes = useStyles();

  return(
  <React.Fragment>
  <CssBaseline />
<AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
<Toolbar className={classes.toolbar}>
  <Linkk variant="h4" color="primary" href="/" noWrap className={classes.toolbarTitle}>
    InboxSieve
  </Linkk>
  <nav>
  <Linkk variant="button" color="textPrimary" href="#" className={classes.link}>
      Pricing
    </Linkk>
    <Linkk variant="button" color="textPrimary" href="/dashboard" className={classes.link}>
      Dashboard
    </Linkk>
    <Linkk variant="button" color="textPrimary" href="/account" className={classes.link}>
      Account
    </Linkk>
  </nav>
  <SignOutButton />
</Toolbar>
</AppBar>
</React.Fragment>
)};


const NavigationNonAuth = function(){
  const classes = useStyles();
  
return(
  <React.Fragment>
  <CssBaseline />
<AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
<Toolbar className={classes.toolbar}>
  <Linkk variant="h4" color="primary" href="/" noWrap className={classes.toolbarTitle}>
      InboxSievee
    </Linkk>
  <nav>
    <Linkk variant="button" color="textPrimary" href="#" className={classes.link}>
      Pricing
    </Linkk>
  </nav>
  <Button href="/signin" color="default" variant="outlined" className={classes.link}>
    Sign In
  </Button>
  <Button href="/signup" color="primary" variant="contained" className={classes.link}>
    Sign Up
  </Button>
</Toolbar>
</AppBar>
</React.Fragment>
)};
export default Navigation;