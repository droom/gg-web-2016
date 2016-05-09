$( document ).ready(function() {

	if ( $('.steps').length ) {

		var returnShow = new Waypoint({
			element: document.getElementById('steps'),
			handler: function(direction) {
				$("#steps ol .flip").addClass('turn');
			}, offset: 200
		})
	}






	var vidPaused = true

	$('#play').click(function() {
		
		if (vidPaused) {

			$('#movie')[0].play();
			$('.btnVideo').attr('src', 'img/pause.png');
			$('.btnVideo').addClass('hide');
			vidPaused = false;

		} else {

			$('#movie')[0].pause(); 
			$('.btnVideo').attr('src', 'img/play.png');
			$('.btnVideo').removeClass('hide');
			vidPaused = true;
		}

		console.log("hey");
		return false;

	});






});


