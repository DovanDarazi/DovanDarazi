// script.js


// Scroll to Top on Page Load
// window.addEventListener('load', function () {
//     window.scrollTo(0, 0);
// });

// Scroll to Top on Page Load (only if not a refresh)
window.addEventListener('load', function () {
    if (!performance.navigation || performance.navigation.type !== performance.navigation.TYPE_RELOAD) {
        window.scrollTo(0, 0);
    }
});


// Smooth scroll with offset for header links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector('.sticky-header').offsetHeight;
        
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// Scroll to Top on Title Click
document.getElementById('scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Toggle Menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
}

// Auto-close menu after clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
        }
    });
});



