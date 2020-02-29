<script>src="https://code.jquery.com/jquery-3.4.1.js"</script>
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('nav').addClass('changeColor')
            $('nav ul li').addClass('changeColor')
        }
        if ($(this).scrollTop() < 1) {
            $('nav').removeClass('changeColor')
            $('nav ul li').removeClass('changeColor')
        }
    })
})