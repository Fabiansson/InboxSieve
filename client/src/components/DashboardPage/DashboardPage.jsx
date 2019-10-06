import React, { Component } from 'react';

import { withFirebase } from '../../services/Firebase';
import { withAuthorization, AuthUserContext } from '../../services/Session';

import axios from 'axios';
import RouteList from '../RouteList/RouteList';

import Container from '@material-ui/core/Container';
import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


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
    
    this.props.firebase.doGetIdToken().then(token => {
      console.log(this.context.uid);
      console.log(token);
      this.setState({token: token});
    });

    this.getRoutes();
    
  }

  getRoutes = () => {
    const uid = this.context.uid;
    axios.get('/api/mailRoutes/' + uid)
        .then(res => {
          this.setState({routes: res.data});
          console.log(res.data);
    })
  }

  updateRoute = (id, activate) => {
    console.log('updating route');
    axios.put('/api/mailRoutes/' + id, { activate: activate })
    .then(res => {
      console.log(res.data);
      this.getRoutes();
    })
  };


  

  render() {
    
    return (
      <React.Fragment>
        <CssBaseline />
      <Container>
      <Typography variant="h2" color="inherit" noWrap>
    Dashboard
  </Typography>
      <RouteList routes={this.state.routes} updateRoute={this.updateRoute}/>
      </Container>
      </React.Fragment>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(DashboardPage));