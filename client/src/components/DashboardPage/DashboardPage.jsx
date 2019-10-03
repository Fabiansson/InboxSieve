import React, { Component } from 'react';

import { withFirebase } from '../../services/Firebase';
import { withAuthorization, AuthUserContext } from '../../services/Session';

import axios from 'axios';


class DashboardPage extends Component {
  static contextType = AuthUserContext;

  constructor(props) {
    super(props);

    this.state = {
      token: null,
      routes: []
    };

   
    
  }

  componentDidMount(){
    const uid = this.context.uid;
    this.props.firebase.doGetIdToken().then(token => {
      console.log(this.context.uid);
      console.log(token);
      this.setState({token: token});
    });


    axios.get('/api/mailRoutes/' + uid)
        .then(res => {
          console.log(res);
        })


  }


  

  render() {
    
    return (
      <h1>DashboardPage</h1>

    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(DashboardPage));