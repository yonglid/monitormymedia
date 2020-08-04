import axios from 'axios';

const BASE_URI = 'http://localhost:5035/api';

const client = axios.create({
  baseURL: BASE_URI,
  json: true
});

class APIClient {
  createKudo(repo) {
    return this.perform('post', '/kudos', repo);
  }

  deleteKudo(repo) {
    return this.perform('delete', `/kudos/${repo.id}`);
  }

  getKudos() {
    return this.perform('get', '/kudos');
  }

  //  starring articles
  createStarred(article) {
    const art = {
      "title": article.title,
      "url": article.link,
      "summary": article.id
    }
    return this.perform('post', '/content', art);
  }

  // creating feedback data
  createFeedback(feedback) {
    const form = {
      'likes': feedback.likes,
      'features': feedback.features,
      'rating': feedback.rating,
    }
    return this.perform('post', '/feedback', form);
  }

  deleteStarred(article) {
    return this.perform('delete', `/star/${article.id}`);
  }

  getStarred() {
    return this.perform('get', '/starred');
  }

  createUser(userInfo) {
    const body = {
      "email": userInfo.email,
      "state": userInfo.state,
      "districtNumber": userInfo.districtNumber,
      "newsPreference": userInfo.newsPreference,
      "districtSearch": userInfo.districtSearch,
      "dateRange": userInfo.dateRange,
      "notification": userInfo.notification,
      "starred": userInfo.starred
    }
    console.log('making create request')
    return this.perform('post', '/user', body)
  }

  async perform(method, resource, data) {
    return client({
      method,
      url: resource,
      data,
    }).then(resp => {
      console.log(`response from api : ${JSON.stringify(resp.data)}`)
      return resp.data ? resp.data : [];
    })
  }
}

export default APIClient;