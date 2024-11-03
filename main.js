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

