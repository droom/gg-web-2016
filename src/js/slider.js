$( document ).ready(function() {
	$(".index-hero").slick({
		dots: false,
		infinite: true,
		fade: true,
		speed: 300,
		autoplay: true,
		cssEase: 'ease'
	});

	$(".testimonials").slick({
		dots: true,
		infinite: true,
	});
});


