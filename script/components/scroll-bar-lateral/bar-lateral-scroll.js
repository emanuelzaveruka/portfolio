const menuLateral = document.querySelectorAll('.nav-bar-lateral a[href^="#"]');

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

menuLateral.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});

$(function() {
    var links = $("#lateral a");
    var teste = $("#lateral");
    $(window).scroll(function() {
        var topScroll = $(window).scrollTop();
        links.each(function() {
            var href = $(this).attr('href');
            var el = $(href);
            var posSection = el.offset().top - 300;
            var hSection = el.height();
            if (posSection <= topScroll && (posSection + hSection) > topScroll) {
                teste.addClass('active');
                links.removeClass('active');
                $(this).addClass('active');
            }
        })
    });
});

$(window).scroll(function() {
    var teste = $("#lateral");
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        teste.removeClass('active');
    }, 1500));
});