// ========== CUSTOM CURSOR ==========
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'forwards' });
});

// Cursor interactions with links and buttons
const interactiveElements = document.querySelectorAll('a, button, .portfolio-card, .tech-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// ========== PARTICLES BACKGROUND ==========
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ========== TYPING EFFECT ==========
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
    const text = typingElement.getAttribute('data-typing-text');
    let index = 0;
    typingElement.textContent = '';

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    // Start typing after page loads
    setTimeout(type, 500);
}

// ========== ANIMATED COUNTERS ==========
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.textContent === '0') {
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ========== 3D TILT EFFECT FOR PROFILE IMAGE ==========
const profileWrapper = document.querySelector('[data-tilt]');

if (profileWrapper) {
    profileWrapper.addEventListener('mousemove', (e) => {
        const rect = profileWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        profileWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    profileWrapper.addEventListener('mouseleave', () => {
        profileWrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.portfolio-card, .tech-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or just "#"
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== PORTFOLIO CARD PARALLAX EFFECT ==========
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// ========== TECH CARDS ANIMATION ON SCROLL ==========
const techCards = document.querySelectorAll('.tech-card');
let delay = 0;

techCards.forEach((card, index) => {
    card.style.animationDelay = `${delay}s`;
    delay += 0.1;
});

// ========== NAVBAR BACKGROUND ON SCROLL ==========
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.querySelector('.nav').style.background = 'rgba(0, 0, 0, 0.8)';
        nav.querySelector('.nav').style.backdropFilter = 'blur(20px)';
    } else {
        nav.querySelector('.nav').style.background = 'rgba(255, 255, 255, 0.1)';
        nav.querySelector('.nav').style.backdropFilter = 'blur(10px)';
    }

    lastScroll = currentScroll;
});

// ========== RIPPLE EFFECT ON BUTTONS ==========
document.querySelectorAll('.ripple-effect').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ========== DYNAMIC GRADIENT ANIMATION ==========
let gradientAngle = 0;

function animateGradients() {
    gradientAngle += 0.5;
    
    document.querySelectorAll('.gradient-text').forEach(element => {
        element.style.backgroundImage = `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`;
    });

    requestAnimationFrame(animateGradients);
}

animateGradients();

// ========== PORTFOLIO CARD CLICK ANIMATION ==========
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add a pulse animation
        this.style.animation = 'pulse 0.5s ease';
        
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.98);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== PRELOAD ANIMATIONS ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== TECH CARD TOOLTIPS ==========
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const techName = this.getAttribute('data-tech');
        this.setAttribute('title', `Click to learn more about ${techName}`);
    });
});

// ========== PARALLAX EFFECT ON SCROLL ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.me-content, .section-title');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== CONSOLE EASTER EGG ==========
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #00f2fe;');
console.log('%cLooking for something? Check out my portfolio above! 🚀', 'font-size: 14px; color: #764ba2;');
console.log('%cBuilt with ❤️ by Manny Johnson', 'font-size: 12px; color: #8c8888;');

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
const debouncedScroll = debounce(() => {
    // Add any additional scroll operations here if needed
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ========== ACCESSIBILITY ENHANCEMENTS ==========
// Add keyboard navigation for portfolio cards
document.querySelectorAll('.portfolio-card').forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Portfolio project ${index + 1}`);
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// ========== RANDOM COLOR ACCENTS ==========
function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#00f2fe', '#4facfe'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Apply random accent colors to stats on hover
document.querySelectorAll('.stat-item').forEach(stat => {
    stat.addEventListener('mouseenter', function() {
        const randomColor = getRandomColor();
        this.querySelector('.stat-number').style.color = randomColor;
        this.style.borderColor = randomColor + '40';
    });
    
    stat.addEventListener('mouseleave', function() {
        this.querySelector('.stat-number').style.color = '';
        this.style.borderColor = '';
    });
});

console.log('%c✨ Interactive Portfolio Loaded Successfully!', 'font-size: 16px; font-weight: bold; color: #00f2fe; text-shadow: 2px 2px 4px rgba(0,242,254,0.3);');
