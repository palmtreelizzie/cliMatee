$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $("header nav").addClass("changeColor");
    }
    if ($(this).scrollTop() < 1) {
      $("header nav").removeClass("changeColor");
    }
  });
});
