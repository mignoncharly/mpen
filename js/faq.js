/**
 * faq.js
 * Handles FAQ accordion functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        // Add click event listeners to all FAQ questions
        faqQuestions.forEach(question => {
            // Add keyboard accessibility
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            
            // Get the corresponding answer
            const answer = question.nextElementSibling;
            if (answer) {
                // Set up the initial ARIA relationship
                const answerId = `faq-answer-${Math.floor(Math.random() * 1000)}`;
                answer.setAttribute('id', answerId);
                question.setAttribute('aria-controls', answerId);
                
                // Add click event listener
                question.addEventListener('click', () => {
                    // Toggle the active class on the answer
                    answer.classList.toggle('active');
                    
                    // Update aria-expanded attribute
                    const isExpanded = answer.classList.contains('active');
                    question.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
                    
                    // Adjust padding when active
                    if (isExpanded) {
                        answer.style.padding = '0 0 var(--spacing-sm) 0';
                    } else {
                        // Use a timeout to make sure the padding change happens after the height transition
                        setTimeout(() => {
                            if (!answer.classList.contains('active')) {
                                answer.style.padding = '0';
                            }
                        }, 300);
                    }
                });
            }
        });
        
        // Open the first FAQ item by default
        if (faqQuestions[0]) {
            faqQuestions[0].click();
        }
        
        // Add keyboard support
        faqQuestions.forEach(question => {
            question.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    question.click();
                }
            });
        });
    }
});