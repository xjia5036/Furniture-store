$(document).ready(function() {
    // Initialize form validation for #contactForm
    $("#contactForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        // Function to handle form submission if validation is successful
        submitHandler: function(form) {
            // Display a success message here
            alert("Form submitted successfully! Thank you for your feedback.");

            // Reset the form
            form.reset(); 
            
            // Return false to prevent the default submit behavior
            return false; 
        }
    });
});

// Initialize AOS (Animate on Scroll) library with custom settings 
    AOS.init({
        duration: 2000,  
        once: false,     
    });


$(document).ready(function() {
    // Initialize Glide.js for the hero section carousel 
    const glide = new Glide('.glide', {
        type: 'carousel',
        autoplay: 2500,
        hoverpause: true,
        perView: 1,
    });
    glide.mount(); // Mount the glide instance
});




