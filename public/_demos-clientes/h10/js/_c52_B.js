$(function() {

  $(".c52__container .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var p = Math.floor(((nextSlide+1) / slick.slideCount) * 100);
    $(".c52__container .slick-slider-holder .slick-contador .linea-holder .linea").css( "width", p+"%");

    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(".c52__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
  });
  $(".c52__container .slick-slider-holder .slick-slider").on('init', function(event, slick){
    var p = Math.floor(((slick.currentSlide+1) / slick.slideCount) * 100);
    $(".c52__container .slick-slider-holder .slick-contador .linea-holder .linea").css( "width", p+"%");

    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }
    $(".c52__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c52__container .slick-slider-holder .slick-contador .slick-total").html("0"+slick.slideCount);
  });
  $(".c52__container .slick-slider-holder .slick-slider").slick({
    arrows: false,
    cssEase: 'ease',
    easing: 'easing',
    infinite: true,
    responsive: [{
      breakpoint: 739,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 1
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 2 
      }
    }],
    slidesPerRow: 1,
    slidesToShow: 4,
    speed: 800,
    waitForAnimate: true,
    dragging: true
  });
  $(".c52__container .slick-slider-holder .slick-contador .slick-prev").on("click",function(e){
    e.preventDefault();
    $('.c52__container .slick-slider-holder .slick-slider').slick('slickPrev');
  });
  $(".c52__container .slick-slider-holder .slick-contador .slick-next").on("click",function(e){
    e.preventDefault();
    $('.c52__container .slick-slider-holder .slick-slider').slick('slickNext');
  });


  $(".c52__container .slick-slider-holder .item .image").on("click",function(e){
    e.preventDefault();
      initSliderModalGaleriaImagen();
  });

  $(".c52__container .slick-slider-holder .slick-slider .slick-list .slick-track .item .zoom-holder").on("click",function(e){
    e.preventDefault();
      initSliderModalGaleriaImagen();
  });



  
});
