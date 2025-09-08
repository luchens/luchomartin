$(function() {
  var slider = $(".c19__container .slick-slider-holder .slick-slider");
  var settings = {
    infinite: true,
    mobileFirst: true,
    dots: false,
    arrows: false,
    dragging: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 739,
        slidesToShow: 1,
        slidesToScroll: 1,
        settings: "unslick"
      },
      {
        breakpoint: 1024,
        slidesToShow: 1,
        slidesToScroll: 1,
        settings: "unslick"
      }

    ]
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
