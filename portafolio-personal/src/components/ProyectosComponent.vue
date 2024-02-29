<template>
  <section id="project-details" class="fade-out">
    <h2 class="projects">Proyectos</h2>
    <div class="project-card">
      <div class="carousel">
        <button class="prev" @click="moveSlide(-1)">❮</button>
        <div class="slides">
          <img src="../assets/indexImage.png" alt="index">
          <img src="../assets/ahorcadoInGame.png" alt="Proyecto 2">
          <img src="../assets/AhorcadoPalabra.png" alt="Proyecto 2">
          <img src="../assets/snakeGameOver.png" alt="Proyecto 2">
          <img src="../assets/snakeIngame.png" alt="Proyecto 2">
          <img src="../assets/triviaimage.png" alt="Proyecto 2">
          <img src="../assets/triviaWin.png" alt="Proyecto 2">
          <img src="../assets/triviaGameOver.png" alt="Proyecto 2">
        </div>
        <button class="next" @click="moveSlide(1)">❯</button>
      </div>
      <div class="project-info">
        <a href="https://alfrei7.github.io/portafolio-games/"><h3>Portafolio de juegos</h3></a>
        <p class="project-description">Este primer proyecto es un portafolio de juegos simples. Desarrollados con Javascript para poder implementar una buena lógica de programación, la cuál me sirvió mucho a la hora de practicar mis habilidades.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      currentIndex: 0 // Inicializa currentIndex en 0
    };
  },
  methods: {
    moveSlide(direction) {
      const slides = document.querySelector('.slides');
      const totalSlides = slides.querySelectorAll('img').length;
      let currentIndex = this.currentIndex; // Utiliza this.currentIndex

      if (direction === -1 && currentIndex > 0) {
        currentIndex--;
      } else if (direction === 1 && currentIndex < totalSlides - 1) {
        currentIndex++;
      }

      const slideWidth = slides.querySelector('img').clientWidth;
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      this.currentIndex = currentIndex; // Actualiza currentIndex en el componente
    }
  }
}
</script>
<style>

.project-description{
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
}
/* Carrusel de imágenes para los proyectos*/
.carousel {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border: 3px solid #000000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.slides {
  display: flex;
  transition: transform 0.5s ease;
}
.slides img {
  width: 100%;
  object-fit: cover;
}
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
</style>