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
          this.setState({routes: res.data});
          console.log(res.data);
        })


  }


  

  render() {
    
    return (
      <div>
      <h1>DashboardPage</h1>
      <ul>
        {this.state.routes.map((item,i) => <li key={i}>{item.from} Active: {item.active.toString()}</li>)}
        </ul>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(DashboardPage));