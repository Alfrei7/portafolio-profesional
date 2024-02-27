<template>
    <footer>
      <div class="container">
        <h2>Contacto</h2>
        <p>
          Si estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en <a href="mailto:tuemail@example.com">contactarme por correo electrónico</a>. También puedes encontrarme en las siguientes redes sociales:
        </p>
        <ul>
          <li><a href="https://wa.me/+5493442454959" target="_blank" class="contact-button whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
          <li><a href="https://www.linkedin.com/in/alfredo-iglesias-b1890a220/" target="_blank" class="contact-button linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
          <li><a href="https://www.instagram.com/alfreig7" target="_blank" class="contact-button instagram"><i class="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style>

  footer {
    background-color: #97aed2;; /* Fondo */
    color: #fff; /* Texto */
  }
  
  footer .container {
    padding: 2rem;
    text-align: center;
  }
  
  footer h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }
  
  footer p {
    max-width: 30rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    color: #fff;
  }
  
  footer ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none; /* Eliminar viñetas de la lista */
  }
  
  footer li {
    margin: 0 1rem;
  }
  
  footer a {
    color: #7b3578; /* Color de los enlaces */
    text-decoration: none; /* Eliminar subrayado de los enlaces */
  }
  
  footer a:hover {
    text-decoration: underline; /* Subrayado al pasar el ratón */
  }
  
  /* Estilos de los botones de contacto */
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