        document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    // Check if there are existing users in localStorage
    const existingUsers = localStorage.getItem('registeredUsers');
    let users = [];
    
    if (existingUsers) {
        users = JSON.parse(existingUsers);
        
        // Check if email already exists
        if (users.some(user => user.email === email)) {
            alert('An account with this email already exists. Please login or use a different email.');
            return;
        }
    }
    
    // Create new user data
    const userData = { name, email, mobile, password };
    
    // Add to users array
    users.push(userData);
    
    // Save updated users array to localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    // Also set current user
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    // Add loading state to button
    const button = this.querySelector('button');
    const originalText = button.innerHTML;
    button.innerHTML = 'Creating Account...';
    button.disabled = true;
    
    // Simulate account creation 
    setTimeout(() => {
        // Redirect to Movies page after successful registration
        window.location.href = 'Login.html';
    }, 1000);
});
    