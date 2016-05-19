$( document ).ready(function() {

	if ( $('.steps').length ) {
		var waypoint1 = new Waypoint({
			element: document.getElementById('steps'),
			handler: function(direction) {
				$("#steps ol .flip").addClass('turn');
			}, offset: 300
		})
	};


	if ( $('header.index').length ) {
		var waypoint3 = new Waypoint({
			element: document.getElementById('hero'),
			handler: function(direction) {

				$("#nav").addClass('small');
				console.log("addClass");

			}, offset: -400
		})
	}


	if ( $('header.index').length ) {
		var waypoint3 = new Waypoint({
			element: document.getElementById('hero'),
			handler: function(direction) {

				$("#nav").removeClass('small');
				console.log("removeClass");

			}, offset: -399
		})
	}

});


