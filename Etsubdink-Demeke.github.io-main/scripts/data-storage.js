// Retrieve the form element
const contactForm = document.getElementById('contactForm');

// Retrieve the input fields
const nameInput = document.querySelector('#contactForm input[name="name"]');
const emailInput = document.querySelector('#contactForm input[name="email"]');
const commentInput = document.getElementById('comment');

// Load data from local storage if available
let formData = JSON.parse(localStorage.getItem('formData')) || {};

// Populate the form fields with the loaded data
nameInput.value = formData.name || '';
emailInput.value = formData.email || '';
commentInput.value = formData.comment || '';

// Save form data to local storage on input change
contactForm.addEventListener('input', () => {
  formData = {
    name: nameInput.value,
    email: emailInput.value,
    comment: commentInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});

// Submit form event listener
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting by default

  const emailValue = emailInput.value;

  if (emailValue === emailValue.toLowerCase()) {
    // Validation passed, submit the form
    document.getElementById('error').style.display = 'none'; // Hide the error message
    contactForm.submit();
  } else {
    // Validation failed, show error message
    const errorDiv = document.getElementById('error');
    errorDiv.innerText = 'Email must be in lowercase.';
    errorDiv.style.display = 'block';
  }
});