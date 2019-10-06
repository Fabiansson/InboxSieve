import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import SignInPage from './components/SignInPage/SignInPage';
import PasswordForgetForm from './components/PasswordForgetForm/PasswordForgetForm';
import DashboardPage from './components/DashboardPage/DashboardPage';
import AccountPage from './components/AccountPage/AccountPage';

import { withAuthentication } from './services/Session';

import './App.css';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f1ffe7'
    },
    secondary: {
      main: '#BAFF29'
    }
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
  <React.Fragment>
    <CssBaseline />
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={"/"} component={LandingPage} />
        <Route path={"/signup"} component={SignUpPage} />
        <Route path={"/signin"} component={SignInPage} />
        <Route path={"/pwforget"} component={PasswordForgetForm} />
        <Route path={"/dashboard"} component={DashboardPage} />
        <Route path={"/account"} component={AccountPage} />
      </div>
    </Router>
  </React.Fragment>
  </ThemeProvider>
);

export default withAuthentication(App);
