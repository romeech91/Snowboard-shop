const mySiema = new Siema({
	selector: '.siema',
	duration: 200,
	easing: 'ease-out',
	perPage: 4,
	startIndex: 0,
	draggable: true,
	multipleDrag: true,
	threshold: 20,
	loop: true,
	rtl: false
});

let prevBTN = document.querySelector('.prev');
let nextBTN = document.querySelector('.next');

prevBTN.addEventListener('click', () => mySiema.prev());
nextBTN.addEventListener('click', () => mySiema.next());
