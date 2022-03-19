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

const darkMode = {

    bgwhite: "#121B24",
    components: "#18222D",
    fontblack: "#F5FAFF",
    imageslink: "#F5FAFF",
}

const transformKey = key =>
    "--" + key.replace(/([a-z])/g, "$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

checkbox.addEventListener('click', () => {
    console.log("clicado");

})