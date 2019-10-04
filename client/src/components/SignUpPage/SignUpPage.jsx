import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import axios from 'axios';

import { withFirebase } from '../../services/Firebase';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isMail: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne, isMail } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        const user = {
          firebaseID: authUser.user.uid,
          email: authUser.user.email,
          isMail: isMail + '@inboxsieve.com'
        }
        
        axios.post('/api/users', user)
        .then(res => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push('/dashboard');
        })
        
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      email,
      passwordOne,
      passwordTwo,
      isMail,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      isMail === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <input
          name="isMail"
          value={isMail}
          onChange={this.onChange}
          type="text"
          placeholder="Your InboxSieve Adress"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={'/signup'}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };