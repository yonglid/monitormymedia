import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import SearchBar from '../SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        margin: 'auto',
        backgroundColor: 'rgb(23,84,226)',
    },
    head: {
      backgroundColor: 'red',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export default function Feedback(props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SearchBar history={props.history} />
            <Typography align='center' variant='h3' component='h2'>
                Feedback
            </Typography>
            <Typography align='center' variant='h4' component='h3'>
                Tell us what you think!
            </Typography>
            <div class='inner-container top-50'>
                <Grid container className={classes.root} spacing={4}>
                    <Grid item xs={12}>
                        <Grid container spacing={2} styles={{display: 'flex', alignItems: 'strectch'}}>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component='h4'>
                                            What do you like/dislike about this platform?
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField label='Your response goes here' variant='outlined' fullWidth={true} multiline={true} rows={5} rowsMax={5} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} styles={{display:'flex', alignItems: 'stretch'}}>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component='h4'>
                                            What other features would you like to see?
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField label='Your response goes here' variant='outlined' fullWidth={true} multiline={true} rows={5} rowsMax={5} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} styles={{display:'flex', alignItems:'stretch'}}>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant='h5' component='h4'>
                                    On a scale from 1-10, how helpful did you find this tool for conducting the business of your campaign
                                </Typography>
                                <Slider min={0} max={10} valueLabelDisplay='on' />
                            </Grid>
                            <Grid item xs={6}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component='h4' align='center'>
                                            Contact Us
                                        </Typography>
                                        <Typography gutterBottom variant='h6' component='h5' align='center'>
                                            emily@bluebonnetdata.org
                                        </Typography>
                                        <Typography gutterBottom variant='h6' component='h5' align='center'>
                                            paul@bluebonnetdata.org
                                        </Typography>
                                        <Typography gutterBottom variant='h6' component='h5' align='center'>
                                            russell@mindich.com
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}



