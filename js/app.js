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

    // ... (Debajo de tu código de Typed.js y AOS) ...

    // 4. INICIALIZAR SWIPER (Versión Pulida y Senior) --- ACTUALIZADO ---
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",

        // --- SOLUCIÓN PUNTO 2 (POCAS REFERENCIAS) ---
        // Cambiamos LOOP a FALSE. Ya no necesitamos duplicar tarjetas en el HTML.
        // (Vuelvan a dejar solo las 3 originales en index.html)
        loop: false, 
        
        // Obligamos a que empiece en la segunda tarjeta (índice 1) para que esté centrada
        initialSlide: 1, 

        // --- SOLUCIÓN PUNTO 1 (ROTACIÓN ESTILO "REAL CAROUSEL") ---
        coverflowEffect: {
            rotate: 50,         // Aumentamos el ángulo de giro (antes 35)
            stretch: -50,       // Solapamos un poco las tarjetas (-50) para efecto curvo
            depth: 200,         // Más profundidad 3D (antes 100)
            modifier: 1,
            slideShadows: true, // Sombras realistas en las laterales
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // --- SOLUCIÓN PUNTO 3 (PAUSA AL LEER) ---
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            // *** ESTA ES LA MAGIA ***
            // Detiene el carrusel cuando el mouse entra a leer/voltear
            pauseOnMouseEnter: true, 
        }
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