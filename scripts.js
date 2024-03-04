document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          const section = entry.target;

          if (entry.isIntersecting) {
              section.classList.remove('fade-out');
              section.classList.add('fade-in', 'is-intersecting');
          } else {
              section.classList.add('fade-out');
              section.classList.remove('fade-in', 'is-intersecting');
          }
      });
  });

  sections.forEach(section => {
      section.classList.add('fade-out');
      observer.observe(section);
  });
});


let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.querySelectorAll('img').length;

  if (direction === -1 && currentIndex > 0) {
    currentIndex--;
  } else if (direction === 1 && currentIndex < totalSlides - 1) {
    currentIndex++;
  }

  const slideWidth = slides.querySelector('img').clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


$(document).ready(function(){
  $('.project-carousel').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: true, 
      responsive: [
          {
              breakpoint: 768, 
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
});