import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Security, ImplicitCallback, SecureRoute } from "@okta/okta-react";


import Login from "../Login";
import Home from "../Home";
import About from "../About";
import Personalize from "../Personalize";
import Tweets from "../Tweets";
import Feedback from '../Feedback';
import FeedbackLanding from '../FeedbackLanding';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.HomePage = this.HomePage.bind(this);
  // }
  // HomePage = () => {
  //   return (
  //     <Home
  //       history={this.props.history}
  //     />
  //   );
  // }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tweets" component={Tweets} />
          <Route path="/about" component={About} />
          <Route path="/newsfeed" component={Personalize} />
          <Route path="/feedback" component={Feedback} />
          <Route path='/thankyou' component={FeedbackLanding} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
