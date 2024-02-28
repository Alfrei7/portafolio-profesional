<template>
    <section id="about" class="fade-out">
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
  name: 'AboutSection', // Cambia el nombre del componente a un nombre compuesto
}
</script>

<style scoped>
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