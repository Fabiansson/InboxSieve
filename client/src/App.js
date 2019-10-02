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

const App = () => (
      <Router>
        <div>
          <Navigation />
          <hr/>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/signup"} component={SignUpPage} />
          <Route path={"/signin"} component={SignInPage} />
          <Route path={"/pwforget"} component={PasswordForgetForm} />
          <Route path={"/dashboard"} component={DashboardPage} />
          <Route path={"/account"} component={AccountPage} />
        </div>
      </Router>
    );

export default withAuthentication(App);
