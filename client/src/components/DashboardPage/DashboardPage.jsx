import React, { Component } from 'react';

import { withFirebase } from '../../services/Firebase';
import { withAuthorization, AuthUserContext } from '../../services/Session';

import axios from 'axios';
import RouteList from '../RouteList/RouteList';
import Copyright from '../Copyright/Copyright';
import NoRouteInfo from '../NoRouteInfo/NoRouteInfo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  boox: {
    background: theme.palette.background.paper,
    borderRadius: '10px',
    padding: '1.5em',
    margin: theme.spacing(3)
  },
});

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

  deleteRoute = (id) => {
    axios.delete('/api/mailRoutes/' + id)
    .then(res => {
      console.log(res.data);
      this.getRoutes();
    })
  }
  

  render() {
    const { classes } = this.props;

    if(this.state.routes.length === 0){
      return(<NoRouteInfo />)
    }
    
    return (
      <React.Fragment>
        <CssBaseline />
      <Container>
      <Box boxShadow={3} className={classes.boox}>
      <Typography variant="h2" color="inherit" noWrap>
    Dashboard
  </Typography>
      <RouteList routes={this.state.routes} updateRoute={this.updateRoute} deleteRoute={this.deleteRoute}/>
      </Box>
      </Container>
      <Copyright />
      </React.Fragment>
    );
  }
}

const condition = authUser => !!authUser;

export default withStyles(styles)(withAuthorization(condition)(withFirebase(DashboardPage)));