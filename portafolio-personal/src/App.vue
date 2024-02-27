<template>
  <div id="app">
    <HeaderComponent />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroSection from './views/HeroSection.vue';
import AboutSection from './views/AboutSection.vue';
import SkillsSection from './views/SkillsSection.vue';
import ProjectsSection from './views/ProjectsSection.vue';
import ContactComponent from './views/ContactComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactComponent,
    FooterComponent
  }
}
</script>

<style>
/* Estilos generales para el contenedor de la aplicación */
#app {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa; /* Color de fondo */
}

/* Estilos para el contenido dentro del contenedor */
/* Por ejemplo, puedes agregar márgenes para separar los componentes */
#app > * {
  margin-bottom: 20px;
}

/* Estilos de las secciones */
section {
    padding: 4rem 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
section:nth-child(even) {
    background-color: #97aed2; /* Fondo alternativo */
    color: #fff; /* Texto */
}
section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
section ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
}
section li {
    padding: 0 1rem;
    margin-bottom: 1rem;
}
section li:nth-child(3n+1) {
    margin-left: 0;
}
</style>