
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







