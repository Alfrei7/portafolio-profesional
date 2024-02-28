<template>
    <section id="contact" class="container">
      <h2 class="section-title">Contacto</h2>
      <div class="contact-info">
        <p><strong>Correo Electrónico:</strong> alfredoigl26@gmail.com</p>
        <p><strong>Número de Teléfono:</strong> +54 9 3442 454959</p>
        <p><strong>Ubicación:</strong> Concepción del Uruguay, Entre Ríos, Argentina</p>
      </div>
      <div class="contact-buttons">
        <a href="mailto:alfredoigl26@gmail.com" class="contact-button email">
          <i class="fas fa-envelope"></i> Gmail
        </a>
        <a href="https://wa.me/+5493442454959" target="_blank" class="contact-button whatsapp">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/alfredo-iglesias-b1890a220/" target="_blank" class="contact-button linkedin">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.instagram.com/alfreig7" target="_blank" class="contact-button instagram">
          <i class="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactComponent'
  }
  </script>
  
  <style>
/* ESTILOS DE CONTACTO*/
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
    display: flex; /* Cambiar flexbox a flex */
    background-color: #ebf0f6; /* Fondo */
}
h1, h2, h3 {
    margin: 0;
    line-height: 1.2;
    color: #333; /* Texto principal */
    text-align: center; /* Centrar los títulos */
}
p {
    margin: 0.5rem 0; /* Agregar espacio arriba y abajo */
    color: #333; /* Texto principal */
    text-align: justify; /* Justificar el texto */
    justify-content: space-between;
    align-items:center;
}
a {
    color: #7b3578; /* Secundario */
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
/* Estilos adicionales */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.contact-info {
  margin-bottom: 20px;
}
.contact-info p {
  margin: 10px 0;
}
</style>