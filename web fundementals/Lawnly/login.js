    // Add an event listener to the submit button
    document.getElementById('submit').addEventListener('click', function () {
        // Get the values of the username and password input fields
        const username = document.getElementById('username-input').value;
        const password = document.getElementById('password-input').value;
    
        // Define your hardcoded correct username and password
        const correctUsername = 'Donald';  // Change this to your desired username
        const correctPassword = 'Duck';  // Change this to your desired password
    
        // Check if the entered username and password are correct
        if (username === correctUsername && password === correctPassword) {
        // If they are correct, redirect to the home page
        window.location.href = 'dashboard.html';
        } else {
        // If they are incorrect, alert the user
        alert('Invalid username or password');
        }
    });