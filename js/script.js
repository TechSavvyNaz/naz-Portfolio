document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Form field validation
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Display success message
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Redirect to index.html after 2 seconds
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
});