$(document).ready(function(){

  $('a.reports-link').on('click', function(e){
    e.preventDefault();
    var link = $(this).attr('href')
    $.get($('a.reports-link').attr('href'), function(data){
      var reportList = ""
      data.forEach(function(details) {
        var dailyReport = "<li><a href= '/children/" + details.child_id + "/daily_reports/" + details.id + "'>" + details.date + "</a></li> ";
        reportList += dailyReport;
      })
    $('.report-area').html(reportList);


    })
  })



})


// original link i want to copy:
// <a href="/children/1/daily_reports/1">Jun 01, 2016</a>
