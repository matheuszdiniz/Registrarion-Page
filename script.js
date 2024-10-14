document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (email !== confirmEmail) {
        document.getElementById('message').innerText = "Emails do not match.";
        return;
    }
    if (!isValidEmail(email)) {
        document.getElementById('message').innerText = "Please enter a valid email address.";
        return;
    }
    if (password !== confirmPassword) {
        document.getElementById('message').innerText = "Passwords do not match.";
        return;
    }
    if (!isPasswordSecure(password)) {
        document.getElementById('message').innerText = "Password does not meet security requirements.";
        return;
    }

    document.getElementById('message').innerText = `Welcome, ${username}! Your registration is successful.`;
    
    document.getElementById('registrationForm').reset();
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const passwordFeedback = document.getElementById('passwordFeedback');
    
    if (password.length > 16) {
        passwordFeedback.innerText = "Password must not exceed 16 characters.";
        passwordFeedback.style.color = "red";
    } else if (isPasswordSecure(password)) {
        passwordFeedback.innerText = "Password is secure.";
        passwordFeedback.style.color = "green";
    } else {
        passwordFeedback.innerText = "Password must be between 8 and 16 characters, include a number and a special character.";
        passwordFeedback.style.color = "red";
    }
});
document.getElementById('confirmEmail').addEventListener('input', function() {
    const email = document.getElementById('email').value;
    const confirmEmail = this.value;
    const confirmEmailFeedback = document.getElementById('confirmEmailFeedback');

    if (confirmEmail === email) {
        confirmEmailFeedback.innerText = "Emails match.";
        confirmEmailFeedback.style.color = "green";
    } else {
        confirmEmailFeedback.innerText = "Emails do not match.";
        confirmEmailFeedback.style.color = "red";
    }
});

function isPasswordSecure(password) {
    const minLength = 8;
    const maxLength = 16;
    const hasNumber = /\d/; 
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    return password.length >= minLength && password.length <= maxLength &&
           hasNumber.test(password) && hasSpecialChar.test(password);
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
