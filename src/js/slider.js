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


	$('.quote').slick({
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


	// var stateA 	= 	0
	// var stateB 	= 	0
	// // var before 		= 	$('#iso-before')
	// // var after 		= 	$('#iso-after')
	// // var spoof	= 	$('#iso-spoof')
	// $('.quote-words').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// // 	$(qWash).removeClass('turn');
	// 	$(before).attr('src', 'img/components/quote/gogetter-'+stateA+'.png');
	// 	stateA = currentSlide
	// 	stateB = nextSlide
	// 	console.log("nextSlide", nextSlide);
	// 	console.log("currentSlide", currentSlide);
	// });
	// $('.testimonials').on('afterChange', function(event, slick, direction){
	// // 	$(qWash).addClass('turn');
	// 	$(after).attr('src', 'img/components/quote/gogetter-'+stateB+'.png');
	// });


	

});


