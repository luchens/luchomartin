$(function() {
    var slider = $(".c10__container .slick-slider-holder .slick-slider");
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

    if ($(window).width() < 1024) {
      slider.slick(settings);
    }


    $(".c10__container .card-info__text-container10 .btn-leer.mas").on("click", function(e){
      e.preventDefault();
      $(this).closest(".c10__container .card-info__text-container10").addClass("show");
    });

    $(".c10__container .card-info__text-container10 .btn-leer.menos").on("click", function(e){
      e.preventDefault();
      $(this).closest(".c10__container .card-info__text-container10").removeClass("show");
    });

});
