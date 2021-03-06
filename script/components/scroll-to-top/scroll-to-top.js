const footer = document.querySelectorAll('.footer-to-top a[href^="#"]');
const footerImage = document.querySelectorAll('.footer-to-top svg[href^="#"]');
const footerImagePath = document.querySelectorAll('.footer-to-top path[href^="#"]');



function getDistanceFromTop(element) {
    const id = element.getAttribute("href");

    return document.querySelector(id).offsetTop;

}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTop = getDistanceFromTop(event.target) - 10;
    smoothScrollTo(0, distanceFromTop, 600);
}

footer.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});

footerImage.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});

footerImagePath.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});