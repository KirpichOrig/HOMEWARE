const burgerIcon = document.getElementById('burger-icon');
const burgerMenu = document.getElementById('burger-menu');
const closeMenuBtn = document.getElementById('close-menu');

burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});

closeMenuBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
});

// Close burger menu when clicking outside
document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && event.target !== burgerIcon) {
        burgerMenu.classList.remove('active');
    }
});

