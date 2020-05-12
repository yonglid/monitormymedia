export default {
  // feed = feedparser.parse("https://news.google.com/news/rss/local/section/geo/{}?ned=us&hl=en&gl=US".format(urllib.parse.quote(geo, safe="")))

    getJSONRepos(query) {
      return fetch('https://api.github.com/search/repositories?q=' + query).then(response => response.json());
      // return fetch('https://news.google.com/news/rss/local/section/geo/{}?ned=us&hl=en&gl=US').then(response=>response.json()); 
    }
}