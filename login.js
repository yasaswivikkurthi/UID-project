        // Modify the login page script
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if there are registered users in localStorage
    const existingUsers = localStorage.getItem('registeredUsers');
    
    // Add loading state to button
    const button = this.querySelector('button');
    const originalText = button.innerHTML;
    button.innerHTML = 'Logging in...';
    button.disabled = true;
    
    // Authentication logic
    setTimeout(() => {
        // Check if we have any registered users
        if (!existingUsers) {
            button.innerHTML = originalText;
            button.disabled = false;
            alert('No registered users found. Please create an account first.');
            return;
        }
        
        // Parse the registered users
        const users = JSON.parse(existingUsers);
        
        // Find user with matching email
        const foundUser = users.find(user => user.email === email);
        
        // Check if user exists and password matches
        if (foundUser && foundUser.password === password) {
            // Create userData object with name and email
            const userData = {
                name: name,
                email: email
            };
            
            // Store user data in localStorage for profile access
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Redirect to movies page
            window.location.href = 'Movies.html';
        } else {
            // Reset button state
            button.innerHTML = originalText;
            button.disabled = false;
            
            // Show appropriate error message
            if (!foundUser) {
                alert('Email address not found. Please check your email or create an account.');
            } else {
                alert('Incorrect password. Please try again.');
            }
        }
    }, 1000);
});