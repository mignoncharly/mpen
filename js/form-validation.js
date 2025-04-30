/**
 * form-validation.js
 * Handles form validation and submission via Formspree
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    
    if (form) {
        // Add Formspree attribute to form
        form.setAttribute('action', 'https://formspree.io/f/mgvkvgzr');
        form.setAttribute('method', 'POST');
        
        // Add error message elements to all required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            const fieldGroup = field.closest('.form-group');
            if (fieldGroup) {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                
                // Set appropriate error message based on field type
                if (field.type === 'email') {
                    errorMessage.textContent = getCurrentTranslation('form-email-error', 'Veuillez entrer une adresse email valide');
                } else if (field.type === 'tel') {
                    errorMessage.textContent = getCurrentTranslation('form-phone-error', 'Veuillez entrer un numéro de téléphone valide');
                } else if (field.type === 'checkbox') {
                    errorMessage.textContent = getCurrentTranslation('form-checkbox-error', 'Vous devez accepter pour continuer');
                } else {
                    errorMessage.textContent = getCurrentTranslation('form-field-required', 'Ce champ est obligatoire');
                }
                
                fieldGroup.appendChild(errorMessage);
            }
        });
        
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.style.display = 'none';
        successMessage.textContent = getCurrentTranslation('form-success', 'Votre demande a été envoyée avec succès! Nous vous contacterons dans les plus brefs délais.');
        form.insertBefore(successMessage, form.firstChild);
        
        // Create error message element for form submission errors
        const formErrorMessage = document.createElement('div');
        formErrorMessage.className = 'form-error-message';
        formErrorMessage.style.display = 'none';
        formErrorMessage.textContent = getCurrentTranslation('form-error', 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
        form.insertBefore(formErrorMessage, form.firstChild);
        
        // Validate form on input
        form.addEventListener('input', (e) => {
            if (e.target.hasAttribute('required')) {
                validateField(e.target);
            }
        });
        
        // Validate form on submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            // Hide any previous form-level messages
            successMessage.style.display = 'none';
            formErrorMessage.style.display = 'none';
            
            // Validate all required fields
            requiredFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Submit the form data to Formspree
                const formData = new FormData(form);
                submitFormToFormspree(formData, form);
            } else {
                // Scroll to first error
                const firstError = form.querySelector('.form-group.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
    
    // Get current translation based on the active language
    function getCurrentTranslation(key, defaultText) {
        // This function relies on the translations.js file
        // If the translation key is not defined, use the default text
        try {
            const languageButtons = document.querySelectorAll('.lang-btn');
            let currentLanguage = 'fr'; // Default to French
            
            // Find the active language
            languageButtons.forEach(button => {
                if (button.classList.contains('active')) {
                    currentLanguage = button.getAttribute('data-language');
                }
            });
            
            // Try to get translation from window.translations object
            if (window.translations && 
                window.translations[currentLanguage] && 
                window.translations[currentLanguage][key]) {
                return window.translations[currentLanguage][key];
            }
            
            return defaultText;
        } catch (error) {
            return defaultText;
        }
    }
    
    // Validate individual field
    function validateField(field) {
        const fieldGroup = field.closest('.form-group');
        
        // Skip validation if field group not found
        if (!fieldGroup) return true;
        
        let isValid = true;
        const errorMessage = fieldGroup.querySelector('.error-message');
        
        // Clear previous validation
        fieldGroup.classList.remove('error');
        
        // Validate based on field type
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = field.value.trim() !== '' && emailRegex.test(field.value);
            
            if (errorMessage && !isValid) {
                errorMessage.textContent = getCurrentTranslation('form-email-error', 'Veuillez entrer une adresse email valide');
            }
        } else if (field.type === 'tel') {
            // Basic phone validation (allows different formats)
            const phoneRegex = /^[+\d\s()-]{8,20}$/;
            isValid = field.value.trim() !== '' && phoneRegex.test(field.value);
            
            if (errorMessage && !isValid) {
                errorMessage.textContent = getCurrentTranslation('form-phone-error', 'Veuillez entrer un numéro de téléphone valide');
            }
        } else if (field.type === 'checkbox') {
            isValid = field.checked;
            
            if (errorMessage && !isValid) {
                errorMessage.textContent = getCurrentTranslation('form-checkbox-error', 'Vous devez accepter pour continuer');
            }
        } else if (field.tagName === 'SELECT') {
            isValid = field.value !== '';
            
            if (errorMessage && !isValid) {
                errorMessage.textContent = getCurrentTranslation('form-field-required', 'Ce champ est obligatoire');
            }
        } else {
            // Text, textarea fields
            isValid = field.value.trim() !== '';
            
            if (errorMessage && !isValid) {
                errorMessage.textContent = getCurrentTranslation('form-field-required', 'Ce champ est obligatoire');
            }
        }
        
        // Update UI
        if (!isValid) {
            fieldGroup.classList.add('error');
        }
        
        return isValid;
    }
    
    // Submit form data to Formspree
    function submitFormToFormspree(formData, form) {
        // Get form elements
        const submitButton = form.querySelector('button[type="submit"]');
        const successMessage = form.querySelector('.form-success-message');
        const formErrorMessage = form.querySelector('.form-error-message');
        
        // Show loading state
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = getCurrentTranslation('form-submitting', 'Envoi en cours...');
        
        // Add the current language and form metadata
        const languageButtons = document.querySelectorAll('.lang-btn');
        let currentLanguage = 'fr'; // Default to French
        languageButtons.forEach(button => {
            if (button.classList.contains('active')) {
                currentLanguage = button.getAttribute('data-language');
            }
        });
        formData.append('_language', currentLanguage);
        formData.append('_subject', `Nouvelle inscription MPEN - ${formData.get('name')}`);
        
        // Submit to Formspree
        fetch(form.getAttribute('action'), {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle success
            if (successMessage) {
                successMessage.style.display = 'block';
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // Optional: Track conversion with Google Analytics
            if (typeof gtag === 'function') {
                gtag('event', 'form_submit', {
                    'event_category': 'registration',
                    'event_label': 'Registration Form'
                });
            }
            
            // Reset form
            form.reset();
            
            // Clear any error states
            form.querySelectorAll('.form-group.error').forEach(group => {
                group.classList.remove('error');
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 5000);
        })
        .catch(error => {
            // Handle error
            console.error('Error submitting form:', error);
            
            if (formErrorMessage) {
                formErrorMessage.style.display = 'block';
                formErrorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        })
        .finally(() => {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    }
});