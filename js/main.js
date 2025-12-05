
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initGallery();
    initVideoModal();
    initScrollEffects();
    initContactForm();
});

/* ============================================
   Navigation
   ============================================ */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.getElementById('header');
    const navLinkItems = document.querySelectorAll('.nav-link');


    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar el menu cuando se hace clic en un enlace
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Cerrar el menu cuando se hace clic fuera
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Efecto de scroll en el header
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Scroll suave para enlaces de anclaje
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============================================
// Gallery
// ============================================
function initGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('galleryMainImage');
    const mainTitle = document.getElementById('galleryMainTitle');
    const mainDesc = document.getElementById('galleryMainDesc');

    if (!thumbnails.length || !mainImage) return;

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remover la clase 'active' de todos los thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Agregar la clase 'active' al thumbnail clickeado
            thumbnail.classList.add('active');

            // Obtener los atributos data
            const fullImage = thumbnail.dataset.full;
            const title = thumbnail.dataset.title;
            const desc = thumbnail.dataset.desc;

            // Animar la transición
            mainImage.style.opacity = '0';
            mainImage.style.transform = 'scale(0.98)';

            setTimeout(() => {
                // Actualizar la imagen principal
                mainImage.src = fullImage;
                mainImage.alt = title;

                // Actualizar el titulo y la descripción
                if (mainTitle) mainTitle.textContent = title;
                if (mainDesc) mainDesc.textContent = desc;


                mainImage.style.opacity = '1';
                mainImage.style.transform = 'scale(1)';
            }, 200);
        });


        thumbnail.addEventListener('keydoeswn', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                thumbnail.click();
            }
        });
    });

    // Añadir estilos de transición a la imagen principal
    if (mainImage) {
        mainImage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
}

/* ============================================
   Video Modal
   ============================================ */
function initVideoModal() {
    const modal = document.getElementById('videoModal');
    const openBtn = document.getElementById('openVideoModal');
    const closeBtn = document.getElementById('closeVideoModal');
    const overlay = document.getElementById('modalOverlay');
    const video = document.getElementById('modalVideo');

    if (!modal || !openBtn) return;

    // Abrir modal
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus en el botón de cerrar para accesibilidad 
        if (closeBtn) {
            setTimeout(() => closeBtn.focus(), 100);
        }
    });

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';

        // Pausar y resetear el video
        if (video) {
            video.pause();
            video.currentTime = 0;
        }

        // Devolver el enfoque al botón de abrir
        openBtn.focus();
    }

    // Clic en el botón de cerrar
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Clic en el overlay
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    //  Tecla escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Evitar que se cierre al hacer clic en el contenido del modal
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

/* ============================================
   Scroll Effects
   ============================================ */
function initScrollEffects() {
    // Intersection Observer para animaciones de fade-in
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.section-header, .about-content, .gallery-container, .reel-container, .contact-content'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Añadir estilos visibles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Efecto parallax para el hero (suave)
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroImg.style.transform = `scale(1.1) translateY(${scrolled * 0.2}px)`;
            }
        });
    }
}

/* ============================================
   Contact Form
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener los datos del formulario
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Validar
        if (!data.name || !data.email || !data.message) {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }

        if (!isValidEmail(data.email)) {
            showNotification('Por favor, introduce un email válido.', 'error');
            return;
        }

        // Simular envío del formulario
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>Enviando...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
            // Simulación de envío exitoso
            showNotification('¡Mensaje enviado! Te responderé pronto.', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // Añadir efectos de enfoque en los inputs
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}

// Validación de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar notificación
function showNotification(message, type = 'info') {
    // Eliminar notificaciones existentes
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" aria-label="Cerrar">&times;</button>
    `;

    // Añadir estilos
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'rgba(0, 200, 100, 0.9)' : 'rgba(255, 0, 100, 0.9)'};
        color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        backdrop-filter: blur(10px);
    `;

    // Añadir animación keyframes
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                line-height: 1;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Clic en el botón de cerrar
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });

    // Eliminar notificación después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}
