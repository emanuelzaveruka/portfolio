const hamburguer = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-list");

document.querySelectorAll(".link" || ".mobile-menu active").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener('mouseup', function(event) {
    if (event.target != navMenu && event.target.parentNode != navMenu) {
        navMenu.classList.remove("active");
        hamburguer.classList.remove("active");
    }
});

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    const active = navMenu.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

hamburguer.addEventListener('click', toggleMenu);
hamburguer.addEventListener('touchstart', toggleMenu);