var ready;
ready = function() {

// roster ajax functions

Child.prototype.insertIntoPage = function(){
  var lineZero = "<h1> " + this.first_name + " " + this.last_name + "</h1>"
  var lineOne = "<p> Birthdate " + this.birthdate + "</p> "
  var lineTwo = "<p> Bully Rating: " + this.bully_rating + "</p> "
  var lineThree = "<p> Ouch Rating: " + this.ouch_rating + "</p> "
  var lineFour = " <p> Observed Performing Acts of Kindness: " + this.kind_acts + "</p> "
  var lineFive = " <p> Observed Receiving Acts of Kindness: " + this.gifts + "</p> "
  var lineSix = " <p> Allergies? " + this.allergies + "</p> "
  var lineSeven = " <p> Current Diaper Inventory: " + this.diapers_inventory + "</p> "
  var lineEight = " <p><a href= '/children/" + this.id + "'>Click here to visit " + this.first_name + "'s Full Page</a></p>"
  var template = lineZero +lineOne + lineTwo + lineThree + lineFour + lineFive + lineSix + lineSeven + lineEight
  $('#temp').html(template);
}

function Child(id, last_name, first_name, birthdate, allergies, diapers_inventory, bully_rating, ouch_rating, kind_acts, gifts){
  this.last_name = last_name;
  this.first_name = first_name;
  this.birthdate = birthdate;
  this.allergies = allergies;
  this.diapers_inventory = diapers_inventory;
  this.bully_rating = bully_rating;
  this.ouch_rating = bully_rating;
  this.kind_acts = kind_acts;
  this.gifts = gifts;
  this.id = id
}

function buildChild(data){

  var newChild = new Child(data.id, data.last_name, data.first_name, data.birthdate, data.allergies, data.diapers_inventory, data.bully_rating, data.ouch_rating, data.kind_acts.length, data.gifts.length);
  newChild.insertIntoPage();
}




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
      $.getJSON(link, function(data){})
      .done(buildChild);
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
