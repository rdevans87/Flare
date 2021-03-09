
$(function() {
  var params = {
      // Request parameters
  };

  $.ajax({
      url: "https://apidata.guidestar.org/essentials/lookup?" + $.param(params),
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
});







