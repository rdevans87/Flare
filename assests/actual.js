var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
<<<<<<< HEAD
var zipCode = []
=======


function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    var searchParamsArr = document.location.search.split('&');
  
    // Get the query and format values
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
    
// input API here with key search params
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
            // write query to page so user knows what they are viewing
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
