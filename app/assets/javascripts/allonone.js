var childLine
var ready;
ready = function() {

  function loadRoster(){
    $.getJSON("/children", function(data){
      var childList = ""
      data.forEach(function(details) {
        var link = "<div class='child-line'><li><a class= 'child-a' href= '/children/" + details.id + "'>" + details.first_name + " " + details.last_name + "</a></li></div> ";
        childList += link;
      })
      if (childList.length > 0) {
        $('.roster').html(childList)}
      else {
        $('.roster').html("<p>There are no children enrolled yet</p>")
      }
    })
  }

  loadRoster();

  function loadProfile(){
    $('.roster').on('click', 'a.child-a', function(e){
      e.preventDefault();
      childLine = $(this).closest('div')
      var url = $(this).attr('href')
      $.getJSON(url, function(data){})
      .done(buildChild)
    })
  }

  loadProfile();

  function buildChild(data){
    var newChild = new Child(data.id, data.last_name, data.first_name, data.birthdate, data.allergies, data.diapers_inventory, data.bully_rating, data.ouch_rating, data.kind_acts.length, data.gifts.length);
    newChild.insertIntoPage();
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

  Child.prototype.insertIntoPage = function(){

    var lineOne = "<hr><p> Birthdate " + this.birthdate + "</p> "
    var lineTwo = "<p> Bully Rating: " + this.bully_rating + "</p> "
    var lineThree = "<p> Ouch Rating: " + this.ouch_rating + "</p> "
    var lineFour = " <p> Observed Performing Acts of Kindness: " + this.kind_acts + "</p> "
    var lineFive = " <p> Observed Receiving Acts of Kindness: " + this.gifts + "</p> "
    var lineSix = " <p> Allergies? " + this.allergies + "</p> "
    var lineSeven = " <p> Current Diaper Inventory: " + this.diapers_inventory + "</p> "
    var lineEight = "<p><a data-details='" + this.id + "' href='#'>edit profile</a> - "
    var lineNine = "<a class ='delete' data-details='" + this.id + "' href='#'>delete profile</a></p>"
    var template ="<div data-details='" + this.id + "' class='profile'>" + lineOne + lineTwo + lineThree + lineFour + lineFive + lineSix + lineSeven + lineEight + lineNine + "<hr></div>"
    if ($(childLine).find('p').length === 0) {
    $(childLine).append(template);}
    else {$(childLine).find('.profile').remove() }
  }

  function deleteChild(){
    $('.roster').on('click', 'a.delete', function(event){
      var choice = confirm('Do you really want to delete this record?');
      if(choice === true) {
      event.stopPropagation();
      var url = "/children/" + $(this).data('details')
      $.ajax({url: url, type: "DELETE"})
      .done(function(success){
        $('div [data-details=' +success.id +']').parent().remove()
      });
    };
    });

  };

  deleteChild();










  function loadStats(){
    $('.class-stats').hide();
    $('#stat-button').on('click', function(){
      $('.class-stats').toggle();
    })
  }
  loadStats();

};

$(document).ready(ready);
$(document).on('page:load', ready);
