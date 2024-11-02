const toggleButton = document.getElementsByClassName('toggle-button')[0]; // Gets the first element with the class 'toggle-button'
const navbarLinks = document.getElementsByClassName('navbar-links')[0]; // Gets the first element with the class 'navbar-links'

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'); // Toggles the 'active' class on the navbarLinks element when toggleButton is clicked
});
