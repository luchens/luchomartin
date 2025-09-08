$(function() {

  var slider = $(".carousel-clubh10 .slick-slider-holder .slick-slider");
  var settings = {
    infinite: true,
    dots: true,
    arrows: true,
    dragging: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  slider.slick(settings);

  $(window).on("resize", function() {
    if ($(window).width() > 1024) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });

});
