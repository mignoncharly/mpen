/**
 * navigation.js
 * Handles mobile navigation menu functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInside = mobileMenuToggle.contains(event.target) || navList.contains(event.target);
            
            if (!isClickInside && navList.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
        
        // Close mobile menu when window is resized to desktop size
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 992 && navList.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    }
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});