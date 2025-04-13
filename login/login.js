// Function to handle Sign-Up
function handleSignUp() {
    const inputs = document.querySelectorAll('.signup input');

    const username = inputs[0].value.trim();           // First input: User name
    const email = inputs[1].value.trim();              // Second input: Email
    const password = inputs[2].value.trim();           // Third input: Password
    // Confirm password is intentionally ignored based on your request

    // Store signup information in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Signup successful! You can now log in.");
}

// Function to handle Login
function handleLogin() {
    const loginInputs = document.querySelectorAll('.login input');

    const loginEmail = loginInputs[0].value.trim();       // First login input: Email
    const loginPassword = loginInputs[1].value.trim();    // Second login input: Password

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedUsername = localStorage.getItem('username');

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert(`Welcome back, ${storedUsername}! You are logged in.`);
    } else {
        alert("Login failed! Incorrect email or password.");
    }
}

// Add event listeners for buttons
document.getElementById('signupBtn').addEventListener('click', (e) => {
    e.preventDefault();
    handleSignUp();
});

document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    handleLogin();
});
