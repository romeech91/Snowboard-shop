
$(document).ready(function(){
	$('.slider__container').slick({
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 3.5,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 3
				}
			},{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '50px',
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
					autoplaySpeed: 1000
				}
			}
		]
});
});

