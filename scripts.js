document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  function fadeOutSection(section) {
    section.classList.remove('fade-in');
    section.classList.add('fade-out');
  }

  function fadeInSection(section) {
    section.classList.remove('fade-out');
    section.classList.add('fade-in', 'section-enter');
  }

  // Quita la clase fade-out de todas las secciones al cargar la página
  sections.forEach(function(section) {
    section.classList.remove('fade-out');
  });

  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        sections.forEach(function(section) {
          if (section !== targetSection) {
            fadeOutSection(section);
          }
        });
        fadeInSection(targetSection);
      }
    });
  });

  function fadeInSection(section) {
    section.classList.remove('fade-out', 'section-exit'); // Eliminar la clase section-exit si está presente
    section.classList.add('fade-in', 'section-enter');
  }

  // Agrega la animación de entrada y salida de secciones al desplazarse por el sitio
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-intersecting');
      } else {
        entry.target.classList.remove('is-intersecting');
      }
    });
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});

// carrusel

let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.children[0].offsetWidth; // Obtén el ancho de cada diapositiva
  const maxIndex = slides.children.length - 1;

  slideIndex += n;
  if (slideIndex > maxIndex) {
    slideIndex = 0; // Vuelve al principio si se llega al final
  } else if (slideIndex < 0) {
    slideIndex = maxIndex; // Ir al final si se va hacia atrás desde el principio
  }

  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`; // Mueve el carrusel
}