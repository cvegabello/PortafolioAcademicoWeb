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

    // 4. INICIALIZAR SWIPER (REFERENCIAS)
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: false, 
        initialSlide: 1, 

        coverflowEffect: {
            rotate: 50,
            stretch: -50,
            depth: 200,
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
        
        // 🚨 CAMBIO AQUÍ: EN CELULAR QUIETO (Manual)
        autoplay: false,

        // 🚨 CONFIGURACIÓN SOLO PARA PC (Pantallas grandes)
        breakpoints: {
            768: { // Si la pantalla es mayor a 1024px (Laptop/PC)
                initialSlide: 1, 
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // Aquí sí funciona el mouse
                    enabled: true
                }
            }
        }
    });


    

    // 5. INICIALIZAR SWIPER DE PROYECTOS (PORTFOLIO)
    var portfolioSwiper = new Swiper(".portfolioSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: false, 
        initialSlide: 1, 

        coverflowEffect: {
            rotate: 40,
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
        
        // 🚨 CELULAR: QUIETO
        autoplay: false,

        // 🚨 PC: MOVIMIENTO INTELIGENTE
        breakpoints: {
            768: {
                autoplay: {
                    delay: 4000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    enabled: true // 🚨 Forzamos el encendido
                }
            }
        }
    });


    /* INICIALIZAR SWIPER ATHLETICS */
    var swiperVideoAthetics = new Swiper(".athletics-videos__swiper", {
        loop: true,   
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
        
        // 🚨 CELULAR: QUIETO
        autoplay: false,

        // 🚨 PC: MOVIMIENTO AUTOMÁTICO
        breakpoints: {
            768: {
                slidesPerView: "2", // Mantenemos la vista
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    enabled: true // 🚨 Forzamos el encendido
                }
            },
            // Ajuste extra para móviles (opcional, para que se vea 1 sola tarjeta si quieres)
            320: {
                slidesPerView: 1,
                autoplay: false
            }
        }
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

/* =========================================
   CONTACT FORM (EMAILJS) - FINAL
   ========================================= */

// 1. INICIALIZAR: PEGA AQUÍ TU PUBLIC KEY
// (Es la llave larga que sacaste de "Account")
emailjs.init("8utUPQYBhRlCDGx4l"); 

const contactForm = document.getElementById('contactForm');
const btnSubmit = document.getElementById('btnSubmit');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue sola

        // Cambiar texto del botón para que el usuario sepa que está cargando
        const originalBtnText = btnSubmit.innerHTML;
        btnSubmit.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        
        // 2. CONFIGURAR: PEGA AQUÍ TUS IDs
        // (El Service ID de Gmail y el Template ID que acabas de crear)
        const serviceID = 'service_ihytesn'; 
        const templateID = 'template_mti0sre';

        // Enviar el formulario
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // SI TODO SALE BIEN:
                alert('¡Message Sent! Santiago will reply soon. 🚀');
                btnSubmit.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                contactForm.reset(); // Borra lo que escribió el usuario
                
                // Volver el botón a la normalidad después de 3 segundos
                setTimeout(() => {
                    btnSubmit.innerHTML = originalBtnText;
                }, 3000);
            }, (err) => {
                // SI HAY ERROR:
                alert('Oops... something went wrong. Please try again.');
                btnSubmit.innerHTML = originalBtnText;
                console.error('EmailJS Error:', err); // Muestra el error en la consola (F12)
            });
    });
}



