import axios from "axios";

const BASE_URI = "http://localhost:5035/api";

const client = axios.create({
  baseURL: BASE_URI,
  json: true,
});

class APIClient {
  //  starring articles
  createStarredTweets(tweet) {
    const tweets = {
      title: tweet.text,
      url: tweet.text,
      summary: tweet.text,
    };
    return this.perform("post", "/content", tweets);
  }
  createStarred(article) {
    const art = {
      title: article.title,
      url: article.link,
      summary: article.id,
    };
    return this.perform("post", "/content", art);
  }

  deleteStarred(article) {
    return this.perform("delete", `/star/${article.id}`);
  }

  getStarred() {
    return this.perform("get", "/starred");
  }

  async perform(method, resource, data) {
    return client({
      method,
      url: resource,
      data,
    }).then((resp) => {
      return resp.data ? resp.data : [];
    });
  }
}

export default APIClient;
