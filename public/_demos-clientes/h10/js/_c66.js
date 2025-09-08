$(function() {

  $(".c66__container .texto .texto-1 .btn-leer.mas").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().addClass("show");
  });

  $(".c66__container .texto .texto-2 .btn-leer.menos").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().removeClass("show");
  });

  var slider = $(".c66__container .slick-slider-holder .slick-slider");
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
        breakpoint: 1024,
        slidesToShow: 2,
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
