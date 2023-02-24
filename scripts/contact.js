const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Your comment is submitted successfully!');
    // You can add more code to process the form data or send it to a server.
});
