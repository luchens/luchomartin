$(function() {
  //initSlider_c25();

  $(".c25__container .items .item .data .btn-ver-mas").on("click", function(e){
    e.preventDefault();
    $(this).parent().find(".list").toggleClass("show");
    $(this).toggleClass("show");

    if($(this).hasClass("show")){
      $(this).html("Leer menos");
    } else {
      $(this).html("Leer más");
    }
  });

});


var slider;
var settings;

settings = {
  infinite: true,
  mobileFirst: true,
  dots: false,
  arrows: true,
  dragging: true,
  responsive: [
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 741,
      settings: "unslick"
    }

  ]
};

function initSlider_c25(){
  slider = $(".c25__container .slick-slider-holder .slick-slider");
  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(this).parent().find(".slick-contador .slick-actual").html(slickActual+"/ ");
  });
  slider.on('init', function(event, slick){
    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }

    $(this).parent().find(".slick-contador .slick-actual").html(slickActual+"/ ");
    $(this).parent().find(".slick-contador .slick-total").html("0"+slick.slideCount);
  });

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > 739) {
      return;
    }
    if (!$(slider).hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}
