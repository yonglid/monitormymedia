export default {
  getTwitterTrends(geoNumber) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.twitter.com/1.1/trends/place.json?id=${geoNumber}`;
    // using backticks because echmascript (js) knows how to inject vars into ${} locations
    // https://stackoverflow.com/questions/19105009/how-to-insert-variables-in-javascript-strings
    // how to get xml; just like text instead of response.json() -- must then get result, not just return method call (text())
    // https://stackoverflow.com/questions/39269863/xml-response-from-fetch#39274257
    const DST = "";
    DST += "OAuth ";
    DST += "oauth_consumer_key"; // oauth consumer key
    DST += '"';
    DST += "xvz1evFS4wEEPTGEFPHBog";
    DST += '"';
    DST += ",";
    DST += " ";

    return fetch(proxyurl + url, {
      headers: {
        Authentication: "",
      },
    }).then((response) =>
      response.text().then((text) => {
        console.log(text);
        return response.json;
      })
    );
  },
};
