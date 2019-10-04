import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../../services/Session';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
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

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={'/'}>Landing</Link>
    </li>
    <li>
      <Link to={'/dashboard'}>Dashboard</Link>
    </li>
    <li>
      <Link to={'/account'}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);
const NavigationNonAuth = function(){
  const classes = useStyles();
  
return(
  <React.Fragment>
  <CssBaseline />
<AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
<Toolbar className={classes.toolbar}>
  <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
    InboxSieve
  </Typography>
  <nav>
    <Linkk variant="button" color="textPrimary" href="/" className={classes.link}>
      LandingPage
    </Linkk>
  </nav>
  <Button href="/signin" color="default" variant="outlined" className={classes.link}>
    Sign In
  </Button>
</Toolbar>
</AppBar>
</React.Fragment>
)};
export default Navigation;