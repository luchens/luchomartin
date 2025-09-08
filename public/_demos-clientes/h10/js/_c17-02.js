$(function() {
  /*var star = '.ratings .star';
  var selected = '.selected';

  $(star).on('click', function(){
    $(selected).each(function(){
      $(this).removeClass('selected');
    });
    $(this).addClass('selected');
  });*/

  var slider = $(".c17__container .slick-slider-holder .slick-slider");
  var settings = {
    infinite: true,
    mobileFirst: false,
    dots: false,
    arrows: true,
    dragging: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
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
