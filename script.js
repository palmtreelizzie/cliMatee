$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('nav').addClass('changeColor')
            $('nav ul li').addClass('changeColor')
            $('nav ul li ul').addClass('changeColor')
        }
        if ($(this).scrollTop() < 1) {
            $('nav').removeClass('changeColor')
            $('nav ul li').removeClass('changeColor')
            $('nav ul li ul').removeClass('changeColor')
        }
    })
})