// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navPills = document.querySelector('.nav-pills');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navPills.style.background = 'rgba(10, 10, 10, 0.9)';
        navPills.style.backdropFilter = 'blur(20px)';
        navPills.style.padding = '10px 20px';
        navPills.style.borderRadius = '100px';
        navPills.style.border = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        navPills.style.background = 'transparent';
        navPills.style.backdropFilter = 'none';
        navPills.style.padding = '0 20px';
        navPills.style.border = 'none';
    }

    lastScroll = currentScroll;
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ========== TECH LOGOS ANIMATION ON SCROLL ==========
const techLogosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const logos = entry.target.querySelectorAll('.tech-logo-item');
            logos.forEach((logo, index) => {
                setTimeout(() => {
                    logo.style.opacity = '0.5';
                    logo.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.5 });

const techLogosSection = document.querySelector('.tech-logos');
if (techLogosSection) {
    const logos = techLogosSection.querySelectorAll('.tech-logo-item');
    logos.forEach(logo => {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        logo.style.transition = 'all 0.5s ease';
    });
    techLogosObserver.observe(techLogosSection);
}

// ========== ADDITIONAL TECH ICONS ANIMATION ==========
const techIconsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const icons = entry.target.querySelectorAll('i');
            icons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.opacity = '0.3';
                    icon.style.transform = 'scale(1)';
                }, index * 50);
            });
        }
    });
}, { threshold: 0.3 });

const additionalTechIcons = document.querySelector('.additional-tech-icons');
if (additionalTechIcons) {
    const icons = additionalTechIcons.querySelectorAll('i');
    icons.forEach(icon => {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.8)';
        icon.style.transition = 'all 0.4s ease';
    });
    techIconsObserver.observe(additionalTechIcons);
}

// ========== PROFILE IMAGE 3D TILT EFFECT ==========
const profileWrapper = document.querySelector('.profile-image-wrapper');

if (profileWrapper) {
    profileWrapper.addEventListener('mousemove', (e) => {
        const rect = profileWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        profileWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    profileWrapper.addEventListener('mouseleave', () => {
        profileWrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// ========== SERVICE CARDS PARALLAX EFFECT ==========
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========== PILL BUTTON RIPPLE EFFECT ==========
document.querySelectorAll('.pill-btn').forEach(button => {
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

// Add ripple animation styles
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
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

// ========== TYPING EFFECT FOR HERO NAME ==========
const heroName = document.querySelector('.hero-name');
if (heroName) {
    const text = heroName.textContent;
    heroName.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            heroName.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(type, 800);
}

// ========== CONTACT ICONS WAVE ANIMATION ==========
const contactIcons = document.querySelectorAll('.contact-icon');
contactIcons.forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(20px)';
    icon.style.transition = `all 0.5s ease ${index * 0.1}s`;
});

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactIcons.forEach(icon => {
                icon.style.opacity = '1';
                icon.style.transform = 'translateY(0)';
            });
        }
    });
}, { threshold: 0.5 });

const contactSection = document.querySelector('.contact-links');
if (contactSection) {
    contactObserver.observe(contactSection);
}

// ========== SCROLL PROGRESS INDICATOR ==========
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
};

// Add scroll indicator styles
const indicatorStyle = document.createElement('style');
indicatorStyle.textContent = `
    .scroll-indicator {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #10b981, #34d399);
        z-index: 9999;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(indicatorStyle);
createScrollIndicator();

// ========== PARALLAX SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax effect on hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Parallax effect on tech logos
    const techLogos = document.querySelector('.tech-logos');
    if (techLogos) {
        techLogos.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ========== RANDOM GRADIENT ANIMATION ==========
let hue = 0;
setInterval(() => {
    hue = (hue + 1) % 360;
    document.documentElement.style.setProperty('--emerald', `hsl(${142 + (hue / 10)}, 76%, 36%)`);
}, 50);

// ========== CURSOR TRAIL EFFECT ==========
const createCursorTrail = () => {
    let dots = [];
    const maxDots = 10;

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            const dot = document.createElement('div');
            dot.className = 'cursor-trail';
            dot.style.left = e.pageX + 'px';
            dot.style.top = e.pageY + 'px';
            document.body.appendChild(dot);
            
            dots.push(dot);
            
            if (dots.length > maxDots) {
                const oldDot = dots.shift();
                oldDot.remove();
            }
            
            setTimeout(() => {
                dot.remove();
                dots = dots.filter(d => d !== dot);
            }, 1000);
        }
    });
};

const trailStyle = document.createElement('style');
trailStyle.textContent = `
    .cursor-trail {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(16, 185, 129, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        animation: fade-out 1s ease-out;
    }
    
    @keyframes fade-out {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);
createCursorTrail();

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== CONSOLE MESSAGE ==========
console.log('%c🚀 Portfolio Loaded', 'font-size: 20px; font-weight: bold; color: #10b981;');
console.log('%cDesigned & Developed by Manny Johnson', 'font-size: 14px; color: #6b7280;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 12px; color: #9ca3af;');

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function
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

// ========== ACCESSIBILITY ENHANCEMENTS ==========
document.querySelectorAll('.service-card, .contact-icon').forEach((element, index) => {
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    
    element.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            element.click();
        }
    });
});

// ========== EASTER EGG: KONAMI CODE ==========
let konamiCode = [];
const correctCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === correctCode.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        console.log('%c🎮 KONAMI CODE ACTIVATED!', 'font-size: 24px; font-weight: bold; color: #10b981;');
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);
