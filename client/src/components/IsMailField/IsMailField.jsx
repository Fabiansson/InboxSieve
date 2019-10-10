import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 10px',
    margin: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },

}));

export default function IsMailField() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Username"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <Typography>@inboxsieve.com</Typography>
    </Paper>
  );
}