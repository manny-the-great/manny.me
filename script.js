// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {

    // ========== HEADER SCROLL EFFECT ==========
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const handleHeaderScroll = () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    // ========== ACTIVE LINK ON SCROLL ==========
    const updateActiveLink = () => {
        const scrollY = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    };
    window.addEventListener('scroll', updateActiveLink);

    // ========== MOBILE TOGGLE ==========
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
            mobileToggle.classList.toggle('active');
        });
    }

    // Close on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('open');
            mobileToggle.classList.remove('active');
        });
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = header.offsetHeight + 20;
                const top = target.offsetTop - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ========== SCROLL REVEAL ==========
    const revealElements = document.querySelectorAll(
        '.about-label, .about-title, .about-description, .about-cta-row, ' +
        '.projects-header, .contact-title, .contact-subtitle, .contact-links, ' +
        '.service-item, .brands-section'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ========== HERO ENTRANCE ANIMATION ==========
    const heroEyebrow = document.querySelector('.hero-eyebrow');
    const heroTitle = document.querySelector('.hero-title');
    const heroImageWrapper = document.querySelector('.hero-image-wrapper');
    const heroQuote = document.querySelector('.hero-quote');
    const heroTagline = document.querySelector('.hero-tagline');
    const servicesStrip = document.querySelector('.services-strip');

    const heroElements = [heroEyebrow, heroTitle, heroImageWrapper, heroQuote, heroTagline, servicesStrip];
    heroElements.forEach((el, i) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
        }
    });

    setTimeout(() => {
        heroElements.forEach(el => {
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }, 200);

    // ========== PROJECTS HORIZONTAL SCROLL ==========
    const scrollContainer = document.querySelector('.projects-scroll-container');
    const scrollTrack = document.getElementById('projects-track');
    const scrollProgress = document.getElementById('scroll-progress');

    if (scrollContainer && scrollTrack) {
        // Drag-to-scroll
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('dragging');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('dragging');
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('dragging');
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });

        // Scroll progress indicator
        const updateScrollProgress = () => {
            if (!scrollProgress) return;
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            if (maxScroll <= 0) {
                scrollProgress.style.width = '100%';
                return;
            }
            const progress = (scrollContainer.scrollLeft / maxScroll) * 100;
            scrollProgress.style.width = `${Math.min(progress, 100)}%`;
        };

        scrollContainer.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress();

        // Wheel to horizontal scroll (when hovering projects)
        scrollContainer.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY * 1.5;
            }
        }, { passive: false });

        // Auto-scroll animation on load (subtle hint)
        setTimeout(() => {
            const autoScroll = () => {
                scrollContainer.scrollTo({ left: 120, behavior: 'smooth' });
                setTimeout(() => {
                    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                }, 600);
            };

            const projectObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    autoScroll();
                    projectObserver.disconnect();
                }
            }, { threshold: 0.3 });

            projectObserver.observe(scrollContainer);
        }, 1000);
    }

    // ========== PROJECT CARD TILT EFFECT ==========
    document.querySelectorAll('.project-card[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========== HERO IMAGE PARALLAX ==========
    const heroImageContainer = document.querySelector('.hero-image-wrapper');
    if (heroImageContainer) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroImageContainer.style.transform = `translateY(${scrolled * 0.08}px)`;
            }
        });
    }

    // ========== CONTACT CARDS STAGGERED REVEAL ==========
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    });

    const contactObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            contactCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }
    }, { threshold: 0.3 });

    const contactSection = document.querySelector('.contact-links');
    if (contactSection) contactObserver.observe(contactSection);

    // ========== PAGE LOAD FADE ==========
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });

    // ========== SCROLL INDICATOR AT TOP ==========
    const createScrollIndicator = () => {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
            background: linear-gradient(90deg, #ff5e1a, #ff3d00);
            transition: width 0.15s ease; width: 0;
        `;
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / maxScroll) * 100;
            indicator.style.width = `${progress}%`;
        });
    };
    createScrollIndicator();

    // ========== CONSOLE ==========
    console.log('%c🚀 Portfolio Loaded', 'font-size: 20px; font-weight: bold; color: #ff5e1a;');
    console.log('%cDesigned & Developed by Manny Johnson', 'font-size: 14px; color: #6b6b6b;');

    // ========== ACCESSIBILITY ==========
    document.querySelectorAll('.project-card, .contact-card').forEach(el => {
        el.setAttribute('tabindex', '0');
        el.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = el.querySelector('a');
                if (link) link.click();
            }
        });
    });
});
