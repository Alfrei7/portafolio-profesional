<template>
  <div id="app">
    <HeaderComponent />
    <div class="main-content">
      <router-view />
    </div>
    <FooterComponent v-if="showFooter" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  setup() {
    const route = useRoute();
    const showFooter = ref(true); // Mostrar el footer por defecto

    watch(() => {
      // Verificar la meta showFooter de la ruta actual
      showFooter.value = route.meta.showFooter !== false;
    });

    return { showFooter };
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
.main-content {
  margin-top: 80px; /* Ajusta este valor según la altura del header */
  margin-bottom: 20px; /* Margen inferior para el contenido principal */
}
</style>

