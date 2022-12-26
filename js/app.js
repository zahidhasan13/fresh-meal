$(document).ready(function () {
  $(".food_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev-btn',
    nextArrow: '.next-btn',
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
