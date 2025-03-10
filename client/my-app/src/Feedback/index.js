import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import SearchBar from '../components/SearchBar';
import APIClient from '../apiClient';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2.5),
        margin: 'auto',
        backgroundColor: 'rgb(23,84,226)',
        color: 'white',
    },
}));

export default function Feedback(props) {
    const classes = useStyles();
    // console.log(props.history);

    const [likes, setLikes] = React.useState('');
    const [features, setFeatures] = React.useState('');
    const [rating, setRating] = React.useState(1);

    const apiClient = new APIClient();

    const handleSubmit = (feedback) => {
        const feedback_obj = new Object();
        // feedback_obj.likes =
        apiClient.createFeedback(feedback);
    };

    return (
        <div className={classes.root}>
            <SearchBar history={props.history} />
            <div class='inner-container top-25'>
                <Typography variant='h3' component='h1' align='center'>Feedback</Typography>
                <Typography variant='h5' component='h6' align='center'>Tell us what you think!</Typography>
            </div>
            <div class='inner-container top-25 bottom-25'>
                <Grid container direction='column' spacing={2} justify='center' alignItems='center'>
                    <Grid item xs={12} container style={{ maxWidth: 700 }} alignItems='center'>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} elevation={3}>
                                <Typography align='center'>What did you like/dislike about the plaform?</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                variant='outlined'
                                multiline={true}
                                fullWidth={true}
                                rows={4}
                                rowsMax={4}
                                value={likes}
                                onChange={(event) => {
                                    console.log(event.target.value)
                                    setLikes(event.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container style={{ maxWidth: 700 }} alignItems='center'>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} elevation={3}>
                                <Typography align='center'>What other features would you like to see?</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                variant='outlined'
                                multiline={true}
                                fullWidth={true}
                                rows={4}
                                rowsMax={4}
                                value={features}
                                onChange={(event) => {
                                    console.log(event.target.value)
                                    setFeatures(event.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container style={{ maxWidth: 700 }} alignItems='center'>
                        <Grid item xs={6} container direction='column' spacing={2} alignItems='center'>
                            <Grid item>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography>How would you rate this tool?</Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Rating
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize='inherit' />}
                                    onChange={(event, newRating) => {
                                        setRating(newRating);
                                    }}
                                    value={rating}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={6} align='center'>
                            <Button
                                variant='outlined'
                                size='large'
                                style={{ width: '70%' }}
                                onClick={() => handleSubmit({ likes, features, rating })} // if you don't have the () => function trigger, function is being called instead of passing it to onClick https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
                                href='../thankyou'
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}



