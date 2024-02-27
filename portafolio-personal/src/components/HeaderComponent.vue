<template>
    <header>
      <nav>
        <a href="#hero">Inicio</a>
        <a href="#about">Acerca de mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  
  <style scoped>
  header {
    background-color: #06090d;
    color: #fff; 
    padding: 1rem 0;
    padding-left: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  nav {
    display: flex;
  }
  
  nav a {
    margin-right: 20px;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  nav a:hover {
    color: #7b3578; 
  }
  </style>