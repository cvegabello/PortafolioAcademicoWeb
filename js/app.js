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


    

    // 5. INICIALIZAR SWIPER DE PROYECTOS (PORTFOLIO)
    var portfolioSwiper = new Swiper(".portfolioSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: false, // Pocos proyectos al inicio, mejor sin loop
        initialSlide: 1, // Empieza en el del medio

        coverflowEffect: {
            rotate: 40,        // Un poco menos de rotación para ver mejor las fotos
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // Pausar si el reclutador quiere ver el código
        autoplay: {
            delay: 4000, // Un poquito más lento para leer
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }
    });


    /* INICIALIZAR SWIPER ATHLETICS (COMPORTAMIENTO IDÉNTICO A PROYECTOS) */
var swiperVideoAthetics = new Swiper(".athletics-videos__swiper", {
    loop: true, // Pocos proyectos al inicio, mejor sin loop  
    slidesPerView: "2", 
    centeredSlides: "auto", 
    spaceBetween: 2,
    grabCursor: true,
    speed: 600,
    effect: 'coverflow',
    
       
    coverflowEffect: {
        rotate: -90,
        depth: 600,
        modifier: .5,
        slideShadows: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    // Autoplay opcional, si quiere que se mueva solo o no
    // Pausar si el reclutador quiere ver el código
    autoplay: {
        delay: 3000, // Un poquito más lento para leer
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    
    
   
    
});

    // 6. CONTROL INTELIGENTE DE LAS TARJETAS (CLICK + AUTO-RESET)
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        // A. Al hacer CLICK: Voltear (Toggle)
        card.addEventListener('click', (e) => {
            // Si da click en un botón de enlace, no voltear
            if (e.target.closest('a')) return;
            
            card.classList.toggle('is-flipped');
        });

        // B. Al SACAR EL MOUSE (Mouse Leave): Volver al frente automáticamente
        card.addEventListener('mouseleave', () => {
            // Si la tarjeta está volteada, quitarle la clase para que se cierre
            if (card.classList.contains('is-flipped')) {
                card.classList.remove('is-flipped');
            }
        });
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

/* CONTROL DEL MENÚ MÓVIL */
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

/* INICIALIZAR GALERÍA */
    var gallerySwiper = new Swiper(".gallery-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    /* =========================================
   LÓGICA DEL LIGHTBOX (GALERÍA AMPLIADA)
   ========================================= */

// 1. Seleccionar elementos
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("lightboxImg");
const captionText = document.getElementById("lightboxCaption");

// 2. Seleccionar todas las tarjetas de la galería
const galleryCards = document.querySelectorAll('.gallery-card');

galleryCards.forEach(card => {
    card.addEventListener('click', function() {
        // Mostrar el modal
        modal.style.display = "block";
        
        // Pequeño timeout para que la transición de opacidad funcione
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);

        // Buscar la imagen dentro de la tarjeta clickeada
        const img = this.querySelector('img');
        modalImg.src = img.src; // Usar la misma foto

        // Buscar el texto (título) para ponerlo abajo
        const title = this.querySelector('h3').innerText;
        const sub = this.querySelector('p').innerText;
        captionText.innerHTML = `<span style="color:var(--accent-color)">${title}</span> - ${sub}`;
    });
});

// 3. Función para Cerrar
function closeLightbox() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Esperar a que termine la animación
}

