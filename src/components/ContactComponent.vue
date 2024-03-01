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

<style scoped>
#contact {
  width: 190vh;
  height: auto; /* Establece la altura al 100% de la altura de la ventana */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-info {
  margin-bottom: 20px;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
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