import { json } from "body-parser";

export default {
  getTwitterTrends(geoNumber) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.twitter.com/1.1/trends/place.json?id=${geoNumber}`;
    // using backticks because echmascript (js) knows how to inject vars into ${} locations
    // https://stackoverflow.com/questions/19105009/how-to-insert-variables-in-javascript-strings
    // how to get xml; just like text instead of response.json() -- must then get result, not just return method call (text())
    // https://stackoverflow.com/questions/39269863/xml-response-from-fetch#39274257

    return fetch(proxyurl + url, {
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAEEXEwEAAAAAUzuxoUVFX8YuS9ityomzh0GVgkU%3DjUs9d4pgXA1BIaGBVNRujoPXd4kMWGBXheGXPk5I0DxGqwQlOC",
      },
    }).then(
      (response) =>
        response.json().then((json) => {
          console.log(json);
          console.log("JSON RESPONSE TYPE: ", json);
          return json;
        })
      // response.text().then((text) => {
      //   console.log("TRENDS!!");
      //   console.log(text);
      //   return response.json;
      // })
    );
  },
  getTweets(query, result_type, count) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${query}&result_type=${result_type}&count=%0A${count}`;

    return fetch(proxyurl + url, {
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAEEXEwEAAAAAUzuxoUVFX8YuS9ityomzh0GVgkU%3DjUs9d4pgXA1BIaGBVNRujoPXd4kMWGBXheGXPk5I0DxGqwQlOC",
      },
    }).then((response) =>
      response.json().then((json) => {
        console.log("TWEETS!!");
        console.log(json);
        console.log(json["0"]);
        return json;
      })
    );
  },
};
