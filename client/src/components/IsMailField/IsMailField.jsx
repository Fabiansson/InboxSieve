import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import TextField from '@material-ui/core/TextField';
import { Typography, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 40,
    margin: 4,
  },
  boo: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}));

export default function IsMailField() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.boo}>
      
      <Box className={classes.root}>
      
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="isMail"
              label="Username"
              name="isMail"
              autoComplete="isMail"
            />
      
      <Divider className={classes.divider} orientation="vertical" />
      <Typography component="h1" variant="h6">
            @inboxsieve.com
          </Typography>
    </Box>
      </React.Fragment>
  );
}