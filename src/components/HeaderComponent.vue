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
  background-color: #97aed2;
  padding: 1rem 2rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
}


.navbar {
  display: flex;
}

.nav-link {
  color: #333; 
  text-decoration: none; 
  padding: 0.5rem 1rem;
  margin: 0 0.5rem; 
  transition: color 0.3s ease;
  
}

.nav-link:hover {
  color: #f8f9fa; 
}
</style>