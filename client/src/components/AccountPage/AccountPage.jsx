import React from 'react';
import axios from 'axios';

import { PasswordForgetForm } from '../PasswordForgetForm/PasswordForgetForm';
import PasswordChangeForm from '../PasswordChangeForm/PasswordChangeForm';
import { AuthUserContext, withAuthorization } from '../../services/Session';
import { withFirebase } from '../../services/Firebase';

const deletUser = async (authUser, firebase) => {

  const token = await firebase.doGetIdToken();
  console.log(token);
  axios.delete('/api/users/' + authUser.uid, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      firebase.doDeleteUser()
      .then(() => firebase.doSignOut())
      //this.props.history.push('/dashboard');
      console.log(res);
    }).catch(error => alert(error));
}

const AccountPage = ({ firebase }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <button type="button" onClick={() => deletUser(authUser, firebase)}>Delete Account</button>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(AccountPage));