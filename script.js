document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle the Appointment Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    const formMessage = document.getElementById('form-message');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            // Prevent the page from refreshing when clicking submit
            e.preventDefault();
            
            // Because this is hosted on GitHub Pages (which has no backend database),
            // we will simulate a successful form submission visually for the user.
            
            // Show the success message
            formMessage.classList.remove('hidden');
            
            // Clear the form fields
            appointmentForm.reset();

            // Automatically hide the success message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Set minimum date for the appointment date picker to today
    const dateInput = document.getElementById('date');
    if(dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});