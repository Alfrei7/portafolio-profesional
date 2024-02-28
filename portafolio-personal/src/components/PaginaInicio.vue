<template>
  <div class="PaginaInicio">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
  </div>
</template>

<script>
import HeroSection from './HeroSection.vue'
import AboutSection from './AboutSection.vue'
import SkillsSection from './SkillsSection.vue'
import ProjectsSection from './ProjectsSection.vue'

export default {
  components: {
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection
  }
}
</script>
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    display: flex;
    background-color: #ebf0f6; /* Fondo */
  }
  h1, h2, h3 {
    margin: 0;
    line-height: 1.2;
    color: #333; /* Texto principal */
    text-align: center; /* Centrar los títulos */
  }
  p {
    margin: 0.5rem 0; /* Agregar espacio arriba y abajo */
    color: #333; /* Texto principal */
    text-align: justify; /* Justificar el texto */
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: #7b3578; /* Secundario */
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  
  </style>