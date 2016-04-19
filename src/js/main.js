$( document ).ready(function() {

  var returnShow = new Waypoint({
    element: document.getElementById('steps'),
    handler: function(direction) {
      $("#steps ol").addClass('turn');
    }, offset: 200
  })



});


