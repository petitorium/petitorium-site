// Interactive elements for Petitorium site
document.addEventListener('DOMContentLoaded', function() {
    // Selectors
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.md-header');
    const copyButton = document.getElementById('copy-button');
    const installCode = document.getElementById('install-code');
    const backToTopBtn = document.getElementById('back-to-top');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.md-header__nav');
    const animatedElements = document.querySelectorAll('.feature-column, section h2, .feature-image');
    const terminalLines = document.querySelectorAll('.terminal-line');

    // Smooth scrolling for anchor links
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href.startsWith('#')) return;

            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll handling (combined)
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        // Header effect
        if (header) {
            if (scrollY > 50) {
                header.style.background = 'rgba(46, 52, 64, 0.98)';
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
            } else {
                header.style.background = 'rgba(46, 52, 64, 0.9)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        }

        // Back to Top Button visibility
        if (backToTopBtn) {
            if (scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Animated elements reveal
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    // Back to Top Click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Copy Install Command
    if (copyButton && installCode) {
        copyButton.addEventListener('click', function() {
            const text = installCode.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const originalHtml = copyButton.innerHTML;
                copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-success"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                copyButton.classList.add('copy-success');
                
                setTimeout(() => {
                    copyButton.innerHTML = originalHtml;
                    copyButton.classList.remove('copy-success');
                }, 2000);
            });
        });
    }

    // Initialize animation states
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // Hero typing animation
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) {
        const text = heroTagline.innerText;
        heroTagline.innerText = '';
        
        // Add cursor
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        heroTagline.appendChild(cursor);
        
        let i = 0;
        function type() {
            if (i < text.length) {
                cursor.insertAdjacentText('beforebegin', text.charAt(i));
                i++;
                setTimeout(type, 30);
            }
        }
        setTimeout(type, 500);
    }

    // Terminal preview animation
    if (terminalLines.length > 0) {
        // Initialize terminal lines as hidden
        terminalLines.forEach(line => {
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
        });

        const terminalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    terminalLines.forEach((line, index) => {
                        line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        }, index * 150);
                    });
                    terminalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const terminalContainer = document.querySelector('.terminal-container');
        if (terminalContainer) terminalObserver.observe(terminalContainer);
    }

    // Mobile Menu Toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.md-header__nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Trigger scroll once to show elements already in view
    window.dispatchEvent(new Event('scroll'));
});
