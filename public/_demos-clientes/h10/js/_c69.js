$(function() {
  var slider = $(".c69__container .slick-slider-holder .slick-slider");

  if ($(".c69__container .slick-slider-holder .slick-slider .hotel-oferta").length > 3)
  {
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
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }

    ]
  };
  }
  else
  {
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
  }

  slider.slick(settings);

  $(window).on("resize", function () {
    if (($(window).width() > 1024) && ($(".c69__container .slick-slider-holder .slick-slider .hotel-oferta").length < 4) ){
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });

  $(".c69__container .btn-detalle").on("click", function(e){
    e.preventDefault();
    initModal_c30_c($(this).data("order"));
  });




});
