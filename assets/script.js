/* Variables constantes CONST */

const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg", /* ajout du lien vers image du dossier assets/slideshow */
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg", /* ajout du lien vers image du dossier assets/slideshow */
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg", /* ajout du lien vers image du dossier assets/slideshow */
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png", /* ajout du lien vers image du dossier assets/slideshow */
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dotsContainer = document.querySelector('.dots'); /* querySelector pour récupérer un élément de la page web */
const imgBanner = document.querySelector(".banner__all-img");
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const startTagLine = document.querySelector('.banner-img-tagLine');


/* Variable évolutive LET */

let currentIndex = 0;


/* Fonctions */

function updateCarouselContent() { /* propriété innerHtml - insertion .html directement dans une balise -- création d'un nouvel élément dans page web */
	imgBanner.innerHTML = `<img src=${slides[currentIndex].image} alt="Slide ${currentIndex + 1}" class="banner-img">`;
	startTagLine.innerHTML = slides[currentIndex].tagLine;
}

function createDots() { /* méthode createElement liée à la page via appendChild -- création d'un nouvel élément dans page web */
	for (let i=0; i < slides.length; i++) {
		let bulletElement = document.createElement("a");
		bulletElement.href = '#';
		bulletElement.classList.add("dot");
		dotsContainer.appendChild(bulletElement);
	}
}

function updateDots() { /* querySelector pour récupérer un élément de la page web */
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach((dot, index) =>  {
		dot.classList.toggle('dot_selected', index === currentIndex);
	});
}

function changeSlide(direction) { /* conditions if/else -- réponse unique à un test */
	if (direction === 'right') {
		currentIndex = (currentIndex + 1) % slides.length;
	} else {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	}
	updateCarouselContent();
	updateDots();
}


/* EventListeners ajoutés sur les flèches -- intéraction avec une action spécifique : click */

arrowRight.addEventListener('click', () => {
	changeSlide('right');
});

arrowLeft.addEventListener('click', () => {
	changeSlide('left');
});



createDots();
updateCarouselContent();
updateDots();