$(function() {
  var slider = $(".cClubH10.cCategorias .slick-slider-holder .slick-slider");

  if ($(".cClubH10.cCategorias .slick-slider-holder .slick-slider .cCategorias-holder").length > 3){
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
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }

      ]
    };
  } else {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          settings: "unslick"
        }

      ]
    };
  }
  slider.slick(settings);

  $(window).on("resize", function () {
    if (($(window).width() > 1024) && ($(".cClubH10.cCategorias .slick-slider-holder .slick-slider .cCategorias-holder").length < 3) ){
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });

});
