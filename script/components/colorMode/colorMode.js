const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");
const image = document.querySelectorAll(".separator-image");

const getStyle = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
    bgwhite: getStyle(html, "--bgWhite"),
    components: getStyle(html, "--components"),
    fontblack: getStyle(html, "--fontBlack"),
    imageslink: getStyle(html, "--imageslink"),
}

const lightMode = {

    bgwhite: "#F5F5F5",
    components: "#121B24",
    fontblack: "#121B24",
    imageslink: "#466380",
}

const transformKey = key =>
    "--" + key.replace(/([a-z])/g, "$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})

checkbox.addEventListener('click', () => {
    console.log("clicado");

})