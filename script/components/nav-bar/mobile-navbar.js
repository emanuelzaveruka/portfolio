const hamburguer = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-list");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener('mouseup', function(event) {
    if (event.target != navMenu && event.target.parentNode != navMenu) {
        navMenu.classList.remove("active");
        hamburguer.classList.remove("active");
    }
});