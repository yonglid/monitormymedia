import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { withAuth } from "@okta/okta-react";

import GithubRepo from "../GithubRepo";
import SearchBar from "../SearchBar";

import APIClient from "../apiClient";
import googlerssClient from "../googlerssClient";
import GoogleRssArticle from "../GoogleRssArticle";
import twitterClient from "../twitterClient";

import "../Styles/media_monitor.scss";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class Home extends React.Component {
  state = {
    value: 0,
    repos: [],
    kudos: [],
    starred: [],
    articles: [],
  };

  async componentDidMount() {
    //  const accessToken = await this.props.auth.getAccessToken()
    this.apiClient = new APIClient();
    //  gets all the kudos and sets in state here -- probably where we want to fill with articles
    //  this.apiClient.getKudos().then((data) =>
    //    this.setState({...this.state, kudos: data})
    //  );
    this.apiClient
      .getStarred()
      .then((data) => this.setState({ ...this.state, starred: data }));
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleTabChangeIndex = (index) => {
    this.setState({ value: index });
  };

  resetRepos = (repos) => this.setState({ ...this.state, repos });
  resetArticles = (articles) => this.setState({ ...this.state, articles });

  isKudo = (repo) => this.state.kudos.find((r) => r.id === repo.id);
  onKudo = (repo) => {
    this.updateBackend(repo);
  };

  isStarred = (article) => this.state.starred.find((a) => a.id === article.id);
  onStarred = (article) => {
    this.updateStarredBackend(article);
  };

  updateBackend = (repo) => {
    if (this.isKudo(repo)) {
      this.apiClient.deleteKudo(repo);
    } else {
      this.apiClient.createKudo(repo);
    }
    this.updateState(repo);
  };

  updateStarredBackend = (article) => {
    if (this.isStarred(article)) {
      this.apiClient.deleteStarred(article);
    } else {
      this.apiClient.createStarred(article);
    }
    this.updateStarredState(article);
  };
  updateState = (repo) => {
    if (this.isKudo(repo)) {
      this.setState({
        ...this.state,
        kudos: this.state.kudos.filter((r) => r.id !== repo.id),
      });
    } else {
      this.setState({
        ...this.state,
        kudos: [repo, ...this.state.kudos],
      });
    }
  };
  updateStarredState = (article) => {
    if (this.isStarred(article)) {
      this.setState({
        ...this.state,
        starred: this.state.starred.filter((a) => a.id !== article.id),
      });
    } else {
      this.setState({
        ...this.state,
        starred: [article, ...this.state.starred],
      });
    }
  };

  onSearch = (event) => {
    const target = event.target;
    if (!target.value || target.length < 3) {
      return;
    }
    if (event.which !== 13) {
      return;
    }

    googlerssClient.getRssXMLFeed(94578).then((response) => {
      const jsonResp = JSON.parse(response);
      console.log(JSON.parse(response));
      this.setState({ ...this.state, value: 1 });
      this.resetArticles(jsonResp.items);
    });
    // twitterClient.getTwitterTrends(1).then((response) => {
    //   console.log(response);
    // });
  };
  renderRepos = (repos) => {
    if (!repos) {
      return [];
    }
    return repos.map((repo) => {
      return (
        <Grid item xs={12} md={3} key={repo.id}>
          <GithubRepo
            onKudo={this.onKudo}
            isKudo={this.isKudo(repo)}
            repo={repo}
          />
        </Grid>
      );
    });
  };
  renderArticles = (articles) => {
    console.log("ARTICLES");
    console.log(articles);
    if (!articles) {
      return [];
    }
    return articles.map((article) => {
      return (
          <GoogleRssArticle
            onStarred={this.onStarred}
            isStarred={this.isStarred(article)}
            article={article}
          />
      );
    });
  };

  render() {
    return (
      <div className={styles.root}>
        <SearchBar
          auth={this.props.auth}
          onSearch={this.onSearch}
          history={this.props.history}
        />
        <div class="inner-container">
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Starred" />
            <Tab label="Articles" />
            <Tab label="Map" />
          </Tabs>

          <SwipeableViews
            axis={"x-reverse"}
            index={this.state.value}
            onChangeIndex={this.handleTabChangeIndex}
          >
            <div class="articles-container">
              {this.renderArticles(this.state.starred)}
            </div>
            <div class="articles-container">
              {this.renderArticles(this.state.articles)}
            </div>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withAuth(Home));
