// var newReport
// var ready;
// ready = function() {
//
  // function loadReportIndex(){
  //   $('a.reports-link').on('click', function(event){
  //     event.preventDefault();
  //     var url = $(this).attr('href')
  //     $.getJSON(url, function(data){
  //       var reportList = "";
  //       data.forEach(function(details) {
  //       var dailyReport = "<div class='dr'><li class='rl'><a href= '/children/" + details[2] + "/daily_reports/" + details[1] + "'>" + details[0] + "</a></li></div> ";
  //       reportList += dailyReport;
  //       })
  //       $('.report-area').html(reportList);
  //     })
  //   })
  // }
  // loadReportIndex();
//
  // function DailyReport(child_id, date, poopy_diapers, wet_diapers, bullying_report, ouch_report, kind_acts, observation){
  //   this.date = date;
  //   this.poopy_diapers = poopy_diapers;
  //   this.wet_diapers = wet_diapers;
  //   this.bullying_report = bullying_report;
  //   this.ouch_report = ouch_report;
  //   this.child_id = child_id;
  //   this.kind_acts = kind_acts;
  //   this.observation = observation;
  // }
//   //
//   function buildDailyReport(data){
//     report = new DailyReport(data.child_id, data.date, data.poopy_diapers, data.wet_diapers, data.bullying_report, data.ouch_report, data.kind_acts, data.observations);
//
//     report.insertIntoPage();
//   }
//   //
//   DailyReport.prototype.insertIntoPage = function(){
//     var lineZero = "</br><hr><p> Date: " + this.date + "</p> ";
//     var lineOne = "<p> Diaper Changes:</p><ul> ";
//     var lineTwo = "<li> Wet Diapers: " + this.wet_diapers + "</li> ";
//     var lineThree = "<li> Poopy Diapers: " + this.poopy_diapers + "</li></ul> ";
//     if (this.bullying_report.length > 0) {
//     var lineFour = "<p> Bullying Incident: " + this.bullying_report + "</p> "} else {var lineFour = ""};
//     if (this.ouch_report.length > 0) {
//     var lineFive = "<p> Ouch Incident: " + this.ouch_report + "</p>"} else {var lineFive = ""};
//     if (this.kind_acts.length > 0) {
//     var lineSix = "<p> Kind Acts Observed Today: " + this.kind_acts[0].act + "</p>"} else {var lineFive = ""};
//     var template ="<div class='report'>" + lineZero + lineOne + lineTwo + lineThree + lineFour + lineFive + lineSix +"<hr></br></div>";
//     if ($(newReport).find('p').length === 0) {
//     $(newReport).append(template);}
//     else {$(newReport).find('.report').remove() }
//   }
//
//   function loadReport(){
//     $('.report-area').on('click', 'a', function(e){
//       e.preventDefault();
//       newReport = $(this).closest('div')
//       var url = $(this).attr('href')
//       $.getJSON(url, function(data){})
//       .done(buildDailyReport);
//     });
//   };
//
//   loadReport();
//
// };
//
// $(document).ready(ready);
// $(document).on('page:load', ready);
