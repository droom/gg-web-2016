$( document ).ready(function() {

	$('.unit.stretch.quad .second').css('height', '0px');
	$('.unit.stretch.quad .second').css('opacity', '0');
	$('.unit.stretch.quad').mouseenter(
		function(e) {
			e.preventDefault;

			var second = $(this).find('.second');
			second.css('height', '120px');
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


	});


