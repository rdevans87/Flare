$(document).ready(function() {

    var SearchFormEL = document.querySelector("#search-form");

    // var searchButton = $("#search-form")
    // searchButton.click(searchFunction)

    // function searchFunction(event) {
    //     event.preventDefault()
    //     var zipCode = ""
    //     console.log(searchCity)

    //     $.ajax({
    //         type: "GET",
    //         url: "" + zipCode + "",
    //         dataType: "json",
    //         success: function(data) {
    //             console.log(data)

    //         }

    //     })
    // }
// })

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
