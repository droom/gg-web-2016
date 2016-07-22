$( document ).ready(function() {

	$(".hero-wrap").slick({

		arrows: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		dots: true,
		fade: true,
		responsive: [

		{
			breakpoint: 570,
			settings: {
				arrows: false,
				infinite: false,
				speed: 300,
				autoplay: false,
				dots: true,
				fade: false
			}
		},
		]

	});



	$('.quote-words').slick({
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 700,
			settings: {
				arrows: false,
				dots: true,
				infinite: true,
				speed: 800,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		]
	});






	// var qStateA 	= 	0
	// var qStateB 	= 	0
	// var qWash		= 	$('#wash')
	// var qImg1 		= 	$('#profile-1')
	// var qImg2 		= 	$('#profile-2')
	// var qImgSpoof	= 	$('#profile-3')

	// $('.testimonials').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
	// 	$(qWash).removeClass('turn');

	// 	$(qImg1).attr('src', 'img/components/testimonials/testimonial-'+qStateA+'.png');

	// 	qStateA = currentSlide
	// 	qStateB = nextSlide

	// 	console.log("nextSlide", nextSlide);
	// 	console.log("currentSlide", currentSlide);

	// });

	// $('.testimonials').on('afterChange', function(event, slick, direction){

	// 	$(qWash).addClass('turn');

	// 	$(qImg2).attr('src', 'img/components/testimonials/testimonial-'+qStateB+'.png');

	// });


	

});


