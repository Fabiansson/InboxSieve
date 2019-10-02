import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../../services/Session';

import SignOutButton from '../SignOut/SignOut';

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
const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={'/'}>Landing</Link>
    </li>
    <li>
      <Link to={'/signin'}>Sign In</Link>
    </li>
  </ul>
);
export default Navigation;