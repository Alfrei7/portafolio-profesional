<template>
    <section id="about" class="container">
      <h2 class="section-title">Acerca de Mí</h2>
      <div class="about-content">
        <p>Hola, soy Alfredo Iglesias, un desarrollador web front-end de 23 años. Originario de Concepción del Uruguay, Entre Ríos, Argentina.</p>
        <p>Mi interés por la programación comenzó durante la escuela secundaria, donde tuve mis primeros encuentros con la informática, aunque con clases muy breves y vagas. Luego llegó la pandemia y de a poco me fui metiendo más a fondo en este mundo, fui realizando cursos y estudiando de manera autodidacta para poder aprender aún más, hasta llegar a tener los conocimientos necesarios para realizar este portafolio. </p>
        <p>Actualmente, estoy enfocado en avanzar en mi carrera y buscar oportunidades para aplicar mis conocimientos y habilidades. Este portafolio web es una herramienta que creé para mostrar lo que aprendí y lo que seguiré aprendiendo.</p>
        <p>Mi objetivo es encontrar mi primer empleo en este campo y tener la oportunidad de crecer profesionalmente. La programación web es algo que me gusta mucho, y estoy comprometido a seguir aprendiendo y mejorando en esta área. 
          Mi idea es llegar a tener los conocimientos necesarios para poder ser un desarrollador "Full Stack".
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutComponent'
  }
  </script>
  
  <style>
  * Estilos generales */
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
    display: flexbox;
    background-color: #ebf0f6;
}
h1, h2, h3 {
    margin: 0;
    line-height: 1.2;
    color: #333; 
    text-align: center; 
}
p {
    margin: 0.5rem 0; 
    color: #333; 
    text-align: justify; 
    justify-content: space-between;
    align-items:center;
}
a {
    color: #7b3578;
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
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

section:nth-child(even) {
    background-color: #97aed2; 
    color: #fff; 
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