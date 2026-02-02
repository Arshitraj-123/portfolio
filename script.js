// ===== SMOOTH SCROLLING & NAVIGATION =====
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const navIndicator = document.querySelector('.nav-indicator');

    // Update active navigation on scroll
    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === sectionId) {
                        link.classList.add('active');
                        updateIndicatorPosition(link);
                    }
                });
            }
        });
    };

    // Update indicator position
    const updateIndicatorPosition = (activeLink) => {
        if (navIndicator && activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const sidebarRect = activeLink.parentElement.getBoundingClientRect();
            navIndicator.style.top = `${linkRect.top - sidebarRect.top + linkRect.height / 2 - 20}px`;
        }
    };

    // Smooth scroll on nav click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initialize and bind scroll event
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe tech cards for staggered animation
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    });

    const techSection = document.querySelector('.techstack-section');
    const techObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                techCards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            }
        });
    }, { threshold: 0.2 });

    if (techSection) {
        techObserver.observe(techSection);
    }

    // ===== PROJECTS CAROUSEL =====
    const projectSlides = document.querySelectorAll('.project-slide');
    const nextBtn = document.getElementById('nextProject');
    const prevBtn = document.getElementById('prevProject');
    let currentSlide = 0;
    const totalSlides = projectSlides.length;

    const showSlide = (index) => {
        // Remove active class from all slides
        projectSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Handle wrapping
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Add active class to current slide
        projectSlides[currentSlide].classList.add('active');
    };

    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    // Keyboard navigation for carousel
    document.addEventListener('keydown', (e) => {
        const projectsSection = document.querySelector('.projects-section');
        if (projectsSection) {
            const rect = projectsSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView) {
                if (e.key === 'ArrowRight') {
                    showSlide(currentSlide + 1);
                } else if (e.key === 'ArrowLeft') {
                    showSlide(currentSlide - 1);
                }
            }
        }
    });

    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = `
                <span>Sending...</span>
                <svg class="send-icon spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
                </svg>
            `;
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success state
            submitBtn.innerHTML = `
                <span>Message Sent!</span>
                <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            `;
            submitBtn.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';

            // Reset form
            contactForm.reset();

            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        });
    }

    // ===== FORM INPUT ANIMATIONS =====
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // ===== MAGNETIC HOVER EFFECT ON BUTTONS =====
    const magneticButtons = document.querySelectorAll('.btn-primary, .social-link');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // ===== PARALLAX EFFECT ON ABOUT SECTION =====
    const aboutSection = document.querySelector('.about-section');
    const floatingShapes = document.querySelectorAll('.shape');

    if (aboutSection && floatingShapes.length) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;

            if (scrolled < sectionTop + sectionHeight) {
                floatingShapes.forEach((shape, index) => {
                    const speed = 0.1 + (index * 0.05);
                    shape.style.transform = `translateY(${scrolled * speed}px)`;
                });
            }
        });
    }

    // ===== TYPING EFFECT FOR TITLE =====
    const titleElement = document.querySelector('.title');

    if (titleElement) {
        const originalText = titleElement.textContent;
        titleElement.textContent = '';
        titleElement.style.visibility = 'visible';

        let charIndex = 0;
        const typeSpeed = 50;

        const typeText = () => {
            if (charIndex < originalText.length) {
                titleElement.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typeSpeed);
            }
        };

        // Start typing animation after a short delay
        setTimeout(typeText, 800);
    }

    // ===== HIDE SIDEBAR IN PROJECTS SECTION =====
    const projectsSection = document.getElementById('projects');
    const sidebar = document.querySelector('.sidebar');

    if (projectsSection && sidebar) {
        window.addEventListener('scroll', () => {
            const rect = projectsSection.getBoundingClientRect();
            // If projects section is predominantly in view
            if (rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.4) {
                sidebar.style.opacity = '0';
                sidebar.style.pointerEvents = 'none';
            } else {
                sidebar.style.opacity = '1';
                sidebar.style.pointerEvents = 'all';
            }
        });
    }
});

// Add spinning animation for loading state
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .spinning {
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(style);
