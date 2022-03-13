var botoes = document.querySelectorAll("a.buttonModal");
console.log(botoes)
for (var x = 0; x < botoes.length; x++) {
    botoes[x].addEventListener("click", function() {
        document.getElementById(this.dataset.modal).style.display = "flex";
    });
}

var fechar = document.querySelectorAll("span.close");
console.log(fechar)
for (var x = 0; x < fechar.length; x++) {
    fechar[x].addEventListener("click", function() {
        this.parentNode.parentNode.parentNode.style.display = "none";
    });
}

var divFechar = document.querySelectorAll("a.close");
console.log(fechar)
for (var x = 0; x < divFechar.length; x++) {
    divFechar[x].addEventListener("click", function() {
        this.parentNode.parentNode.parentNode.style.display = "none";
    });
}

$("div").click(function() {
    var getClass = this.className;
    console.log(getClass);
});

// $('div').on('click', function(event) {
//     let elementoClicado = $(event.target);
//     console.log(elementoClicado.attr('.modal'));
//     if (elementoClicado == ".modal") {
//         console.log("deu certo");
//     }
// });
// const modal = document.querySelectorAll('.modal-content');
// const modalchill = modal.childNodes;

// document.documentElement.onclick = function(event) {
//     if (event.target == modal) {
//         console.log("boa tarde");
//     }
// }

// $('body').on('click', function(event) {
//     let elementoClicado = $(event.target);
//     var window = (event.target); // objeto html
// });

// function outsideClick(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }
// const modal = document.querySelectorAll('.modal');
// window.forEach((links) => {
//     modal.addEventListener("click", outsideClick)
// });
// window.addEventListener('click', outsideClick);


// console.log(modal);
// modal.forEach((links) => {
//     modal.addEventListener("click", outsideClick)
// });





// var modal = document.querySelectorAll("div.modal");
// var modalContent = document.querySelectorAll("div.modal-content");
// console.log(modal);
// window.addEventListener('click', outsideClick);

// function outsideClick(e) {
//     console.log(e.target == JSON.stringify(modal));
//     if (e.target == JSON.stringify(modal)) {
//         modal.style.display = 'none';
//     }
// }

/*
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'flex';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}*/