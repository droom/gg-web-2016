var noteArray = [];
var noteTotal = 0;
var noteCount = 0;


$( ".note" ).click(function() {

  var maximum = 10;
  var minimum = -10;
  var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  console.log(randomnumber);


  var value = parseInt($(this).data("value"));
  var type = parseInt($(this).data("type"));
  noteArray.push(value);
  noteTotal = noteTotal + value;
  updatePot();
  noteCount++;

  $(".notes").append("<div class=\"note note-"+type+"\" data-add=\""+type+"\" data-count=\""+noteCount+"\"></div>" );

  var latest = $("[data-count=\""+noteCount+"\"]");

  $(latest).css('-webkit-transform', 'rotate('+randomnumber+'deg)');
  // $(latest).css('border', 'solid 3px red');

  // $( latest ).animate({
    // opacity: 1,
    // -webkit-transform:rotate(0deg)
    // transform:rotate(0deg)
//'-webkit-transform: rotate('+randomnumber+'deg)'
    // left: "+=50",
    // height: "toggle"
  // }, 5000, function() {
    // Animation complete.
  // });





});

$( ".pot" ).click(function() {

  if (noteArray.length > 0){
    noteTotal = noteTotal - noteArray.slice(-1)[0];
    noteArray.pop();
    updatePot();
  } else {
    console.log("There's no money on the pot");
  }

  var latest = $("[data-count=\""+noteCount+"\"]");
  var latestData = parseInt($(latest).data("add"));
  latest.attr('data-return', latestData);
  setTimeout(function(){latest.remove();}, 400);
  if (noteCount > 0){noteCount--;}

});

function updatePot(){
  $('.total').text(noteTotal);
}
