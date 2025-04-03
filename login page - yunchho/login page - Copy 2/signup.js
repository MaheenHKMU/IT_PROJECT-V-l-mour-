document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const registerBtn = document.getElementById('register');
    
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Check if the form is valid
        if (form.checkValidity()) {
            // Here you can add your logic for handling the registration
            console.log('Username:', username);
            console.log('Password:', password);
            sessionStorage.setItem('username', username);
            sessionStorage.getItem("username", username);
            
            
            // If registration is successful, redirect to goBack.html
            window.location.href = 'goBack.html';
        } else {
            // If the form is not valid, trigger the browser's default validation UI
            form.reportValidity();
        }
    });
});