document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form values
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Validate form fields
    if (fullName.length < 5) {
        alert("Name must be at least 5 characters");
    } else if (!email.includes("@")) {
        alert("Enter a correct email address");
    } else if (phoneNumber.length !== 10 || phoneNumber === "123456789") {
        alert("Enter a valid 10-digit phone number");
    } else if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        alert("Password is not strong");
    } else if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
    } else {
        // If all validations pass, you can submit the form or perform further actions
        alert("Form submitted successfully!");
    }
});
