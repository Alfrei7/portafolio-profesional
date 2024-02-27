<template>
    <section id="hero" class="fade-in section-enter">
      <h1>Bienvenido a mi portafolio</h1>
      <p>Soy un desarrollador front-end apasionado por la creación de sitios web interactivos y atractivos.</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style scoped>
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