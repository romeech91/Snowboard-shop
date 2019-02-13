
let btn = document.querySelector('.hamb-menu');
let headerLinks = document.querySelector('.header__list');
let hiddenMenu = document.querySelector('.hidden-menu');

btn.addEventListener('click', function () {
	if (btn.getAttribute('data-count') === '0') {
		hiddenMenu.appendChild(headerLinks);
		btn.classList.add('hamb-menu--active');
		hiddenMenu.classList.add('hidden-menu--active');
		headerLinks.classList.add('header__list--popup');
		btn.setAttribute('data-count', '1');
	} else if (btn.getAttribute('data-count') === '1') {
		btn.classList.remove('hamb-menu--active');
		btn.setAttribute('data-count', '0');
		hiddenMenu.classList.remove('hidden-menu--active');
		headerLinks.classList.remove('header__list--popup');
		hiddenMenu.removeChild(headerLinks);
	}
});





