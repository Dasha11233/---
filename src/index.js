import "./index.html";
import "./index.scss";

const images = document.querySelectorAll('#image-container img'); 
let currentIndex = 0;

const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', () => {
    images[currentIndex].classList.remove('active'); 
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].classList.add('active'); 
});