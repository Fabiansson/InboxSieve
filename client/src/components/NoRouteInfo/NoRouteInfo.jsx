import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import inboxEmpty from '../../assets/images/inboxEmpty.svg';
import Copyright from '../Copyright/Copyright';

const useStyles = makeStyles(theme => ({
    box: {
        background: theme.palette.background.paper,
        borderRadius: '10px',
        margin: theme.spacing(3),
        padding: theme.spacing(4)
    },
    boxImage: {
        height: '350px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${inboxEmpty})`,
        backgroundPosition: 'right bottom',
    },
    typo: {
        wordBreak: 'none',
        marginBottom: theme.spacing(4)
    }
}));


function NoRouteInfo() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <Box className={classes.box}>
            <Typography className={classes.typo} variant="h3" color="primary" noWrap>
                You have no Routes yet.
            </Typography>
            <Typography variant="h6" color="textSecondary">
                As soon as someone sends a Email to your InboxSieve address the sender will show up here.
                You then have the option to keep the route activated or not.
            </Typography>
            <Box className={classes.boxImage}></Box>
        </Box>
        <Copyright />
        </React.Fragment>
    );
}

export default NoRouteInfo;