//modal window create/show/delete

const featuresButtons = document.querySelectorAll('.features__item');
const featuresList = document.querySelector('.features__list');

featuresButtons.forEach(btn => {
	btn.addEventListener('click', evt => {
		evt.preventDefault();
		let current = event.target;
		let createModal = function () {
			let currentImage = current.firstElementChild.firstElementChild;
			let currentDescription = current.lastElementChild.previousElementSibling.textContent;
			let currentArticle = current.lastElementChild.textContent;
			let currentSRC = currentImage.currentSrc;
			let newWindow = document.createElement('div');
			let closeBtn = document.createElement('div');
			let articleHeading = document.createElement('h4');

			articleHeading.classList.add('article-heading');
			articleHeading.textContent = currentDescription;
			featuresList.appendChild(newWindow);
			newWindow.classList.add('features-article');
			closeBtn.classList.add('close-btn');
			newWindow.appendChild(closeBtn);
			let imageContent = document.createElement('div');
			imageContent.classList.add('image-content');
			imageContent.style.backgroundImage = "url(" + currentSRC + ")";
			imageContent.style.backgroundSize = 'cover';
			newWindow.appendChild(imageContent);
			newWindow.appendChild(articleHeading);
			let articleDesc = document.createElement('p');
			articleDesc.classList.add('article-text');
			articleDesc.textContent = currentArticle;
			newWindow.appendChild(articleDesc);

			closeBtn.addEventListener('click', function () {
				featuresList.removeChild(newWindow);
			})
		};
		if (current !== btn) {
			evt.stopPropagation();
			if (current !== btn) {
				current = current.parentElement;
				if (current === btn) {
					createModal();
				} else {
					current = current.parentElement;
					createModal();
				}
			}
		} else if (current === btn) {
			createModal();
		}
	})
});


//tabs content 

function openTab(evt, tabName) {
	var i, tabcontent;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName('features__list');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	let activeTab = document.getElementById(tabName);
	activeTab.style.display = 'flex';
	console.log(evt);
}

document.getElementById("defaultOpen").click();

