var searchButtonEl = document.getElementById("#shelterBtn")
var shelterContainerEl = document.querySelector("shelterContainer")

var requestUrl = "https://projects.propublica.org/nonprofits/api/v2/search.json?q=domestic+violence&state%5Bid%5D=OH&ntee%5Bid%5D=5&c_code%5Bid%5D=";

// AJAX call requires a third party library, jQuery
$.ajax({
  url: requestUrl, mode: "no-cors",
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
});


