import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
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

export default function ComplexGrid(props) {
  const classes = useStyles();
  console.log(props.history)
  return (
    <div className={classes.root}>
      <SearchBar history={props.history}/>
      <div>
      <Grid container className={classes.root} spacing={4}>
          <Grid item xs={12}>
              <Paper className={classes.paper} elevation={3} style={{padding: "0"}}>
                <Grid container spacing={2} style={{display: "flex", alignItems: "stretch"}}>
                <Grid item xs={3} style={{backgroundColor: "rgb(23,84,226)", color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center'}}> 
                    <Typography gutterBottom={false} variant="h4">
                        What?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                        A tool to help Congressional and local Campaigns keep track of their districts' news. 
                        We overlay Google News, Twitter, and Facebook search results with Google Maps' district boundaries.
                        </Typography>
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
                    <Typography gutterBottom={true} variant="h4">
                        Why?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            Candidates need a seamless mechanism to stay informed on issues that matter to their constituents. 
                            They need to track across multiple outlets and detemrine what content is worthy of a response.
                        </Typography>
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
                        <Typography gutterBottom={true} variant="h4">
                            Why now?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                The COVID-19 pandemic has prevented candidates from maintaining comparable levels of community engagement. 
                                Instead of attending events and meeting with constituents, canddiates need to use online resource sto stay updated on what matters in their race.                        
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
          </Grid>
      </Grid>
      </div>
    </div>
  );
}