import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../SearchBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const options = ["1", "2", "3", "4", "5", "6", "7"];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700, // the rows themselves
  },
  head: {
    backgroundColor: "red",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ControllableStates(props) {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const classes = useStyles();

  //   const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <SearchBar history={props.history} />
      <div>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              elevation={3}
              style={{ padding: "0" }}
            >
              <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
              <div>{`inputValue: '${inputValue}'`}</div>
              <br />
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                style={{ width: 300, alignContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="District Number"
                    variant="outlined"
                  />
                )}
              />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">
                  Tell us where you want to get your news
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={handleChange}
                        name="localnewsoutlet"
                      />
                    }
                    label="Local News Outlet"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={handleChange}
                        name="twitter"
                      />
                    }
                    label="Twitter"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={handleChange}
                        name="facebook"
                      />
                    }
                    label="Facebook"
                  />
                </FormGroup>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
