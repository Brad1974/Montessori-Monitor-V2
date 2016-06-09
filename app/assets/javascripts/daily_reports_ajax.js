$(document).ready(function(){

  $('a.reports-link').on('click', function(e){
    e.preventDefault();
    $.get($('a.reports-link').attr('href'), function(data){
      var reportList = ""
      data.forEach(function(details) {

        var date = details.date;
        var dailyReport = "<li>" + date + "</li>"
        reportList += dailyReport
      })
        $('.report-area').html(reportList);


    })
  })




})
