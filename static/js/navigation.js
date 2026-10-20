document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const sections = document.querySelectorAll('main.main-content > section[id]');

    // Mobile nav toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isExpanded = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
            navToggle.classList.toggle('is-open', isExpanded);
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('is-open');
            }
        });
    }

    // Smooth scroll for anchors
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.classList.remove('is-open');
                }
            }

            const hrefAttribute = this.getAttribute('href');
            const targetElement = document.querySelector(hrefAttribute);

            if (targetElement) {
                e.preventDefault();
                const offset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scrollspy for active navigation link
    function updateScrollspy() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Add scrolled class to navbar for backdrop styling
        if (mainNav) {
            if (window.scrollY > 20) {
                mainNav.classList.add('nav-scrolled');
            } else {
                mainNav.classList.remove('nav-scrolled');
            }
        }
    }

    window.addEventListener('scroll', updateScrollspy, { passive: true });
    updateScrollspy();
});