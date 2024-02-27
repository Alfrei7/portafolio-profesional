<template>
    <div class="home">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactComponent />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import HeroSection from '@/views/HeroSection.vue'
  import AboutSection from '@/views/AboutSection.vue'
  import SkillsSection from '@/views/SkillsSection.vue'
  import ProjectsSection from '@/views/ProjectsSection.vue'
  import ContactComponent from '@/views/ContactComponent.vue'
  
  export default {
    components: {
      Header,
      Footer,
      HeroSection,
      AboutSection,
      SkillsSection,
      ProjectsSection,
      ContactComponent
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
  
  section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  section p {
    font-size: 1.2rem;
  }

  </style>