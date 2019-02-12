$(document).ready(function(){
	$('.slider__container').slick({
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 3.5,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
});
});

var currentSlide = $('.slider__container').slick('slickCurrentSlide');
currentSlide.addClass('current-slide');