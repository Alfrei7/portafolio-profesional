<template>
  <div class="PaginaInicio">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
  </div>
</template>

<script>
import HeroSection from './HeroSection.vue'
import AboutSection from './AboutSection.vue'
import SkillsSection from './SkillsSection.vue'
import ProjectsSection from './ProjectsSection.vue'

export default {
  components: {
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection
  }
}
</script>
  <style>
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
    display: flex;
    background-color: #ebf0f6; 
  }
  h1, h2, h3 {
    margin: 0;
    line-height: 1.2;
    color: #333;
    text-align: center; 
  }
  p {
    margin: 0.5rem 0; 
    color: #333; 
    text-align: justify; 
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: #7b3578; 
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

footer {
  
  background-color: #ebf0f6;
  color: #06090d;
  padding: 1rem 0; /* Reducir el padding vertical */
  text-align: center;
}

footer .container {
  background-color: #ebf0f6;
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

  
  </style>