const menuLinksDesk = document.querySelectorAll('.nav-list-desk a[href^="#"]');

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
    const distanceFromTop = getDistanceFromTop(event.target) - 10;
    smoothScrollTo(0, distanceFromTop, 800);
}

menuLinksDesk.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});