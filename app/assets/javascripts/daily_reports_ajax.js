var ready;
ready = function() {

  function retrieveReportIndex(){
    $('a.reports-link').on('click', function(e){
      e.preventDefault();
      var link = $(this).attr('href')
      $.getJSON($('a.reports-link').attr('href'), function(data){
        var reportList = ""
        data.forEach(function(details) {
          var dailyReport = "<li><a href= '/children/" + details.child_id + "/daily_reports/" + details.id + "'>" + details.date + "</a></li> ";
          reportList += dailyReport;
        })
        $('.report-area').html(reportList);
      })
    })
  };

  retrieveReportIndex();


};

$(document).ready(ready);
$(document).on('page:load', ready);
