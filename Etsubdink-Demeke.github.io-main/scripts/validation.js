// Retrieve the form element
const contactForm = document.getElementById('contactForm');

// Retrieve the input fields
const emailInput = document.querySelector('#contactForm input[name="email"]');

// Error message element
const errorDiv = document.getElementById('error');

// Submit form event listener
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting by default

  const emailValue = emailInput.value;

  if (emailValue !== emailValue.toLowerCase()) {
    // Validation failed, show error message
    errorDiv.innerText = 'Email must be in lowercase.';
    errorDiv.style.display = 'block';
    return; // Prevent form submission
  }

  // Submit the form
  contactForm.submit();
});
