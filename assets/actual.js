// $.ajax({
//   url: "https://apidata.guidestar.org/essentials/lookup?spouseabusepreventionof=170&childabusepreventionof=172&protectionagainstandpreventionofneglectabuseexploitation=170 HTTP/1.1"
//     method: 'GET',
//     HOST: "apidata.guidestar.org"
//     Subscription-Key: {"6f73df9b3de24f319712e5cc4595ec98"};
// }) .then(function (response) {
//     console.log('Ajax Reponse \n-------------');
//     console.log(response);
// });




// url: "https://apidata.guidestar.org/essentials/lookup?
// spouseabusepreventionof=170
// &childabusepreventionof=172
// &protectionagainstandpreventionofneglectabuseexploitation=170 HTTP/1.1"

// var params = {
//   spouseabusepreventionof: 170,
//   childabusepreventionof:172,

// };
// $.ajax({
//   url: "https://apidata.guidestar.org/essentials/lookup?" + $.param(params),
//   beforeSend: function(xhrObj){
//       // Request headers
//       xhrObj.setRequestHeader("Subscription-Key","6f73df9b3de24f319712e5cc4595ec98");
//   },
//   type: "GET",
//   // Request body
//   data: "{body}",
// })
// .done(function(data) {
//   alert("success");
//   console.log(data);
// })
// .fail(function() {
//   alert("error");
// });
  

// / // Request body
//   data: "{body}"
//   {
//     "search_terms" "",
//     "from": 0,
//     "size": 25,
//     "sort": {
//       "sort_by": "organization_name",
//       "ascending": true
//     },
//     "filters": {
//       "geography": {
//         "state": [
//           "OH"
//         ],
//         "zip": "43206",
//         "radius": 50,
//         "msa": [
//           "OH - Columbus"
//         ],
//         "city": [],
//         "county": [
//           "Franklin"
//         ]
//       },
//       "organization": {
//         "profile_levels": [
//           ""
//         ],
//         "ntee_major_codes": [
//           "O00; O_youthDevelopment",
//           "P00; P_humanServicesMultipurpose"
//         ],
//         "ntee_minor_codes": [
//           "F60 Counseling Support Groups",
//           "F42 Rape Victim Services",
//           "I70 Protection Against and Prevention of Neglect, Abuse, Exploitation",
//           "I72 Child Abuse, Prevention of",
//           "I51 Dispute Resolution/Mediation Services",
//           "O20 Youth Centers, Clubs, (includes Boys/Girls Clubs)- Multipurpose",
//           "P43 Family Violence Shelters and Services",
//           "P60 Emergency Assistance (Food, Clothing, Cash)",
//           "P42 Single Parent Agencies/Services"
//         ],
//         "subsection_codes": [],
//         "foundation_codes": [],
//         "bmf_status": false,
//         "pub78_verified": false,
//         "affiliation_type": {
//           "parent": false,
//           "subordinate": false,
//           "independent": false,
//           "headquarters": false
//         },
//         "specific_exclusions": {
//           "exclude_revoked_organizations": false,
//           "exclude_defunct_or_merged_organizations": false
//         },
//         "number_of_employees_range": {
//           "min": 0,
//           "max": 0
//         },
//         "form_types": {
//           "f990": false,
//           "f990pf": false,
//           "required_to_file_990t": false
//         },
//         "audits": {
//           "a_133_audit_performed": false
//         }
//       },
//       "financials": {
//         "form990_total_revenue": {
//           "min": 0,
//           "max": 0
//         },
//         "form990_total_expenses": {
//           "min": 0,
//           "max": 0
//         },
//         "form990_total_assets": {
//           "min": 0,
//           "max": 0
//         }
//       }
//     }
//   }

  $.ajax({url: "demo_test.txt", success: function(result){
    $("#div1").html(result);
  }});
//.fail(function() {
 // alert("error");
///}); 
var search = getElementbyId('shelterBtn')


search.addEventListener('click',function(){
  fetch()
}
)