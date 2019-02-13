
$(document).ready(function(){
	$('.slider__container').slick({
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 3.5,
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '75px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '50px',
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 1000
				}
			}
		]
});
});

