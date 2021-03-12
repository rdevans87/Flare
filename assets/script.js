
$.ajax({
      url: "https://apidata.guidestar.org/essentials/lookup?spouse abuse, prevention of=170&child abuse, prevention of=172&protection against and prevention of neglect, abuse, exploitation.=170"
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Subscription-Key","{subscription key}");
      },
      type: "GET",
      // Request body
      data: "{body}",
  })
  .done(function(data) {
      alert("success");
  })
  .fail(function() {
      alert("error");
  });

var requestURL = ""

  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Reponse \n-------------');
    console.log(response);
  });


  var search = getElementbyId('shelterBtn')


  search.addEventListener('click',function(){
    fetch("https://projects.propublica.org/nonprofits/api/v2/search.json?q=domestic+violence&state%5Bid%5D=OH&ntee%5Bid%5D=5&c_code%5Bid%5D=")
  }
  )




