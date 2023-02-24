// get the form and submit button elements
const form = document.querySelector('.form2');
const submitButton = form.querySelector('.submit-button');

// get the comments container element
const commentsContainer = document.querySelector('.comments-container');

// add event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // get the values of the form fields
  const userName = form.querySelector('#userName').value;
  const emailAddress = form.querySelector('#emailAddress').value;
  const userMessage = form.querySelector('#feedback').value;

  // create a new comment element with the values
  const commentElement = document.createElement('div');
  commentElement.classList.add('comments-paragraph1');
  commentElement.innerHTML = `
    <div class="male-image-wrapper">
      <div class="male-image-container">
        <img class="male-image" src="./captured-final-assets/comment-1.jpg" alt="${userName} left a comment and this is his portrait">
      </div>
      <div class="jeremy-comment">
        <p class="p8">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} by ${userName}</p>
        <p class="p9">${userMessage}</p>
      </div>
    </div>
  `;

  // append the new comment element to the comments container
  commentsContainer.appendChild(commentElement);

  // reset the form fields
  form.reset();
});



