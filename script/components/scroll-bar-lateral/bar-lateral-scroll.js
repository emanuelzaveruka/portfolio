const menuLateral = document.querySelectorAll('.nav-bar-lateral a[href^="#"]');

function getDistanceFromTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTop = getDistanceFromTop(event.target) - 10;
    smoothScrollTo(0, distanceFromTop, 100);
}

menuLateral.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});

$(function() {
    var links = $("#lateral a");
    var lateral = $("#lateral");
    $(window).scroll(function() {
        var topScroll = $(window).scrollTop();
        links.each(function() {
            var href = $(this).attr('href');
            var el = $(href);
            var posSection = el.offset().top - 300;
            var hSection = el.height();
            if (posSection <= topScroll && (posSection + hSection) > topScroll) {
                lateral.addClass('active');
                links.removeClass('active');
                $(this).addClass('active');
            }
        })
    });
});

$(window).scroll(function() {
    var lateral = $("#lateral");
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        lateral.removeClass('active');
    }, 1500));
});