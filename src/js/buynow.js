const totalPrice = document.querySelector('.total-price');
const buttons = document.querySelectorAll('.buy-button');
const cart = document.querySelector('.shopping-bag');
const orderForm = document.querySelector('.order-form');

let cartCount = 0;

buttons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let currentBtn = e.target;
		let currentPrice = currentBtn.getAttribute('data-price');
		let numberValue = parseInt(currentPrice, 10);

		cartCount += numberValue;
		totalPrice.textContent = cartCount + '$';
	})
});

cart.addEventListener('click', () => {
	orderForm.style.display = 'block';
});

