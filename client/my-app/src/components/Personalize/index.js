import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SearchBar from "../SearchBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";

const options = ["1", "2", "3", "4", "5", "6", "7"];
const states = ["MA", "CA"]; // definitely find library for this
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

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function ControllableStates(props) {
  const [value, setValue] = React.useState(options[0]);
  const [districtValue, setDistrictValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [districtInput, setDistrictInput] = React.useState("");
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
        <div class="inner-container top-50">
          <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                elevation={3}
                style={{ padding: "0" }}
              >
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={"CA"}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={states}
                  style={{ width: 300, alignContent: "center" }}
                  renderInput={(params) => (
                    <TextField {...params} label="State" variant="outlined" />
                  )}
                />
                <br />
                <Autocomplete
                  value={districtValue}
                  onChange={(event, newValue) => {
                    setDistrictValue(newValue);
                  }}
                  inputValue={districtInput}
                  onInputChange={(event, newInputValue) => {
                    setDistrictInput(newInputValue);
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
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
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

                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={20}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
