
    document.getElementById('ticketForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const tickets = document.getElementById('tickets').value;
      const date = document.getElementById('date').value;

      const bookingData = {
        name,
        email,
        tickets,
        date
      };

      // Save to localStorage (optional)
      localStorage.setItem('bookingDetails', JSON.stringify(bookingData));

      // Hide form and show confirmation
      document.getElementById('bookingForm').style.display = 'none';
      document.getElementById('confirmationMessage').classList.remove('hidden');
    });
  