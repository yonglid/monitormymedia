import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function FeedbackLanding(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SearchBar history={props.history} />
            <div class='inner-container top-50'>
                <Typography variant='h3' component='h1' align='center'>Thank you!</Typography>
                <Typography variant='h5' component='h6' align='center'>We appreciate your feedback!</Typography>
            </div>
        </div>
    );
}