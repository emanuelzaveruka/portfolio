const footer = document.querySelectorAll('footer-to-top a[href^="#"]');

function getDistanceFromTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}



// function nativeScroll(distanceFromTop) {
//     window.scroll({
//         top: distanceFromTop,
//         behavior: "smooth",
//     });
// }

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTop = getDistanceFromTop(event.target);
    smoothScrollTo(0, 0, 800);
}

footer.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});