var ready;
ready = function() {

// roster ajax functions

  function loadRoster(){
    $.getJSON("/children", function(data){
      var childList = ""
      data.forEach(function(details) {
        var link = "<li class='cn'><a href= '/children/" + details.id + "'>" + details.first_name + " " + details.last_name + "</a></li> ";
        childList += link;
      })
      $('.roster').html(childList);
    })
  }
  loadRoster();

  function loadProfile(){
    $('.roster').on('click', 'a', function(e){
      e.preventDefault();
      var link = $(this).attr('href')
      $.getJSON(link, function(data){debugger; });


    })
  }

  loadProfile();


// Child Show page ajax functions


  function DailyReport(child_id, date, poopy_diapers, wet_diapers, bullying_report, ouch_report){
    this.date = date;
    this.poopy_diapers = poopy_diapers;
    this.wet_diapers = wet_diapers;
    this.bullying_report = bullying_report;
    this.ouch_report = ouch_report;
    this.child_id = child_id;
  }


  function retrieveReportIndex(){
    $('a.reports-link').on('click', function(e){
      e.preventDefault();
      var link = $(this).attr('href')
      $.getJSON($('a.reports-link').attr('href'), function(data){
        if (data.length == 0) {
          $(SELECTOR).html("There are no children registered yet")
        }
        else {
        var reportList = ""
        data.forEach(function(details) {
          debugger;
          var dailyReport = "<li class='rl'><a href= '/children/" + details.child_id + "/daily_reports/" + details.id + "'>" + details.date + "</a></li> ";
          reportList += dailyReport;
        })
        $('.report-area').html(reportList);
      };
      })
    })
  };

  function retrieveReport(){
    $('.report-area').on('click', 'a', function(e){
      e.preventDefault();
      var newReport
      var url = $(this).attr('href')
      $.getJSON(url, function(data){debugger;})
      .done(newFun);
    });
  };

  function newFun(report){
    debugger;
    $('.funhouse').append(report.date);
  }



  //
  // function retrieveGuide(num){
  //   url = "/guides/" + num
  //   $.getJSON(url, function(data){
  //     return data.name;
  //   })
  // }

  // function Dailyreport(child_id, date, poopy_diapers, wet_diapers, bullying_report, ouch_report, observation){
  //   this.date = date;
  //   this.poopy_diapers = poopy_diapers;
  //   this.wet_diapers = wet_diapers;
  //   this.bullying_report = bullying_report;
  //   this.ouch_report = ouch_report;
  //   this.child_id = child_id;
  //   this.observation = observation
  // }

  // DailyReport.prototype.createReport = function(){
  //   var section = "<p>date: " +
  // }


  // guideId = data.observations[0].guide_id
  // newReport = new Dailyreport(data.child_id, data.date, data.poopy_diapers, data.wet_diapers, data.bullying_report, data.ouch_report, data.observations[0].content);


  // var newRepor = new Dailyreport(data.child_id, data.date, data.poopy_diapers, data.wet_diapers, data.bullying_report, data.ouch_report, data.observations[0].content)





  retrieveReportIndex();
  retrieveReport();






};

$(document).ready(ready);
$(document).on('page:load', ready);
