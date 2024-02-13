function toggleColorMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    const colorToggle = document.getElementById('colorToggle');
    const iconsContainer = document.querySelector('#colorToggle .icons-container');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    const lightModeStyles = {
        backgroundColor: '#669a96',
        color: 'white',
        moonIconDisplay: 'none',
        sunIconDisplay: 'inline'
    };

    const darkModeStyles = {
        backgroundColor: '#7cbab5',
        color: '#0d1010',
        moonIconDisplay: 'inline',
        sunIconDisplay: 'none'
    };

    const styles = isDarkMode ? darkModeStyles : lightModeStyles;
    Object.assign(colorToggle.style, styles);
    moonIcon.style.display = styles.moonIconDisplay;
    sunIcon.style.display = styles.sunIconDisplay;

    // Agrega una animación para el desplazamiento de los iconos al presionar el botón
    iconsContainer.style.transform = 'translateX(-50%)'; // Inicia desde el centro
    setTimeout(() => {
        iconsContainer.style.transform = 'translateX(50%)'; // Desplaza a la derecha
        setTimeout(() => {
            iconsContainer.style.transform = 'translateX(0)'; // Vuelve al centro
        }, 300);
    }, 50);
}
