(function(){
  var urls = [
    "chrome://apps",
    "https://www.google.com",
    "https://www.reddit.com",
    "https://www.facebook.com",
    "https://www.twitter.com"
  ]
  chrome.tabs.update({ url: urls[Math.floor(Math.random()*urls.length)], highlighted: true });
}());
