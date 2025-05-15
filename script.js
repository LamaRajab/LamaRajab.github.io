// Active state for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to remove 'active' class from all links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Add 'active' class to the current link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveClass();
        link.classList.add('active');
    });
});

// Automatically underline "Home" when on the homepage
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const homeLink = document.querySelector('nav ul li a[href="index.html"]');
    if (currentPage === '/index.html' || currentPage === '/') {
        if (homeLink) homeLink.classList.add('active');
    }
    else {
        // Add active class to the link corresponding to the current page
        navLinks.forEach(link => {
            if (currentPage.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            }
        });
    }
});

// Contact Form Validation
const contactForm = document.querySelector('.contact form');
const nameInput = contactForm.querySelector('input[name="name"]');
const emailInput = contactForm.querySelector('input[name="email"]');
const messageInput = contactForm.querySelector('textarea[name="message"]');
const submitButton = contactForm.querySelector('button[type="submit"]');

// Enable or disable the submit button based on input validation
function validateForm() {
    if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Event listeners for form inputs to validate the form
nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
messageInput.addEventListener('input', validateForm);

// Form submission handler (example - just prevents the default action for demo)
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    contactForm.reset();  // Reset the form fields
    submitButton.disabled = true;  // Disable submit button again
});

// Social Media Links (Follow Me)
const socialLinks = document.querySelectorAll('.social-icons a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Add your custom link behavior here
        window.location.href = link.getAttribute('href');
    });
});
