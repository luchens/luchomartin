$(function() {
  var slider = $(".c16__container .slick-slider-holder .slick-slider");
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
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
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

  $(".c16__container .btn-detalle").on("click", function(e){
    e.preventDefault();
    initModal_c30_c($(this).data("order"));
  });



});
