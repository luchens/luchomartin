$(function() {

  if($(".c63-02__container .slick-slider-holder > div > div").length > 6){
    var slider = $(".c63-02__container .slick-slider-holder .slick-slider");
    $(".c63-02__container .slick-slider-holder").addClass("more-6");

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
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 739,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        }
      ]
    };
    slider.slick(settings);
  } else {
    var slider = $(".c63-02__container .slick-slider-holder .slick-slider");
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
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 739,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1023,
          slidesToShow: 6,
          slidesToScroll: 1,
          settings: "unslick"
        }

      ]
    };
    slider.slick(settings);
  }

  $(window).on("resize", function () {
    if ($(window).width() > 1024) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });


//MODAL
  $(".c63-02__container .open-modal").on("click", function(e){
    e.preventDefault();
    $(".c63-02__container.general_modal").addClass("show");
    var id = $(this).attr("id");
    $('body').css('overflow','hidden');
  });

  $(".c63-02__container.general_modal .btn-close").on("click", function(e){
    e.preventDefault();
    $(".c63-02__container.general_modal").removeClass("show");
    $('body').css('overflow','initial');
  });


});
