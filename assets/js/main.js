// Interactive elements for Petitorium site
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // Skip links that just have #

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.md-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.md-header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 15, 31, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        } else {
            header.style.background = 'rgba(15, 15, 31, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        }
    });

    // Animate feature columns on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature columns
    const columns = document.querySelectorAll('.feature-column');
    columns.forEach(column => {
        column.style.opacity = '0';
        column.style.transform = 'translateY(30px)';
        column.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(column);
    });

     // Add subtle glow effect on hover for interactive elements
     const interactiveElements = document.querySelectorAll('.md-header__button, .md-header__nav-link, .feature-column');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 8px rgba(136, 192, 208, 0.3))';
        });

        element.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });

    // Terminal mockup animation (subtle typing effect)
    const terminalText = document.querySelector('.hero-image svg text');
    if (terminalText) {
        // Add a subtle pulsing effect to the terminal
        setInterval(() => {
            const terminal = document.querySelector('.hero-image svg');
            if (terminal) {
                terminal.style.filter = 'drop-shadow(0 0 2px rgba(136, 192, 208, 0.1))';
                setTimeout(() => {
                    terminal.style.filter = 'none';
                }, 2000);
            }
        }, 5000);
    }
});
