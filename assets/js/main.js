// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)';
    }
});

// Initialize animations on page load
window.addEventListener('load', () => {
    // Add visible class to elements in viewport
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

// Dynamic typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }, 500);
});

// WhatsApp chatbot function
function openWhatsApp() {
    const message = "¡Hola! Me interesa conocer más sobre los servicios de Sansu Inc. ¿Podrían brindarme información sobre desarrollo web, IA y automatización?";
    const whatsappURL = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}