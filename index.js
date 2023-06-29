// Example JavaScript code

// Handle form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display form values in the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form inputs
    form.reset();
});