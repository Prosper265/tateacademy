document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const closeButton = document.querySelector('.mobile-nav-close');
    const mobileNav = document.querySelector('.mobile-navigation');
    
    // Optional: create a backdrop overlay for better UX
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay && mobileNav) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }
    
    // Open menu
    function openMobileMenu() {
        mobileNav.classList.add('open');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scrolling
    }
    
    // Close menu
    function closeMobileMenu() {
        mobileNav.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (toggleButton) {
        toggleButton.addEventListener('click', openMobileMenu);
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeMobileMenu);
    }
    
    // Close when clicking the backdrop overlay
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
            closeMobileMenu();
        }
    });
    
    // Optional: close menu if window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
            closeMobileMenu();
        }
    });
});

// Update year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Go to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const goToTopBtn = document.getElementById('go-to-top');

    // Show button when scrolled down 200px
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            goToTopBtn.classList.add('show');
        } else {
            goToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top on click
    goToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});