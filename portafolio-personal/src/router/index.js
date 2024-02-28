import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicio from '../components/PaginaInicio.vue'; 
import ContactComponent from '../components/ContactComponent.vue';
import ProyectosComponent from '../components/ProyectosComponent.vue';
import AboutMeComponent from '../components/AboutMeComponent.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PaginaInicio
  },

  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactComponent,
    meta: {
      showFooter: false // No mostrar el footer en esta página
    }
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: ProyectosComponent,
    meta: {
      showFooter: true // Mostrar el footer en esta página
    }
  },
  {
    path: '/acerca',
    name: 'AcercaDe',
    component: AboutMeComponent,
    meta: {
      showFooter: true // Mostrar el footer en esta página
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;