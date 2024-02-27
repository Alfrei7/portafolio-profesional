<template>
  <section id="projects" class="fade-out">
    <h2 class="section-title">Proyectos</h2>
    <div class="project-card">
      <div class="carousel">
        <button class="prev" @click="moveSlide(-1)">❮</button>
        <div class="slides" ref="slides">
          <img src="@/assets/indexImage.png" alt="index">
          <img src="@/assets/ahorcadoInGame.png" alt="Proyecto 2">
          <img src="@/assets/AhorcadoPalabra.png" alt="Proyecto 3">
          <img src="@/assets/snakeGameOver.png" alt="Proyecto 4">
          <img src="@/assets/snakeIngame.png" alt="Proyecto 5">
          <img src="@/assets/triviaimage.png" alt="Proyecto 6">
          <img src="@/assets/triviaWin.png" alt="Proyecto 7">
          <img src="@/assets/triviaGameOver.png" alt="Proyecto 8">
        </div>
        <button class="next" @click="moveSlide(1)">❯</button>
      </div>
      <div class="project-info">
        <a href="https://alfrei7.github.io/portafolio-games/"><h3>Portafolio de juegos</h3></a>
        <p>Este primer proyecto es un portafolio de juegos simples. Desarrollados con Javascript para poder implementar una buena lógica de programación, la cuál me sirvió mucho a la hora de practicar mis habilidades.</p>
      </div>
    </div>
    <!-- Agrega más tarjetas de proyecto según sea necesario -->
  </section>
</template>

<script>
export default {
  methods: {
    moveSlide(direction) {
      const container = this.$refs.slides;
      const slideSize = container.clientWidth;
      const totalSlides = container.querySelectorAll('img').length;

      if (direction === 1) {
        if (this.currentIndex < totalSlides - 1) {
          this.currentIndex++;
        }
      } else {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      }

      container.style.transform = `translateX(-${this.currentIndex * slideSize}px)`;
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  }
}
</script>

<style scoped>
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
.prev,
.next {
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
.project-info {
  text-align: center;
  margin-bottom: 20px;
}
.project-info p {
  max-width: 300px;
  font-size: 14px;
  margin: 0 auto;
}
</style>