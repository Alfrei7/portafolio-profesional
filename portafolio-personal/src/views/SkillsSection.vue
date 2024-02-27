<template>
  <section id="skills" class="fade-in">
    <h2>Habilidades</h2>
    <div class="skills-container">
      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-html5"></i>
        </div>
        <span>HTML</span>
        <p>HTML</p>
      </div>
    
      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-css3-alt"></i>
        </div>
        <span>CSS (SASS)</span>
        <p>CSS (SASS)</p>
      </div>

      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-js"></i>
        </div>
        <span>JavaScript</span>
        <p>JAVASCRIPT</p>
      </div>

      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-react"></i>
        </div>
        <span>React</span>
        <p>REACT</p>
      </div>

      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-angular"></i>
        </div>
        <span>Angular</span>
        <p>ANGULAR</p>
      </div>

      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-vuejs"></i>
        </div>
        <span>Vue.js</span>
        <p>VUE</p>
      </div>

      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-git"></i>
        </div>
        <span>Git</span>
        <p>GIT</p>
      </div>

      <div class="skill">
        <div class="skill-icon">
          <i class="fab fa-github"></i>
        </div>
        <span>GitHub</span>
        <p>GITHUB</p>
      </div>

      <div class="skill">
        <div class="skill-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <span>Optimización de rendimiento web</span>
        <p>OPTIMIZACIÓN RENDIMIENTO WEB</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // No hay lógica específica en este componente
}
</script>

<style scoped>
#skills {
  text-align: center;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.skill {
  width: 150px;
  padding: 20px;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.skill:hover {
  transform: translateY(-5px);
}
.skill-icon {
  font-size: 40px;
  margin-bottom: 10px;
}
.skill-icon i {
  color: #333;
}
.skill span {
  display: block;
  font-weight: bold;
}
.skill p {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  text-align: center;
}
</style>
