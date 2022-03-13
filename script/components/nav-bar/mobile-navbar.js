const hamburguer = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-list");

hamburguer.addEventListener("click", () => {
    console.log(hamburguer);
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))