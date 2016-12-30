/**
 * Create a timer for the active tab.
 *
 */
/*
function startTimer() {
  // Create a new timer for the url the user is on
  var myTimer = new chrome.Interval();
  document.getElementById('status').textContent = "Awesome";
}

chrome.browserAction.onClicked.addListener(function(tab) {

})

chrome.runtime.onInstalled.addListener(function(details){

})

chrome.runtime.onStartup.addListener(function(details){

})*/

var theNewScript = document.createElement("script");
theNewScript.type = "text/javascript";
theNewScript.src = "jquery.js";
console.log("popup.js");

window.onload = function() {
  console.log("window.onload");

  $.get("https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=87985eb53a484a09993e99061cc35b03", function(newsy){
    var br = document.createElement('br');
    var centr = document.createElement('center');
    for (var i = 0; i < newsy.articles.length; i++) {
      // Create new heading tag
      var link = document.createElement('a');
      link.textContent = newsy.articles[i].title;
      link.href = newsy.articles[i].url;

      // Grab the image and set the attributes
      var newImg = document.createElement("IMG");
      newImg.src = newsy.articles[i].urlToImage;

      document.body.appendChild(link);
      document.body.appendChild(newImg);
      document.body.appendChild(br);
    }

    var credits = document.createElement('P');
    credits.textContent = "Powered by NewsAPI.org";
    document.body.appendChild(credits);
  });
}

window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})


/*
$(document).ready(function(){
  $.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=87985eb53a484a09993e99061cc35b03", function(data){
    var jsonStr = JSON.stringify(data);
    var insert = document.getElementById("data");
    insert = "TRUMP 2016";
  });
  console.log(".ready ran");
});
*/
