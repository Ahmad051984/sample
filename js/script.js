'use strict'
const ribbon = document.querySelector('.photo-ribbon');
const ribbonInner = document.querySelector('.ribbon-inner');
const images = ribbonInner.querySelectorAll('img');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');
const imageWidth = images[0].offsetWidth;
let currentPosition = 0;

leftButton.addEventListener('click', () => {
	currentPosition += imageWidth + 30;
	if (currentPosition > 0) {
		currentPosition = 0;
	}
	ribbonInner.style.transform = `translateX(${currentPosition}px)`;
});

rightButton.addEventListener('click', () => {
	currentPosition -= imageWidth + 30;
	const maxPosition = -ribbonInner.offsetWidth + ribbon.offsetWidth;
	if (currentPosition < maxPosition) {
		currentPosition = maxPosition;
	}
	ribbonInner.style.transform = `translateX(${currentPosition}px)`;
});

