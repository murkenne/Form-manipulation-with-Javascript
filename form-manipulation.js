// Connected to index1.html file

// **Task 2: Handle Form Submission**
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Collect user input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validate form
    if (!validateForm(name, email, message)) {
        return; // Stop if validation fails
    }

    // Create an object to store user input
    let userInput = {
        name: name,
        email: email,
        message: message,
    };

    // Log user input for now (or store it in an array/database)
    console.log("Form Submitted Successfully:", userInput);

    // Reset the form
    document.getElementById("contactForm").reset();

    // Display success message
    alert("Thank you for your submission!");
});

// **Task 3: Implement Form Validation**
function validateForm(name, email, message) {
    let errorDiv = document.getElementById("error");
    errorDiv.textContent = ""; // Clear previous error messages

    if (!name || !email || !message) {
        errorDiv.textContent = "All fields are required.";
        return false;
    }

    if (!validateEmail(email)) {
        errorDiv.textContent = "Please enter a valid email address.";
        return false;
    }

    return true; // All validations passed
}

// Helper function to validate email
function validateEmail(email) {
    // Simple email regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
