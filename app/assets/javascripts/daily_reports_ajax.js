var newReport
var ready;
ready = function() {

  function loadReportIndex(){
    $('a.reports-link').on('click', function(event){
      event.preventDefault();
      var url = $(this).attr('href')
      $.getJSON(url, function(data){
        var reportList = "";
        data.forEach(function(details) {
        var dailyReport = "<div class='dr'><li class='rl'><a href= '/children/" + details[2] + "/daily_reports/" + details[1] + "'>" + details[0] + "</a></li></div> ";
        reportList += dailyReport;
        })
        $('.report-area').html(reportList);
      })
    })
  }
  loadReportIndex();

  function DailyReport(child_id, date, poopy_diapers, wet_diapers, bullying_report, ouch_report, kind_acts, observation){
    this.date = date;
    this.poopy_diapers = poopy_diapers;
    this.wet_diapers = wet_diapers;
    this.bullying_report = bullying_report;
    this.ouch_report = ouch_report;
    this.child_id = child_id;
    this.kind_acts = kind_acts;
    this.observation = observation;
  }
  //
  function buildDailyReport(data){
    report = new DailyReport(data.child_id, data.date, data.poopy_diapers, data.wet_diapers, data.bullying_report, data.ouch_report, data.kind_acts, data.observations);

    report.insertIntoPage();
  }
  //
  DailyReport.prototype.insertIntoPage = function(){
    var lineZero = "</br><hr><p> Date: " + this.date + "</p> ";
    var lineOne = "<p> Diaper Changes:</p><ul> ";
    var lineTwo = "<li> Wet Diapers: " + this.wet_diapers + "</li> ";
    var lineThree = "<li> Poopy Diapers: " + this.poopy_diapers + "</li></ul> ";
    if (this.bullying_report.length > 0) {
    var lineFour = "<p> Bullying Incident: " + this.bullying_report + "</p> "} else {var lineFour = ""};
    if (this.ouch_report.length > 0) {
    var lineFive = "<p> Ouch Incident: " + this.ouch_report + "</p>"} else {var lineFive = ""};
    if (this.kind_acts.length > 0) {
    var lineSix = "<p> Kind Acts Observed Today: " + this.kind_acts[0].act + "</p>"} else {var lineFive = ""};
    var template ="<div class='report'>" + lineZero + lineOne + lineTwo + lineThree + lineFour + lineFive + lineSix +"<hr></br></div>";
    if ($(newReport).find('p').length === 0) {
    $(newReport).append(template);}
    else {$(newReport).find('.report').remove() }
  }

  //

  //
  function loadReport(){
    $('.report-area').on('click', 'a', function(e){
      e.preventDefault();
      newReport = $(this).closest('div')
      var url = $(this).attr('href')
      $.getJSON(url, function(data){})
      .done(buildDailyReport);
    });
  };

  loadReport();
  //
  // function newFun(report){
  //   $('.funhouse').append(report.date);
  // }
  //
  //
  //
  // //
  // // function retrieveGuide(num){
  // //   url = "/guides/" + num
  // //   $.getJSON(url, function(data){
  // //     return data.name;
  // //   })
  // // }
  //
  // // function Dailyreport(child_id, date, poopy_diapers, wet_diapers, bullying_report, ouch_report, observation){
  // //   this.date = date;
  // //   this.poopy_diapers = poopy_diapers;
  // //   this.wet_diapers = wet_diapers;
  // //   this.bullying_report = bullying_report;
  // //   this.ouch_report = ouch_report;
  // //   this.child_id = child_id;
  // //   this.observation = observation
  // // }
  //
  // // DailyReport.prototype.createReport = function(){
  // //   var section = "<p>date: " +
  // // }
  //
  //
  // // guideId = data.observations[0].guide_id
  // // newReport = new Dailyreport(data.child_id, data.date, data.poopy_diapers, data.wet_diapers, data.bullying_report, data.ouch_report, data.observations[0].content);
  //
  //
  // // var newRepor = new Dailyreport(data.child_id, data.date, data.poopy_diapers, data.wet_diapers, data.bullying_report, data.ouch_report, data.observations[0].content)
  //
  //
  //
  //
  //
  // retrieveReportIndex();
  // retrieveReport();






};

$(document).ready(ready);
$(document).on('page:load', ready);


// $('.childinfo').hide();
//
// function loadChild(){
//   var url = "/children/" + $('.childinfo').text()
//   $.getJSON(url, function(data){})
//   .done(buildChild)
// }
//
// function Child(id, last_name, first_name, birthdate, allergies, diapers_inventory, bully_rating, ouch_rating, kind_acts, gifts){
//   this.last_name = last_name;
//   this.first_name = first_name;
//   this.birthdate = birthdate;
//   this.allergies = allergies;
//   this.diapers_inventory = diapers_inventory;
//   this.bully_rating = bully_rating;
//   this.ouch_rating = bully_rating;
//   this.kind_acts = kind_acts;
//   this.gifts = gifts;
//   this.id = id
// }
//
// function buildChild(data){
//   var newChild = new Child(data.id, data.last_name, data.first_name, data.birthdate, data.allergies, data.diapers_inventory, data.bully_rating, data.ouch_rating, data.kind_acts.length, data.gifts.length);
//   newChild.insertIntoPage();
// }
//
// loadChild();
//
// Child.prototype.insertIntoPage = function(){
//   var lineZero = "<h1 class='top_banner'> " + this.first_name + " " + this.last_name + "'s Profile Page</h1></br></br>"
//   var lineOne = "<p> Birthdate " + this.birthdate + "</p> "
//   var lineTwo = "<p> Bully Rating: " + this.bully_rating + "</p> "
//   var lineThree = "<p> Ouch Rating: " + this.ouch_rating + "</p> "
//   var lineFour = " <p> Observed Performing Acts of Kindness: " + this.kind_acts + "</p> "
//   var lineFive = " <p> Observed Receiving Acts of Kindness: " + this.gifts + "</p> "
//   var lineSix = " <p> Allergies? " + this.allergies + "</p> "
//   var lineSeven = " <p> Current Diaper Inventory: " + this.diapers_inventory + "</p>"
//   var lineEight = " <p><a href= '/children/" + this.id + "/edit'>edit profile</a></p>"
//   var lineNine = "<p><%= link_to 'delete profile', child_path(@child), method: :delete, data: { confirm 'Are you sure?'} %><p>"
//   var template = lineZero + lineOne + lineTwo + lineThree + lineFour + lineFive + lineSix + lineSeven + lineEight + lineNine;
//   $('.main-profile').append(template);
// }
//
// function deleteChild() {
//   $('.main-profile').on('click', 'a.delete', function(data){
//     url = $(this).attr('href')
//     $.ajax({url: url, type: 'DELETE', datatype: 'JSON'})
//     })
// }
// deleteChild();
