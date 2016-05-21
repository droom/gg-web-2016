$( document ).ready(function() {

	if ( $('header.index').length ) {
		var waypoint3 = new Waypoint({
			element: document.getElementById('waypoint-1'),

			handler: function(direction) {
				$("#nav").addClass('small');
				$("#steps ol .flip").addClass('turn');
				console.log("addClass");

			}, offset: -400
		})

		var waypoint3 = new Waypoint({
			element: document.getElementById('waypoint-1'),
			handler: function(direction) {

				$("#nav").removeClass('small');
				console.log("removeClass");

			}, offset: -399
		})
	}

});


