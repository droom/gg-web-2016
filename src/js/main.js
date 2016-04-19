$( document ).ready(function() {

	var returnShow = new Waypoint({
		element: document.getElementById('steps'),
		handler: function(direction) {
			$("#steps ol").addClass('turn');
		}, offset: 200
	})



	var vidPaused = true

	$('#play').click(function() {
		
		if (vidPaused) {

			$('#movie')[0].play();
			vidPaused = false;

		} else {

			$('#movie')[0].pause(); 
			vidPaused = true;
		}

		console.log("hey");
		return false;
		// vidPaused =! vidPaused;

	});



});


