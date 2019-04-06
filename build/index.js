"use strict";

$(document).ready(function () {
  $('.slider__container').slick({
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 4.3,
    arrows: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        autoplaySpeed: 1000
      }
    }]
  });
});
var btn = document.querySelector('.hamb-menu');
var headerLinks = document.querySelector('.header__list');
var hiddenMenu = document.querySelector('.hidden-menu');
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
}); //modal window create/show/delete

var featuresButtons = document.querySelectorAll('.features__item');
var featuresList = document.querySelector('.features__list');
featuresButtons.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    var current = event.target;

    var createModal = function createModal() {
      var currentImage = current.firstElementChild.firstElementChild;
      var currentDescription = current.lastElementChild.previousElementSibling.textContent;
      var currentArticle = current.lastElementChild.textContent;
      var currentSRC = currentImage.currentSrc;
      var newWindow = document.createElement('div');
      var closeBtn = document.createElement('div');
      var articleHeading = document.createElement('h4');
      articleHeading.classList.add('article-heading');
      articleHeading.textContent = currentDescription;
      featuresList.appendChild(newWindow);
      newWindow.classList.add('features-article');
      closeBtn.classList.add('close-btn');
      newWindow.appendChild(closeBtn);
      var imageContent = document.createElement('div');
      imageContent.classList.add('image-content');
      imageContent.style.backgroundImage = "url(" + currentSRC + ")";
      imageContent.style.backgroundSize = 'cover';
      newWindow.appendChild(imageContent);
      newWindow.appendChild(articleHeading);
      var articleDesc = document.createElement('p');
      articleDesc.classList.add('article-text');
      articleDesc.textContent = currentArticle;
      newWindow.appendChild(articleDesc);
      closeBtn.addEventListener('click', function () {
        featuresList.removeChild(newWindow);
      });
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
  });
}); //tabs content 

function openTab(evt, tabName) {
  var i, tabcontent; // Get all elements with class="tabcontent" and hide them

  tabcontent = document.getElementsByClassName('features__list');

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  } // Show the current tab, and add an "active" class to the button that opened the tab


  var activeTab = document.getElementById(tabName);
  activeTab.style.display = 'flex';
  console.log(evt);
}

document.getElementById("defaultOpen").click();
var totalPrice = document.querySelector('.total-price');
var buttons = document.querySelectorAll('.buy-button');
var cart = document.querySelector('.shopping-bag');
var orderForm = document.querySelector('.form');
var formTotal = document.querySelector('.form__total-result');
var productName = document.querySelector('.form__product-result');
var cancel = document.querySelector('.form__cancel');
var productNameCount = '';
var cartCount = 0;
var totalItemsInCart = 0;
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var currentBtn = e.target;
    var currentProductName = currentBtn.previousElementSibling;
    var currentPrice = currentBtn.getAttribute('data-price');
    var numberValue = parseInt(currentPrice, 10);
    cartCount += numberValue;
    totalPrice.textContent = cartCount + '$';
    formTotal.textContent = cartCount + '$';
    totalItemsInCart++;
    productNameCount += currentProductName.textContent + ', ';
    productName.textContent = productNameCount;
  });
});
cart.addEventListener('click', function () {
  orderForm.style.left = '50%';
});
cancel.addEventListener('click', function () {
  orderForm.style.left = '-9000px';
  productNameCount = '';
  cartCount = 0;
  totalItemsInCart = 0;
  formTotal.textContent = '';
  productName.textContent = '';
  totalPrice.textContent = '0$';
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcuc2xpZGVyX19jb250YWluZXInKS5zbGljayh7XG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBjZW50ZXJQYWRkaW5nOiAnODBweCcsXG4gICAgc2xpZGVzVG9TaG93OiA0LjMsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzEwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAxMDAwXG4gICAgICB9XG4gICAgfV1cbiAgfSk7XG59KTtcbnZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYi1tZW51Jyk7XG52YXIgaGVhZGVyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19saXN0Jyk7XG52YXIgaGlkZGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tbWVudScpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcpID09PSAnMCcpIHtcbiAgICBoaWRkZW5NZW51LmFwcGVuZENoaWxkKGhlYWRlckxpbmtzKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGFtYi1tZW51LS1hY3RpdmUnKTtcbiAgICBoaWRkZW5NZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tZW51LS1hY3RpdmUnKTtcbiAgICBoZWFkZXJMaW5rcy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2xpc3QtLXBvcHVwJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcsICcxJyk7XG4gIH0gZWxzZSBpZiAoYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcpID09PSAnMScpIHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFtYi1tZW51LS1hY3RpdmUnKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JywgJzAnKTtcbiAgICBoaWRkZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tZW51LS1hY3RpdmUnKTtcbiAgICBoZWFkZXJMaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2xpc3QtLXBvcHVwJyk7XG4gICAgaGlkZGVuTWVudS5yZW1vdmVDaGlsZChoZWFkZXJMaW5rcyk7XG4gIH1cbn0pOyAvL21vZGFsIHdpbmRvdyBjcmVhdGUvc2hvdy9kZWxldGVcblxudmFyIGZlYXR1cmVzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mZWF0dXJlc19faXRlbScpO1xudmFyIGZlYXR1cmVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWF0dXJlc19fbGlzdCcpO1xuZmVhdHVyZXNCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGN1cnJlbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICB2YXIgY3JlYXRlTW9kYWwgPSBmdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcbiAgICAgIHZhciBjdXJyZW50SW1hZ2UgPSBjdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgdmFyIGN1cnJlbnREZXNjcmlwdGlvbiA9IGN1cnJlbnQubGFzdEVsZW1lbnRDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgdmFyIGN1cnJlbnRBcnRpY2xlID0gY3VycmVudC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xuICAgICAgdmFyIGN1cnJlbnRTUkMgPSBjdXJyZW50SW1hZ2UuY3VycmVudFNyYztcbiAgICAgIHZhciBuZXdXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHZhciBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdmFyIGFydGljbGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGFydGljbGVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2FydGljbGUtaGVhZGluZycpO1xuICAgICAgYXJ0aWNsZUhlYWRpbmcudGV4dENvbnRlbnQgPSBjdXJyZW50RGVzY3JpcHRpb247XG4gICAgICBmZWF0dXJlc0xpc3QuYXBwZW5kQ2hpbGQobmV3V2luZG93KTtcbiAgICAgIG5ld1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlcy1hcnRpY2xlJyk7XG4gICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICAgIG5ld1dpbmRvdy5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICB2YXIgaW1hZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbWFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGVudCcpO1xuICAgICAgaW1hZ2VDb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgY3VycmVudFNSQyArIFwiKVwiO1xuICAgICAgaW1hZ2VDb250ZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgIG5ld1dpbmRvdy5hcHBlbmRDaGlsZChpbWFnZUNvbnRlbnQpO1xuICAgICAgbmV3V2luZG93LmFwcGVuZENoaWxkKGFydGljbGVIZWFkaW5nKTtcbiAgICAgIHZhciBhcnRpY2xlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGFydGljbGVEZXNjLmNsYXNzTGlzdC5hZGQoJ2FydGljbGUtdGV4dCcpO1xuICAgICAgYXJ0aWNsZURlc2MudGV4dENvbnRlbnQgPSBjdXJyZW50QXJ0aWNsZTtcbiAgICAgIG5ld1dpbmRvdy5hcHBlbmRDaGlsZChhcnRpY2xlRGVzYyk7XG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVhdHVyZXNMaXN0LnJlbW92ZUNoaWxkKG5ld1dpbmRvdyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKGN1cnJlbnQgIT09IGJ0bikge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoY3VycmVudCAhPT0gYnRuKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IGJ0bikge1xuICAgICAgICAgIGNyZWF0ZU1vZGFsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBjcmVhdGVNb2RhbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBidG4pIHtcbiAgICAgIGNyZWF0ZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcbn0pOyAvL3RhYnMgY29udGVudCBcblxuZnVuY3Rpb24gb3BlblRhYihldnQsIHRhYk5hbWUpIHtcbiAgdmFyIGksIHRhYmNvbnRlbnQ7IC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmNvbnRlbnRcIiBhbmQgaGlkZSB0aGVtXG5cbiAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlYXR1cmVzX19saXN0Jyk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICB0YWJjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSAvLyBTaG93IHRoZSBjdXJyZW50IHRhYiwgYW5kIGFkZCBhbiBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBidXR0b24gdGhhdCBvcGVuZWQgdGhlIHRhYlxuXG5cbiAgdmFyIGFjdGl2ZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYk5hbWUpO1xuICBhY3RpdmVUYWIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgY29uc29sZS5sb2coZXZ0KTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0T3BlblwiKS5jbGljaygpO1xudmFyIHRvdGFsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtcHJpY2UnKTtcbnZhciBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1eS1idXR0b24nKTtcbnZhciBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3BwaW5nLWJhZycpO1xudmFyIG9yZGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG52YXIgZm9ybVRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX3RvdGFsLXJlc3VsdCcpO1xudmFyIHByb2R1Y3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX3Byb2R1Y3QtcmVzdWx0Jyk7XG52YXIgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2NhbmNlbCcpO1xudmFyIHByb2R1Y3ROYW1lQ291bnQgPSAnJztcbnZhciBjYXJ0Q291bnQgPSAwO1xudmFyIHRvdGFsSXRlbXNJbkNhcnQgPSAwO1xuYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY3VycmVudEJ0biA9IGUudGFyZ2V0O1xuICAgIHZhciBjdXJyZW50UHJvZHVjdE5hbWUgPSBjdXJyZW50QnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgdmFyIGN1cnJlbnRQcmljZSA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG4gICAgdmFyIG51bWJlclZhbHVlID0gcGFyc2VJbnQoY3VycmVudFByaWNlLCAxMCk7XG4gICAgY2FydENvdW50ICs9IG51bWJlclZhbHVlO1xuICAgIHRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSBjYXJ0Q291bnQgKyAnJCc7XG4gICAgZm9ybVRvdGFsLnRleHRDb250ZW50ID0gY2FydENvdW50ICsgJyQnO1xuICAgIHRvdGFsSXRlbXNJbkNhcnQrKztcbiAgICBwcm9kdWN0TmFtZUNvdW50ICs9IGN1cnJlbnRQcm9kdWN0TmFtZS50ZXh0Q29udGVudCArICcsICc7XG4gICAgcHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9kdWN0TmFtZUNvdW50O1xuICB9KTtcbn0pO1xuY2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgb3JkZXJGb3JtLnN0eWxlLmxlZnQgPSAnNTAlJztcbn0pO1xuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBvcmRlckZvcm0uc3R5bGUubGVmdCA9ICctOTAwMHB4JztcbiAgcHJvZHVjdE5hbWVDb3VudCA9ICcnO1xuICBjYXJ0Q291bnQgPSAwO1xuICB0b3RhbEl0ZW1zSW5DYXJ0ID0gMDtcbiAgZm9ybVRvdGFsLnRleHRDb250ZW50ID0gJyc7XG4gIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gJyc7XG4gIHRvdGFsUHJpY2UudGV4dENvbnRlbnQgPSAnMCQnO1xufSk7Il0sImZpbGUiOiJpbmRleC5qcyJ9
