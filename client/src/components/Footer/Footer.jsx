import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from '../Copyright/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: 'white',
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(5),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        },
      }
}));

const Footer = function() {
    const classes = useStyles();

    return(
    <footer className={classes.footer}>
    <CssBaseline />
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          Terms
        </Grid>
        <Grid item xs={3}>
          Privacy
        </Grid>
        <Grid item xs={3}>
          FAQ
        </Grid>
        <Grid item xs={3}>
          Support
        </Grid>

      </Grid>
      <Copyright />

    </Container>
  </footer>
)};

export default Footer;