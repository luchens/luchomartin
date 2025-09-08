$(function() {
  var slider = $(".banner-c5 .slick-slider-holder .slick-slider");
  var settings = {
    infinite: true,
    mobileFirst: true,
    dots: true,
    arrows: false,
    dragging: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > 1024) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
});
