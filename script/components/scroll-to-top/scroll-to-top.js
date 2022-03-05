const footer = document.querySelectorAll('.footer-to-top a[href^="#"]');


function getDistanceFromTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;

}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTop = getDistanceFromTop(event.target) - 10;
    console.log(distanceFromTop);
    smoothScrollTo(0, distanceFromTop, 800);
}

footer.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});