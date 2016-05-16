$( document ).ready(function() {

	$(".what").slick({
		dots: true,
		infinite: true,
		// adaptiveHeight: true,
		// adaptiveWidth: true,
		fade: true,
  // cssEase: 'linear'
	});

	$(".testimonials").slick({
		dots: true,
		infinite: true,
		// adaptiveHeight: true,
		// adaptiveWidth: true,
		// fade: true,
  // cssEase: 'linear'
	});



	if ( $('.steps').length ) {

		var returnShow = new Waypoint({
			element: document.getElementById('steps'),
			handler: function(direction) {
				$("#steps ol .flip").addClass('turn');
			}, offset: 200
		})
	}

	$('.unit.stretch.quad .second').css('height', '0px');
	$('.unit.stretch.quad .second').css('opacity', '0');
	$('.unit.stretch.quad').mouseenter(
		function(e) {
			e.preventDefault;

			var second = $(this).find('.second');
			second.css('height', '100px');
			second.css('opacity', '1');

		}

		).mouseleave( 
		function(e) {
			e.preventDefault;

			var second = $(this).find('.second');
			second.css('height', '0px');
			second.css('opacity', '0');

		}

		);



	//video


	var vidPaused = true

	$('#play').click(function() {
		
		if (vidPaused) {

			$('#movie')[0].play();
			$('.btnVideo').attr('src', 'img/components/video/pause.png');
			$('.btnVideo').addClass('hide');
			$('section.video h2').addClass('hide');

			vidPaused = false;

		} else {

			$('#movie')[0].pause(); 
			$('.btnVideo').attr('src', 'img/components/video/play.png');
			$('.btnVideo').removeClass('hide');
			$('section.video h2').removeClass('hide');
			
			vidPaused = true;
		}

		console.log("hey");
		return false;

	});



	$('#next').click(function(e) {
		e.preventDefault;
		console.log("next");

		if ($('li.active').is(":last-child")) {
			console.log("nope");
		} else { 
			$('li.active').removeClass("active").next().addClass("active");
		};
	});


	$('#prev').click(function(e) {
		e.preventDefault;
		console.log("next");

		if ($('li.active').is(":first-child")) {
			console.log("nope");
		} else { 
			$('li.active').removeClass("active").prev().addClass("active");
		};

	});


});


