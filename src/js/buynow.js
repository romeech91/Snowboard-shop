const totalPrice = document.querySelector('.total-price');
const buttons = document.querySelectorAll('.buy-button');
const cart = document.querySelector('.shopping-bag');
const orderForm = document.querySelector('.form');
const formTotal = document.querySelector('.form__total-result');
const productName = document.querySelector('.form__product-result');
const cancel = document.querySelector('.form__cancel');
let productNameCount = '';
let cartCount = 0;
let totalItemsInCart = 0;

buttons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let currentBtn = e.target;
		let currentProductName = currentBtn.previousElementSibling;
		let currentPrice = currentBtn.getAttribute('data-price');
		let numberValue = parseInt(currentPrice, 10);

		cartCount += numberValue;
		totalPrice.textContent = cartCount + '$';
		formTotal.textContent = cartCount + '$';
		totalItemsInCart++;
		productNameCount += currentProductName.textContent + ', ';
		productName.textContent = productNameCount;

	})
});

cart.addEventListener('click', () => {
	orderForm.style.left = '50%';
});

cancel.addEventListener('click', () => {
	orderForm.style.left = '-9000px';
	productNameCount = '';
	cartCount = 0;
	totalItemsInCart = 0;
	formTotal.textContent = '';
	productName.textContent = '';
	totalPrice.textContent = '0$';
});