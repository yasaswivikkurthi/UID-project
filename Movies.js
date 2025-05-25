 document.addEventListener('DOMContentLoaded', function() {
            // Retrieve user data from localStorage
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');

            // Profile Modal Logic
            const profileBtn = document.getElementById('profile-btn');
            const profileModal = document.getElementById('profile-modal');
            const closeProfileModalBtn = document.getElementById('close-profile-modal');
            const profileForm = document.getElementById('profile-form');
            const profileNameInput = document.getElementById('profile-name');
            const profileEmailInput = document.getElementById('profile-email');

            // Populate profile form with existing data
            profileNameInput.value = userData.name || '';
            profileEmailInput.value = userData.email || '';

            profileBtn.addEventListener('click', function() {
                profileModal.style.display = 'block';
            });

            closeProfileModalBtn.addEventListener('click', function() {
                profileModal.style.display = 'none';
            });

            profileForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Save profile data to localStorage
                const updatedUserData = {
                    name: profileNameInput.value,
                    email: profileEmailInput.value
                };
                
                localStorage.setItem('userData', JSON.stringify(updatedUserData));
                
                alert('Profile updated successfully!');
                profileModal.style.display = 'none';
            });
                
            // Notification Buttons Logic
            const notificationButtons = document.querySelectorAll('.notification-button');
            
            notificationButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.classList.toggle('active');
                    
                    if (this.classList.contains('active')) {
                        this.textContent = 'Notifications On';
                    } else {
                        this.textContent = 'Get Notified';
                    }

                    // Get the movie title for this notification
                    const movieTitle = this.closest('.p-4').querySelector('.movie-title').textContent;
                    console.log(`Notifications for movie ${movieTitle}: ${this.classList.contains('active')}`);
                });
            });

            // Logout Modal Logic
            const logoutBtn = document.getElementById('logout-btn');
            const logoutModal = document.getElementById('logout-modal');
            const confirmLogoutBtn = document.getElementById('confirm-logout');
            const cancelLogoutBtn = document.getElementById('cancel-logout');

            logoutBtn.addEventListener('click', function() {
                logoutModal.style.display = 'block';
            });

            confirmLogoutBtn.addEventListener('click', function() {
                // Clear user data from localStorage
                localStorage.removeItem('userData');
                
                // Redirect to index page
                window.location.href = 'index.html';
            });

            cancelLogoutBtn.addEventListener('click', function() {
                logoutModal.style.display = 'none';
            });

            // Close modals when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === logoutModal) {
                    logoutModal.style.display = 'none';
                }
                if (event.target === profileModal) {
                    profileModal.style.display = 'none';
                }
            });
        });
