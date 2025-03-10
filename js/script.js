// Login Form Submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation logic
    if (username === "zX9&kT!mL5@wQ3" && password === "7*pN@Fy#8vL!zT") {
        alert("Logged in successfully!");
        window.location.href = "main.html"; // Redirect to the dashboard
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Forgot Password Alert
document.getElementById("forgot-password").addEventListener("click", function() {
    alert("Password recovery link has been sent!");
});

// Logout Functionality
function logout() {
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to the Login page
}

// Navigation Buttons
function goBack() {
    window.history.back(); // Navigate to the previous page
}
function goForward() {
    window.history.forward(); // Navigate to the next page
}

