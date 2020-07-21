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
    "url" : article.link, 
    "summary": article.id
  }
  return this.perform('post', '/content', art);
 }

 // creating feedback data
 createFeedback(feedback) {
   const form = {
     'likes': feedback.likes,
     'features': 'aedan',
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

 async perform (method, resource, data) {
   return client({
     method,
     url: resource,
     data,
   }).then(resp => {
     return resp.data ? resp.data : [];
   })
 }
}

export default APIClient;