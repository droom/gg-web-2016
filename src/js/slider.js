$( document ).ready(function() {

	$(".index-hero").slick({

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
				infinite: true,
				speed: 300,
				autoplay: true,
				dots: true,
				fade: false,
			}
		},

		]


	});


	$('.testimonials').slick({
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



	// $('.testimonials').on('swipe', function(event, slick, direction){
	// 	console.log(direction);
	// });


	var qState 	= 	0
	var qOver	= 	$('#profile-overlay')
	var qWash	= 	$('#wash')

	var q1 		= 	$('#profile-1')
	var q2 		= 	$('#profile-2')




	$('.testimonials').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
		$(qWash).css('opacity', '1');

		$(qOver).attr('src', 'img/components/testimonials/testimonial-'+qState+'.png');
		// $(q1).attr('src', 'img/components/testimonials/testimonial-'+nextSlide+'.png');
		// $(q2).attr('src', 'img/components/testimonials/testimonial-'+currentSlide+'.png');
		qState = nextSlide

	});



	$('.testimonials').on('afterChange', function(event, slick, direction){

		$(qWash).css('opacity', '0');
		$(qOver).attr('src', 'img/components/testimonials/testimonial-'+qState+'.png');


	});




});


