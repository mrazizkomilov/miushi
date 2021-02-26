$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .site-navbar__list").toggleClass("activ");
  });
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 1000,
    easing: "easing",
    // infinite: true,
    // autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggle: false,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: true,
  });
  $(".sliderbig").slick({
    arrows:false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});