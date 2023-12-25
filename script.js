const carouselTrack = document.querySelector('.carousel-track');

// Duplicate the carousel content for smooth infinite loop
carouselTrack.innerHTML += carouselTrack.innerHTML;

// Set the width of carousel track based on number of slides
const numSlides = document.querySelectorAll('.carousel-slide').length;
carouselTrack.style.width = `${numSlides * 10}%`; // Each slide takes 20% width

// Calculate the animation duration dynamically based on number of slides
const animationDuration = numSlides * 2 + 's'; // 2s for each slide transition
carouselTrack.style.animationDuration = animationDuration;
