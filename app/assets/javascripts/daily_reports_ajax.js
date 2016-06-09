$(document).ready(function(){

  $('a.reports-link').on('click', function(e){
    e.preventDefault();
    $.get($('a.reports-link').attr('href'), function(data){
      data.forEach(function(details) {
        debugger;
        var date = details.date;
        var dailyReport = "<li>" + date + "</li>"
        $('.report-area').append(dailyReport);
      })


    })
  })




})
