import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    copyright: {
      marginTop: theme.spacing(2)
    }
}));


function Copyright() {
    const classes = useStyles();

    return (
        <Box className={classes.copyright}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://inboxsieve.com/">
          InboxSieve
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Box>
    );
  }

export default Copyright;