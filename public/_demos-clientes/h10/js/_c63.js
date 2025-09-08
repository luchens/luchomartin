$(function() {

  $(".c63__container .col-holder .col-right .texto_leer_mas .btn-leer.mas").on("click", function(e){
    e.preventDefault();
    $(".c63__container .col-holder .col-right .texto_leer_mas").addClass("show");
  });

  $(".c63__container .col-holder .col-right .texto_leer_mas .btn-leer.menos").on("click", function(e){
    e.preventDefault();
    $(".c63__container .col-holder .col-right .texto_leer_mas").removeClass("show");
  });

  $(".c63__container .col-left .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var p = Math.floor(((nextSlide+1) / slick.slideCount) * 100);
    $(".c63__container .col-left .slick-paginador .linea-holder .linea").css( "width", p+"%");

    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(".c63__container .col-left .slick-paginador .slick-actual").html(slickActual+"/ ");
  });
  $(".c63__container .col-left .slick-slider-holder .slick-slider").on('init', function(event, slick){
    var p = Math.floor(((slick.currentSlide+1) / slick.slideCount) * 100);
    $(".c63__container .col-left .slick-paginador .linea-holder .linea").css( "width", p+"%");

    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }
    $(".c63__container .col-left .slick-paginador .slick-actual").html(slickActual+"/ ");
    $(".c63__container .col-left .slick-paginador .slick-total").html("0"+slick.slideCount);
  });
  $(".c63__container .col-left .slick-slider-holder .slick-slider").slick({
    arrows: false,
    cssEase: 'ease',
    easing: 'easing',
    infinite: true,
    /*responsive: [{
      breakpoint: 768,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 1
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 3
      }
    }],*/
    slidesPerRow: 1,
    slidesToShow: 1,
    speed: 800,
    waitForAnimate: true,
    dragging: true
  });
  $(".c63__container .col-left .slick-paginador .slick-prev").on("click",function(e){
    e.preventDefault();
    $('.c63__container .col-left .slick-slider-holder .slick-slider').slick('slickPrev');
  });
  $(".c63__container .col-left .slick-paginador .slick-next").on("click",function(e){
    e.preventDefault();
    $('.c63__container .col-left .slick-slider-holder .slick-slider').slick('slickNext');
  });

});
