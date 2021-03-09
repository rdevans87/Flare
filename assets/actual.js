var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form')

var zipCode = []


function getParams() {
    var searchParamsArr = document.location.search.split('&');

    var query = searchParamsArr[0].split('=').pop();
  
    searchApi(query);

  }

  function printResults(resultObj) {
    console.log(resultObj);

    var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';


resultBody.append(titleEl, bodyContentEl, linkButtonEl);

resultContentEl.append(resultCard);

}
    
funnction searchApi(query, format) {
        var locQueryUrl = "";
      
        if (format) {
          locQueryUrl =  "" + format + "";
        }
      
        locQueryUrl = locQueryUrl + "" + query
        fetch(locQueryUrl)
          .then(function (response) {
            if (!response.ok) {
              throw response.json();
            }
      
            return response.json();
          })
          .then(function (locRes) {
           
            resultTextEl.textContent = locRes.search.query;
      
            console.log(locRes);
      
            if (!locRes.results.length) {
              console.log('No results found!');
              resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
            } else {
              resultContentEl.textContent = '';
              for (var i = 0; i < locRes.results.length; i++) {
                printResults(locRes.results[i]);
              }
            }
          })
          .catch(function (error) {
            console.error(error);
          });





    
  }  
    function handleSearchFormSubmit(event) {
        event.preventDefault();
      
        var searchInputVal = document.querySelector('#search-input').value;

    

    if (!searchInputVal) {
        console.error('You need a zipcode!');
        return;
      }
    
      searchApi(searchInputVal);
}

    searchFormEl.addEventListener('submit', handleSearchFormSubmit);

getParams();
>>>>>>> e543d24ee5f8e7c759bf4af1445499c5727b4c1d



$(document).ready(function()
function handleSearchFormSubmit (event) {
event.preventDefault();

var searchInputVal = document.querySelector('#search-input').value;

if (!searchInputVal) {
  console.error('You need a search input value!');
  return;
}

var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

location.assign(queryString);

};


GET https://apidata.guidestar.org/charitycheck/v1/54-1774039 HTTP/1.1

Host: apidata.guidestar.org
Subscription-Key: {Your Subscription Key}

POST: https://apidata.guidestar.org/essentials/v2

var searchButton = $("#search-form")
searchButton.click(searchFunction)
function searchFunction(event) {
  
  event.preventDefault()
  var zipCode = ""
  console.log(searchCity)

  $.ajax({
type: "GET",
url: "" + zipCode + "",
dataType: "json",
success: function(data) {} 


console.log(data)
