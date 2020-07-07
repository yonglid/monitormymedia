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
import { Switch } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import moment from "moment"

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
  const now = new Date();
  const [startEndDate, setStartEndDate] = React.useState({
    start: moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)),
    end: moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)).add(1, "days").subtract(1, "seconds")
  })
  const classes = useStyles();
  const [pushNotification, setPushNotification] = React.useState(false);

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

  const valuetext = (value) => `${value}°C`

  let ranges = {
    "Today Only": [moment(startEndDate.start), moment(startEndDate.end)],
    "Yesterday Only": [moment(startEndDate.start).subtract(1, "days"), moment(startEndDate.end).subtract(1, "days")],
    "3 Days": [moment(startEndDate.start).subtract(3, "days"), moment(startEndDate.end)]
  }

  let local = {
    "format": "MM-DD-YYYY HH:mm",
    "sundayFirst": false
  }
  let maxDate = moment(startEndDate.start).add(24, "hour")

  const applyCallback = (startDate, endDate) => {
    setStartEndDate({
      start: startDate,
      end: endDate
    })
  }

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
              <div>
                <DateTimeRangeContainer
                  ranges={ranges}
                  start={startEndDate.start}
                  end={startEndDate.end}
                  local={local}
                  maxDate={maxDate}
                  applyCallback={applyCallback}
                >
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="component-simple" shrink>Select Date Range</InputLabel>
                    <OutlinedInput id="component-simple" value={`${startEndDate.start.format(
                      "MM-DD-YYYY HH:mm"
                    )} - ${startEndDate.end.format("MM-DD-YYYY HH:mm")}`} disabled />
                  </FormControl>
                </DateTimeRangeContainer>
              </div>
              <div>
                Would you like to receive push notifications?
                <Switch
                  checked={pushNotification}
                  onChange={() => setPushNotification(!pushNotification)}
                  name="pushNotifications"
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}
