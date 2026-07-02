/* =========================================
   Dade County Rec Softball Ltd - JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Set Current Year
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on link click
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Scroll Animations (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Simulation
    const contactForm = document.getElementById('main-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            // Simulate network request
            setTimeout(() => {
                btn.textContent = 'Message Sent! ⚾';
                btn.style.background = '#0f254c'; // Navy
                btn.style.color = '#fff';
                
                setTimeout(() => {
                    contactForm.reset();
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.opacity = '1';
                    btn.style.background = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }
});
