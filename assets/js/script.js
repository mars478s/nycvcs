document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            console.log('Hamburger toggled:', navMenu.classList.contains('active'));
        });
    } else {
        console.error('Navigation elements not found:', { navToggle, navMenu });
    }
});
