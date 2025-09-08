$(function() {

  if($(window).width() >= 740) {
    var sliderNoMob = $(".js-carousel-nomob .slick-slider-holder .slick-slider");
    sliderNoMob.slick(settings);
  }

  var slider = $(".js-carousel .slick-slider-holder .slick-slider");
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

  $(window).on("resize", function () {
    if ($(window).width() > 1024) {
      return;
    }
    if ($(window).width() >= 740)
    {
      var sliderNoMob = $(".js-carousel-nomob .slick-slider-holder .slick-slider");
      if(!sliderNoMob.hasClass("slick-initialized")) {
        return sliderNoMob.slick(settings);
      }
    }

    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
});
