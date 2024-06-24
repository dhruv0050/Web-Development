document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let password = document.getElementById('password').value;
    let message = validatePassword(password);

    document.getElementById('message').textContent = message;
});

function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    let isUpperCase = false;
    let isLowerCase = false;
    let isDigit = false;

    for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
            isUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            isLowerCase = true;
        } else if (char >= '0' && char <= '9') {
            isDigit = true;
        }

        if (isUpperCase && isLowerCase && isDigit) {
            return "Valid password.";
        }
    }

    if (!isUpperCase) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!isLowerCase) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!isDigit) {
        return "Password must contain at least one digit.";
    }

    return "Password is invalid.";
}