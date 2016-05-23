$( document ).ready(function() {

	$(".index-hero").slick({
		arrows: false,
		infinite: true,
		// dots: false,
		// fade: true,
		speed: 300,
		// autoplay: true,
		cssEase: 'ease',

		autoplay: false,
		dots: true,
		fade: false,

	});


	$('.testimonials').slick({
		dots: false,
		arrows: false,
		infinite: false,
		// speed: 1600,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [

		{
			breakpoint: 700,
			settings: {
				// autoplay: true,
				arrows: false,
				dots: true,
				infinite: true,
				speed: 800,
				slidesToShow: 1,
				slidesToScroll: 1,
				// cssEase: 'ease-in-out'
			}
		},
		]
	});



	// $('.testimonials').on('swipe', function(event, slick, direction){
	// 	console.log(direction);
	// });


	$('.testimonials').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide);
		console.log(currentSlide);


		$('#profile-turn').addClass('turn')


		if (nextSlide == 0){
			$('#profile-1').css('outline', '2px solid red');
			$("#profile-2").attr('src', 'img/components/testimonials/testimonial-0.png');
		}

		if (nextSlide == 1){
			$('#profile-1').css('outline', '2px solid blue');
			$("#profile-2").attr('src', 'img/components/testimonials/testimonial-1.png');
		}

		if (nextSlide == 2){
			$('#profile-1').css('outline', '2px solid green');
			$("#profile-2").attr('src', 'img/components/testimonials/testimonial-2.png');
		}
	});



	$('.testimonials').on('afterChange', function(event, slick, direction){
		// console.log(direction);

		$('#profile-turn').removeClass('turn')

	});




});


