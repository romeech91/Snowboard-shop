"use strict";$(document).ready(function(){$(".slider__container").slick({centerMode:!0,centerPadding:"80px",slidesToShow:3.5,arrows:!0,responsive:[{breakpoint:1024,settings:{arrows:!1,centerMode:!0,centerPadding:"10px",slidesToShow:3}},{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"50px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"50px",slidesToShow:1,autoplay:!0,autoplaySpeed:1e3}}]})});var btn=document.querySelector(".hamb-menu"),headerLinks=document.querySelector(".header__list"),hiddenMenu=document.querySelector(".hidden-menu");btn.addEventListener("click",function(){"0"===btn.getAttribute("data-count")?(hiddenMenu.appendChild(headerLinks),btn.classList.add("hamb-menu--active"),hiddenMenu.classList.add("hidden-menu--active"),headerLinks.classList.add("header__list--popup"),btn.setAttribute("data-count","1")):"1"===btn.getAttribute("data-count")&&(btn.classList.remove("hamb-menu--active"),btn.setAttribute("data-count","0"),hiddenMenu.classList.remove("hidden-menu--active"),headerLinks.classList.remove("header__list--popup"),hiddenMenu.removeChild(headerLinks))});var items=document.querySelectorAll(".features__item"),featuresList=document.querySelector(".features__list");items.forEach(function(e){e.addEventListener("click",function(e){var t=e.target,i=t.firstElementChild.firstElementChild,a=t.lastElementChild.textContent,s=i.currentSrc,u=document.createElement("div"),d=document.createElement("div"),o=document.createElement("h4");o.classList.add("article-heading"),o.textContent=a,featuresList.appendChild(u),u.classList.add("features-article"),d.classList.add("close-btn"),u.appendChild(d);var r=document.createElement("div");r.classList.add("image-content"),r.style.backgroundImage="url("+s+")",r.style.backgroundSize="cover",u.appendChild(r),u.appendChild(o);var n=document.createElement("p");n.classList.add("article-text"),n.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum.",u.appendChild(n),d.addEventListener("click",function(){featuresList.removeChild(u)})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwic2xpY2siLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsInNsaWRlc1RvU2hvdyIsImFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJidG4iLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyTGlua3MiLCJoaWRkZW5NZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmZWF0dXJlc0xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImV2ZW50IiwiY3VycmVudCIsInRhcmdldCIsImN1cnJlbnRJbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudERlc2NyaXB0aW9uIiwibGFzdEVsZW1lbnRDaGlsZCIsInRleHRDb250ZW50IiwiY3VycmVudFNSQyIsImN1cnJlbnRTcmMiLCJuZXdXaW5kb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xvc2VCdG4iLCJhcnRpY2xlSGVhZGluZyIsImltYWdlQ29udGVudCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJhcnRpY2xlRGVzYyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUNoQkYsRUFBRSxzQkFBc0JHLE1BQU0sQ0FDNUJDLFlBQVksRUFDWkMsY0FBZSxPQUNmQyxhQUFjLElBQ2RDLFFBQVEsRUFDUkMsV0FBWSxDQUFDLENBQ1hDLFdBQVksS0FDWkMsU0FBVSxDQUNSSCxRQUFRLEVBQ1JILFlBQVksRUFDWkMsY0FBZSxPQUNmQyxhQUFjLElBRWYsQ0FDREcsV0FBWSxJQUNaQyxTQUFVLENBQ1JILFFBQVEsRUFDUkgsWUFBWSxFQUNaQyxjQUFlLE9BQ2ZDLGFBQWMsSUFFZixDQUNERyxXQUFZLElBQ1pDLFNBQVUsQ0FDUkgsUUFBUSxFQUNSSCxZQUFZLEVBQ1pDLGNBQWUsT0FDZkMsYUFBYyxFQUNkSyxVQUFVLEVBQ1ZDLGNBQWUsV0FLdkIsSUFBSUMsSUFBTVosU0FBU2EsY0FBYyxjQUM3QkMsWUFBY2QsU0FBU2EsY0FBYyxpQkFDckNFLFdBQWFmLFNBQVNhLGNBQWMsZ0JBQ3hDRCxJQUFJSSxpQkFBaUIsUUFBUyxXQUNXLE1BQW5DSixJQUFJSyxhQUFhLGVBQ25CRixXQUFXRyxZQUFZSixhQUN2QkYsSUFBSU8sVUFBVUMsSUFBSSxxQkFDbEJMLFdBQVdJLFVBQVVDLElBQUksdUJBQ3pCTixZQUFZSyxVQUFVQyxJQUFJLHVCQUMxQlIsSUFBSVMsYUFBYSxhQUFjLE1BQ2EsTUFBbkNULElBQUlLLGFBQWEsZ0JBQzFCTCxJQUFJTyxVQUFVRyxPQUFPLHFCQUNyQlYsSUFBSVMsYUFBYSxhQUFjLEtBQy9CTixXQUFXSSxVQUFVRyxPQUFPLHVCQUM1QlIsWUFBWUssVUFBVUcsT0FBTyx1QkFDN0JQLFdBQVdRLFlBQVlULGdCQUczQixJQUFJVSxNQUFReEIsU0FBU3lCLGlCQUFpQixtQkFDbENDLGFBQWUxQixTQUFTYSxjQUFjLG1CQUMxQ1csTUFBTUcsUUFBUSxTQUFVQyxHQUN0QkEsRUFBUVosaUJBQWlCLFFBQVMsU0FBVWEsR0FDMUMsSUFBSUMsRUFBVUQsRUFBTUUsT0FDaEJDLEVBQWVGLEVBQVFHLGtCQUFrQkEsa0JBQ3pDQyxFQUFxQkosRUFBUUssaUJBQWlCQyxZQUM5Q0MsRUFBYUwsRUFBYU0sV0FDMUJDLEVBQVl2QyxTQUFTd0MsY0FBYyxPQUNuQ0MsRUFBV3pDLFNBQVN3QyxjQUFjLE9BQ2xDRSxFQUFpQjFDLFNBQVN3QyxjQUFjLE1BQzVDRSxFQUFldkIsVUFBVUMsSUFBSSxtQkFDN0JzQixFQUFlTixZQUFjRixFQUM3QlIsYUFBYVIsWUFBWXFCLEdBQ3pCQSxFQUFVcEIsVUFBVUMsSUFBSSxvQkFDeEJxQixFQUFTdEIsVUFBVUMsSUFBSSxhQUN2Qm1CLEVBQVVyQixZQUFZdUIsR0FDdEIsSUFBSUUsRUFBZTNDLFNBQVN3QyxjQUFjLE9BQzFDRyxFQUFheEIsVUFBVUMsSUFBSSxpQkFDM0J1QixFQUFhQyxNQUFNQyxnQkFBa0IsT0FBU1IsRUFBYSxJQUMzRE0sRUFBYUMsTUFBTUUsZUFBaUIsUUFDcENQLEVBQVVyQixZQUFZeUIsR0FDdEJKLEVBQVVyQixZQUFZd0IsR0FDdEIsSUFBSUssRUFBYy9DLFNBQVN3QyxjQUFjLEtBQ3pDTyxFQUFZNUIsVUFBVUMsSUFBSSxnQkFDMUIyQixFQUFZWCxZQUFjLCsvQ0FDMUJHLEVBQVVyQixZQUFZNkIsR0FDdEJOLEVBQVN6QixpQkFBaUIsUUFBUyxXQUNqQ1UsYUFBYUgsWUFBWWdCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLnNsaWRlcl9fY29udGFpbmVyJykuc2xpY2soe1xuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgY2VudGVyUGFkZGluZzogJzgwcHgnLFxuICAgIHNsaWRlc1RvU2hvdzogMy41LFxuICAgIGFycm93czogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiBbe1xuICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEwMDBcbiAgICAgIH1cbiAgICB9XVxuICB9KTtcbn0pO1xudmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1iLW1lbnUnKTtcbnZhciBoZWFkZXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xpc3QnKTtcbnZhciBoaWRkZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbi1tZW51Jyk7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JykgPT09ICcwJykge1xuICAgIGhpZGRlbk1lbnUuYXBwZW5kQ2hpbGQoaGVhZGVyTGlua3MpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoYW1iLW1lbnUtLWFjdGl2ZScpO1xuICAgIGhpZGRlbk1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLW1lbnUtLWFjdGl2ZScpO1xuICAgIGhlYWRlckxpbmtzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbGlzdC0tcG9wdXAnKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JywgJzEnKTtcbiAgfSBlbHNlIGlmIChidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JykgPT09ICcxJykge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYW1iLW1lbnUtLWFjdGl2ZScpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnLCAnMCcpO1xuICAgIGhpZGRlbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLW1lbnUtLWFjdGl2ZScpO1xuICAgIGhlYWRlckxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbGlzdC0tcG9wdXAnKTtcbiAgICBoaWRkZW5NZW51LnJlbW92ZUNoaWxkKGhlYWRlckxpbmtzKTtcbiAgfVxufSk7XG52YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVhdHVyZXNfX2l0ZW0nKTtcbnZhciBmZWF0dXJlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVhdHVyZXNfX2xpc3QnKTtcbml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBjdXJyZW50SW1hZ2UgPSBjdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHZhciBjdXJyZW50RGVzY3JpcHRpb24gPSBjdXJyZW50Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgdmFyIGN1cnJlbnRTUkMgPSBjdXJyZW50SW1hZ2UuY3VycmVudFNyYztcbiAgICB2YXIgbmV3V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGFydGljbGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBhcnRpY2xlSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdhcnRpY2xlLWhlYWRpbmcnKTtcbiAgICBhcnRpY2xlSGVhZGluZy50ZXh0Q29udGVudCA9IGN1cnJlbnREZXNjcmlwdGlvbjtcbiAgICBmZWF0dXJlc0xpc3QuYXBwZW5kQ2hpbGQobmV3V2luZG93KTtcbiAgICBuZXdXaW5kb3cuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZXMtYXJ0aWNsZScpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ0bicpO1xuICAgIG5ld1dpbmRvdy5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgdmFyIGltYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbWFnZS1jb250ZW50Jyk7XG4gICAgaW1hZ2VDb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgY3VycmVudFNSQyArIFwiKVwiO1xuICAgIGltYWdlQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgbmV3V2luZG93LmFwcGVuZENoaWxkKGltYWdlQ29udGVudCk7XG4gICAgbmV3V2luZG93LmFwcGVuZENoaWxkKGFydGljbGVIZWFkaW5nKTtcbiAgICB2YXIgYXJ0aWNsZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYXJ0aWNsZURlc2MuY2xhc3NMaXN0LmFkZCgnYXJ0aWNsZS10ZXh0Jyk7XG4gICAgYXJ0aWNsZURlc2MudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVyaW9yZXMgZG9sb3JlIGR1Y2ltdXMgZWl1cyBldW0sIGl0YXF1ZSBsYWJvcmVtaW5pbWEgbmVtbyBudWxsYSBvZGlvLCBvZGl0IHBhcmlhdHVyIHBsYWNlYXQgcXVpZGVtIHJlY3VzYW5kYWUgc2FlcGUgc2VkIHN1c2NpcGl0IHZlcml0YXRpcywgdm9sdXB0YXRpYnVzdm9sdXB0YXR1bSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3JlcyBkb2xvcmUgZHVjaW11cyBlaXVzIGV1bSwgaXRhcXVlIGxhYm9yZW1pbmltYSBuZW1vIG51bGxhIG9kaW8sIG9kaXQgcGFyaWF0dXIgcGxhY2VhdCBxdWlkZW0gcmVjdXNhbmRhZSBzYWVwZSBzZWQgc3VzY2lwaXQgdmVyaXRhdGlzLCB2b2x1cHRhdGlidXN2b2x1cHRhdHVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3BlcmlvcmVzIGRvbG9yZSBkdWNpbXVzIGVpdXMgZXVtLCBpdGFxdWUgbGFib3JlbWluaW1hIG5lbW8gbnVsbGEgb2Rpbywgb2RpdCBwYXJpYXR1ciBwbGFjZWF0IHF1aWRlbSByZWN1c2FuZGFlIHNhZXBlIHNlZCBzdXNjaXBpdCB2ZXJpdGF0aXMsIHZvbHVwdGF0aWJ1c3ZvbHVwdGF0dW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVyaW9yZXMgZG9sb3JlIGR1Y2ltdXMgZWl1cyBldW0sIGl0YXF1ZSBsYWJvcmVtaW5pbWEgbmVtbyBudWxsYSBvZGlvLCBvZGl0IHBhcmlhdHVyIHBsYWNlYXQgcXVpZGVtIHJlY3VzYW5kYWUgc2FlcGUgc2VkIHN1c2NpcGl0IHZlcml0YXRpcywgdm9sdXB0YXRpYnVzdm9sdXB0YXR1bSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3JlcyBkb2xvcmUgZHVjaW11cyBlaXVzIGV1bSwgaXRhcXVlIGxhYm9yZW1pbmltYSBuZW1vIG51bGxhIG9kaW8sIG9kaXQgcGFyaWF0dXIgcGxhY2VhdCBxdWlkZW0gcmVjdXNhbmRhZSBzYWVwZSBzZWQgc3VzY2lwaXQgdmVyaXRhdGlzLCB2b2x1cHRhdGlidXN2b2x1cHRhdHVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3BlcmlvcmVzIGRvbG9yZSBkdWNpbXVzIGVpdXMgZXVtLCBpdGFxdWUgbGFib3JlbWluaW1hIG5lbW8gbnVsbGEgb2Rpbywgb2RpdCBwYXJpYXR1ciBwbGFjZWF0IHF1aWRlbSByZWN1c2FuZGFlIHNhZXBlIHNlZCBzdXNjaXBpdCB2ZXJpdGF0aXMsIHZvbHVwdGF0aWJ1c3ZvbHVwdGF0dW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVyaW9yZXMgZG9sb3JlIGR1Y2ltdXMgZWl1cyBldW0sIGl0YXF1ZSBsYWJvcmVtaW5pbWEgbmVtbyBudWxsYSBvZGlvLCBvZGl0IHBhcmlhdHVyIHBsYWNlYXQgcXVpZGVtIHJlY3VzYW5kYWUgc2FlcGUgc2VkIHN1c2NpcGl0IHZlcml0YXRpcywgdm9sdXB0YXRpYnVzdm9sdXB0YXR1bS4nO1xuICAgIG5ld1dpbmRvdy5hcHBlbmRDaGlsZChhcnRpY2xlRGVzYyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmZWF0dXJlc0xpc3QucmVtb3ZlQ2hpbGQobmV3V2luZG93KTtcbiAgICB9KTtcbiAgfSk7XG59KTsgLy8gaXRlbXMuZm9yRWFjaChlbCA9PiB7XG4vLyAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgICAgIGxldCBjdXJyID0gZS50YXJnZXQ7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGN1cnIuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuLy8gICAgIH0pXG4vLyB9KTsiXX0=
