const carousel = document.getElementById('testimonialCarousel');
const positionSpan = document.getElementById('carouselPosition');


carousel.addEventListener('slide.bs.carousel', function (e) {
  const currentIndex = e.to + 1; // Bootstrap starts from 0
  positionSpan.textContent = `${currentIndex} / 2 `;
});



