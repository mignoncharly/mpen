/**
 * testimonials.js
 * Handles testimonial slider functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Testimonial slider functionality
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (testimonials.length > 0 && prevButton && nextButton) {
        let currentTestimonial = 0;
        
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== currentTestimonial) {
                testimonial.style.display = 'none';
            }
        });
        
        // Function to show a specific testimonial
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    // Fade in the current testimonial
                    testimonial.style.opacity = '0';
                    testimonial.style.display = 'block';
                    
                    // Use a timeout for the transition effect
                    setTimeout(() => {
                        testimonial.style.opacity = '1';
                        testimonial.style.transition = 'opacity 0.5s ease';
                    }, 10);
                } else {
                    testimonial.style.display = 'none';
                }
            });
        }
        
        // Event listener for the previous button
        prevButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        // Event listener for the next button
        nextButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        // Auto-rotate testimonials
        let testimonialInterval;
        
        function startAutoRotate() {
            testimonialInterval = setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 8000); // Change testimonial every 8 seconds
        }
        
        function stopAutoRotate() {
            clearInterval(testimonialInterval);
        }
        
        // Start the auto-rotation
        startAutoRotate();
        
        // Stop auto-rotation when hovering over testimonials or controls
        const testimonialSection = document.querySelector('.testimonials');
        testimonialSection.addEventListener('mouseenter', stopAutoRotate);
        testimonialSection.addEventListener('mouseleave', startAutoRotate);
        
        // Keyboard navigation for accessibility
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentTestimonial);
                stopAutoRotate();
                setTimeout(startAutoRotate, 10000);
            } else if (event.key === 'ArrowRight') {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
                stopAutoRotate();
                setTimeout(startAutoRotate, 10000);
            }
        });
    }
});