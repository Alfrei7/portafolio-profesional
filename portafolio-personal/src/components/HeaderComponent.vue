<template>
  <header class="header">
      <h1>Portafolio</h1>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link to="/acerca" class="nav-link">Acerca de</router-link>
      <router-link to="/proyectos" class="nav-link">Proyectos</router-link>
      <router-link to="/contacto" class="nav-link">Contacto</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style>
.header {
  background-color: #97aed2; /* Color de fondo del header */
  padding: 1rem 2rem; /* Espaciado interno */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
}

.logo h1 {
  color: #fff; /* Color del texto del nombre del sitio */
  font-size: 1.5rem; /* Tamaño del texto del nombre del sitio */
  font-weight: bold; /* Negrita */
  margin: 0; /* Eliminar margen */
  text-decoration: none;
}

.navbar {
  display: flex;
}

.nav-link {
  color: #333; /* Color del texto de los enlaces */
  text-decoration: none; /* Eliminar subrayado de los enlaces */
  padding: 0.5rem 1rem; /* Espaciado interno de los enlaces */
  margin: 0 0.5rem; /* Margen entre los enlaces */
  transition: color 0.3s ease; /* Transición del color al pasar el ratón */
  
}

.nav-link:hover {
  color: #f8f9fa; /* Cambio de color al pasar el ratón */
}
</style>