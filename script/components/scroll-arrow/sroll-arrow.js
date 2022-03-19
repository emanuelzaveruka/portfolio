const mobileArrow = document.querySelectorAll('.boxForArrow svg[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTop = getDistanceFromTop(event.target) - 5;
    smoothScrollTo(0, distanceFromTop, 600);
}

mobileArrow.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});