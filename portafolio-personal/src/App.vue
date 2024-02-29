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

#app {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa; 
}


.main-content {
  margin-top: 80px; 
  margin-bottom: 20px; 
}
</style>

