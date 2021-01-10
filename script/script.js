let slides = document.querySelectorAll('.slides__slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    slides[currentSlide].className = 'slides__slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slides__slide slides__showing';
}