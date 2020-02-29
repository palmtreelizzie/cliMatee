(function () {
  (window).scroll(function () {
      if ((this).scrollTop() > 1) {
            ('nav').addClass('changeColor')
        }
        if ((this).scrollTop() < 1) {
            ('nav').removeClass('changeColor')
        }
    })
})