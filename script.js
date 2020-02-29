<script>src="https://code.jquery.com/jquery-3.4.1.js"</script>
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header nav').addClass('changeColor')
        }
        if ($(this).scrollTop() < 1) {
            $('header nav').removeClass('changeColor')
        }
    })
})