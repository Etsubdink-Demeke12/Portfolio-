// Get references to the required elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const menuOptions = document.getElementById('menu-options');

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
}

// Event listener for hamburger menu
hamburgerMenu.addEventListener('click', toggleMobileMenu);

// Event listener for close button
closeBtn.addEventListener('click', toggleMobileMenu);

// Event listener for menu options
menuOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    toggleMobileMenu();

    // Scroll to the selected section if needed
    const targetSectionId = event.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetSectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    event.preventDefault();
  }
});