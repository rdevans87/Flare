var search = document.getElementById('shelterBtn');
var shelterList = document.getElementById('shelterList');

search.addEventListener('click',function(){

let url = "https://projects.propublica.org/nonprofits/api/v2/search.json?q=domestic+violence&state%5Bid%5D=OH&ntee%5Bid%5D=5&c_code%5Bid%5D="
// However to make it work, we are going to use the cors-anywhere free service to bypass this
var proxy = 'https://cors-anywhere.herokuapp.com/';
$.ajax({
    // The proxy url expects as first URL parameter the URL to be bypassed
    // https://cors-anywhere.herokuapp.com/{my-url-to-bypass}
    url: proxy + url, 
    // complete:function(data){
    //     console.log("COMPLETE",data);
    // },
    success: function (result) {
        console.log("SUCCESS",result);
        // console.log(result.organizations);
        for(var i = 0; i<result.organizations.length; i++){
          var listItem = document.createElement("li");
          listItem.textContent = result.organizations[i].name
          shelterList.append(listItem);

        }
        console.log("done")
    },
});

});
