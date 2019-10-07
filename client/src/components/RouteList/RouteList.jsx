import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  boox: {
    backgroundColor: '#1a1b41',
    borderRadius: '10px',
    padding: '1.5em',
    margin: '2em'
  }
}));


export default function RouteList(props) {
  const classes = useStyles();

  return (
    <Box className={classes.boox}>
    <List subheader={<ListSubheader>My Routes</ListSubheader>} className={classes.root}>
        {props.routes.map((item,i) => 
        <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={item.from} />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={() => props.updateRoute(item._id, !item.active)}
            //checked={checked.indexOf('wifi') !== -1}
            checked={item.active}
            color={'secondary'}
            inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      </React.Fragment>
        )}
    </List>
    </Box>
  );
}