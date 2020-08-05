import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Security, ImplicitCallback, SecureRoute } from "@okta/okta-react";

import Home from "../components/Home";
import About from "../components/About";
import Personalize from "../components/Personalize";
import Tweets from "../components/Tweets";
import ReadingList from "../components/ReadingList/index";

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
          <Route path="/readinglist" component={ReadingList} />
          <Route path="/feedback" component={Feedback} />
          <Route path='/thankyou' component={FeedbackLanding} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
