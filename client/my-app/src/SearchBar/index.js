import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { withAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  MuiAppBar: {
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 400,
    },
  },
  toolbar: {
    alignItems: "center",
  },
});

class SearchBar extends React.Component {
  state = {
    showAlert: false,
  };
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
    this.try = this.try.bind(this);
    this.personalize = this.personalize.bind(this);
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };
  async logout(e) {
    e.preventDefault();
    this.props.auth.logout("/"); // need to set this up for auth
  }

  showAlert() {
    this.setState({ showAlert: true });
  }

  removeAlert() {
    this.setState({ showAlert: false });
  }

  try = () => {
    this.props.history.push("/about");
  };

  personalize = () => {
    this.props.history.push("/newsfeed");
  };

  render() {
    const { classes } = this.props;
    const withAlert = (
      <div className={classes.root}>
        <AppBar position="static" style={{ alignItems: "center" }}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search for articles in an area!"
                onKeyPress={this.props.onSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Button onClick={this.removeAlert} color="inherit">
              About
            </Button>
            <Button onClick={this.showAlert} color="inherit">
              Newsfeed
            </Button>
            <Button onClick={this.logout} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
    const withoutAlert = (
      <div className={classes.root}>
        <AppBar position="static" style={{ alignItems: "center" }}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search for articles in an area!"
                onKeyPress={this.props.onSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <Button onClick={this.try} color="inherit">
              About
            </Button>
            <Button onClick={this.personalize} color="inherit">
              Newsfeed
            </Button>
            <Button onClick={this.logout} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
    // console.log(classes.history.push('/about'));
    console.log(this.state.showAlert);
    return this.state.showAlert ? withAlert : withoutAlert;
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withAuth(SearchBar));
