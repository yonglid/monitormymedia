export default {
  getRssXMLFeed(city, state) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = `http://news.google.com/news?geo=${geo}&output=rss`
    // const url = `https://news.google.com/news/rss/headlines/section/geo/${geo}`
    const url = `https://news.google.com/news/rss/headlines/section/geo/${city}${state}`;
    var parser, xmlDoc;

    // using backticks because echmascript (js) knows how to inject vars into ${} locations
    // https://stackoverflow.com/questions/19105009/how-to-insert-variables-in-javascript-strings
    // how to get xml; just like text instead of response.json() -- must then get result, not just return method call (text())
    // https://stackoverflow.com/questions/39269863/xml-response-from-fetch#39274257
    return fetch(proxyurl + url).then((response) =>
      response.text().then((text) => {
        console.log(text);
        // $(text).find("item").each(function (){
        //   var el = $(this);
        //   console.log(el.find("title"))

        // })
        if (window.DOMParser) {
          parser = new DOMParser();
          xmlDoc = parser.parseFromString(text, "text/xml");
        } // Internet Explorer https://stackoverflow.com/questions/53412949/activexobject-is-not-defined-no-undef-react-js
        else {
          xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = false;
          xmlDoc.loadXML(text);
        }
        var items = xmlDoc.getElementsByTagName("item");

        // couldn't get .map to work or .foreach
        var arrayResponse = [];
        for (var itemIndex = 0; itemIndex < items.length; itemIndex++) {
          var titleIndex = 0;
          var linkIndex = 1;
          var guidIndex = 2;
          var titleNodeVal =
            items[itemIndex].childNodes[titleIndex].childNodes[0].nodeValue;
          var linkNodeVal =
            items[itemIndex].childNodes[linkIndex].childNodes[0].nodeValue;
          var guidNodeVal =
            items[itemIndex].childNodes[guidIndex].childNodes[0].nodeValue;
          console.log(titleNodeVal);
          console.log(linkNodeVal);
          console.log(guidNodeVal);

          // var itemsChildren = items[itemIndex].children;
          // for (var childrenIndex = 0; childrenIndex < itemsChildren.length; childrenIndex++) {
          //   // how you would get title or link within item: console.log(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
          //   // thus we also need the .childnodes[0] tacked on after already getting childnode from item
          //   var nodeVal = items[itemIndex].childNodes[childrenIndex].childNodes[0].nodeValue;
          //   var nodeTag = items[itemIndex].childNodes[childrenIndex].childNodes[0].nodeTag;
          //   console.log(nodeVal);
          //   console.log(nodeTag);
          // }

          var obj = new Object();
          obj.title = titleNodeVal;
          obj.link = linkNodeVal;
          obj.id = guidNodeVal;
          // var response= JSON.stringify(obj);
          arrayResponse.push(obj);
        }
        var responseObject = new Object();
        responseObject.total_count = arrayResponse.length;
        responseObject.items = arrayResponse;

        return JSON.stringify(responseObject);
      })
    );
  },
};
