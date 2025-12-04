/**
 * MiArma Portfolio - JavaScript Interactivity
 * Handles gallery, video modal, navigation, and scroll effects
 */

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

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth scroll for anchor links
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

/* ============================================
   Gallery
   ============================================ */
function initGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('galleryMainImage');
    const mainTitle = document.getElementById('galleryMainTitle');
    const mainDesc = document.getElementById('galleryMainDesc');

    if (!thumbnails.length || !mainImage) return;

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');

            // Get data attributes
            const fullImage = thumbnail.dataset.full;
            const title = thumbnail.dataset.title;
            const desc = thumbnail.dataset.desc;

            // Animate the transition
            mainImage.style.opacity = '0';
            mainImage.style.transform = 'scale(0.98)';

            setTimeout(() => {
                // Update the main image
                mainImage.src = fullImage;
                mainImage.alt = title;

                // Update title and description
                if (mainTitle) mainTitle.textContent = title;
                if (mainDesc) mainDesc.textContent = desc;

                // Fade in
                mainImage.style.opacity = '1';
                mainImage.style.transform = 'scale(1)';
            }, 200);
        });

        // Keyboard accessibility
        thumbnail.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                thumbnail.click();
            }
        });
    });

    // Add transition styles to main image
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

    // Open modal
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus on close button for accessibility
        if (closeBtn) {
            setTimeout(() => closeBtn.focus(), 100);
        }
    });

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';

        // Pause and reset video
        if (video) {
            video.pause();
            video.currentTime = 0;
        }

        // Return focus to open button
        openBtn.focus();
    }

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Prevent closing when clicking on modal content
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
    // Intersection Observer for fade-in animations
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

    // Observe section headers and content
    const animatedElements = document.querySelectorAll(
        '.section-header, .about-content, .gallery-container, .reel-container, .contact-content'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add visible styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero (subtle)
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

        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Validate
        if (!data.name || !data.email || !data.message) {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }

        if (!isValidEmail(data.email)) {
            showNotification('Por favor, introduce un email válido.', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>Enviando...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
            // Success simulation
            showNotification('¡Mensaje enviado! Te responderé pronto.', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // Add input focus effects
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

// Helper: Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper: Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" aria-label="Cerrar">&times;</button>
    `;

    // Add styles
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

    // Add animation keyframes
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

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}
