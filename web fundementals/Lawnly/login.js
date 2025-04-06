document.getElementById('submit').addEventListener('click', function () {
        
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    
        
    const correctUsername = 'Donald';  
    const correctPassword = 'Duck';  
    
        
    if (username === correctUsername && password === correctPassword) {
        
    window.location.href = 'dashboard.html';
    } else {
        
    alert('Invalid username or password');
    }
});