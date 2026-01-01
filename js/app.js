// 1. Esperar a que cargue el documento
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INICIALIZAR AOS (Scroll Animations)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // 2. INICIALIZAR TYPED.JS (Efecto de Escritura) --- NUEVO ---
    const typed = new Typed('.typing-effect', {
        strings: [
            "Honor Student",     // Texto 1
            "Midfielder #10",    // Texto 2
            "Junior Developer",  // Texto 3
            "Problem Solver"     // Texto 4
        ],
        typeSpeed: 100, // Velocidad al escribir
        backSpeed: 60,  // Velocidad al borrar
        loop: true      // Que se repita infinitamente
    });

    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Al hacer click en la hamburguesa
    hamburger.addEventListener('click', () => {
        // Le ponemos/quitamos la clase "active" al menú
        navLinks.classList.toggle('active');
        
        // Animación del icono (Opcional: cambia de barras a X si usas FontAwesome)
        hamburger.classList.toggle('toggle');
    });

    // Cerrar menú al hacer click en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

});