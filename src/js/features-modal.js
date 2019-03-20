const items = document.querySelectorAll('.features__item');  //li
const featuresList = document.querySelector('.features__list');  //ul

items.forEach(element => {

    element.addEventListener('click', function(event) {
        let current = event.target;

        let currentImage = current.firstElementChild.firstElementChild;
        let currentDescription = current.lastElementChild.textContent;
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
        articleDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ducimus eius eum, itaque laboreminima nemo nulla odio, odit pariatur placeat quidem recusandae saepe sed suscipit veritatis, voluptatibusvoluptatum.';
        newWindow.appendChild(articleDesc);

        closeBtn.addEventListener('click', function () {
            featuresList.removeChild(newWindow);
        })
    })
});

