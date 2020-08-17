import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import SearchBar from '../SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 700, // the rows themselves
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

const marks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value:5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 10,
        label: '10',
    },
];
export default function Contact(props){
    const classes = useStyles();
    console.log(props.history)
    return (
      <div className={classes.root}>
        <SearchBar history={props.history}/>
        <Typography variant='h3' component='h1' align='center'>
            Contact Us
        </Typography>
        <Typography variant='subtitle1' align='center'>
            Have questions? contact us through this form
        </Typography>
        <div class="inner-container top-50">
        <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3} style={{padding: "0"}}>
                  <Grid container spacing={2} style={{display: "flex", alignItems: "stretch"}}>
                  <Grid item xs={3} style={{backgroundColor: "rgb(23,84,226)", color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                      <Typography gutterBottom={false} variant="body" align='center'>
                          Email (required)
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                          <TextField variant='outlined' fullWidth={true} rows={1} maxRows={1}/>
                      </Grid>
                      </Grid>
                  </Grid>
                  </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3} style={{padding: "0"}}>
  
              <Grid container spacing={2} style={{display: "flex", alignItems: "stretch"}}>
                  <Grid item xs={3} style={{backgroundColor: "rgb(23,84,226)", color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                      <Typography gutterBottom={true} variant="body" align='center'>
                          Name (required)
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                          <TextField variant='outlined' fullWidth={true} rows={1} maxRows={1}/>
                      </Grid>
                      </Grid>
                  </Grid>
                  </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={3} style={{padding: "0"}}>

                          <Grid container spacing={2} style={{display: "flex", alignItems: "stretch"}}>
                              <Grid item xs={3} style={{backgroundColor: "rgb(23,84,226)", color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                  <Typography gutterBottom={true} variant="body" align='center'>
                                      Subject (Optional)
                                  </Typography>
                              </Grid>
                              <Grid item xs={12} sm container>
                                  <Grid item xs container direction="column" spacing={2}>
                                  <Grid item xs>
                                      <TextField variant='outlined' fullWidth={true}  rows={1} maxRows={1}/>
                                  </Grid>
                                  </Grid>
                              </Grid>
                              </Grid>
                          </Paper>
                        </Grid>
             <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={3} style={{padding: "0"}}>

                          <Grid container spacing={2} style={{display: "flex", alignItems: "stretch"}}>
                              <Grid item xs={3} style={{backgroundColor: "rgb(23,84,226)", color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                  <Typography gutterBottom={true} variant="body" align='center'>
                                      Message
                                  </Typography>
                              </Grid>
                              <Grid item xs={12} sm container>
                                  <Grid item xs container direction="column" spacing={2}>
                                  <Grid item xs>
                                      <TextField variant='outlined' fullWidth={true} multiline={true} rows={4} maxRows={4}/>
                                  </Grid>
                                  </Grid>
                              </Grid>
                              </Grid>
                          </Paper>
                        </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} style={{display: 'flex', alignItems: 'stretch'}}>
                    <Grid item xs={2}/>
                    <Grid item xs={3}>
                        <Button color='inherit' size='large' variant='outlined' fullWidth={true}>
                            Send
                        </Button>
                    </Grid>
                    <Grid item xs={3} />
                </Grid>
            </Grid>
        </Grid>
        </div>
      </div>
    );
  }



