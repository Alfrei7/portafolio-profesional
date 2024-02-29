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
 
 #about-me {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-me-content {
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}


 section {
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}


footer {
  color: #fff;
  background-color: #97aed2;
  color: #06090d;
  padding: 1rem 0; /* Reducir el padding vertical */
  text-align: center;
}

footer .container {
  padding: 2rem;
  text-align: center;
}

footer h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #06090d;
}

footer p {
  max-width: 30rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  color: #06090d  ;
}

footer ul {
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

footer li {
  margin: 0 1rem;
}

footer a {
  color: #7b3578;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

.contact-button {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s;
}

.contact-button i {
  margin-right: 5px;
  text-decoration: none;
}

.contact-button.email {
  background-color: #DB4437;
}

.contact-button.whatsapp {
  background-color: #25D366;
}

.contact-button.linkedin {
  background-color: #0077B5;
}

.contact-button.instagram {
  background-color: #C13584;
}
  </style>