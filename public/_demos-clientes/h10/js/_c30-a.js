$(function() {
  $(".btn-modal-detalle-habitacion").on("click", function(e){
    e.preventDefault();
    initModal_c30_a();
  });
});

function initModal_c30_a(){
  localStorage.setItem('scroll-y', $(window).scrollTop());
  $('html, body').animate( { scrollTop : 0 }, 0 );
  $("body").addClass("no-scroll-y");

  $(".topbar-main").addClass("on-scroll-down");
  $("body").addClass("on-scroll-down");
  $(".c2-c3__container").addClass("on-scroll-donw");
  $(".c2-c3__container").removeClass("on-scroll");
  $(".c62__container.buscador-avanzado").addClass("on-scroll-down");
  $(".c62__container.buscador-avanzado").removeClass("on-scroll");
  $(".carousel-general").addClass("on-scroll-down");
  $(".carousel-general").addClass("on-scroll");
  $(".c30-a__container.modal-detalle-habitacion").addClass("show");

  $(".btn-mostrar-calendario-precios").on("click", function(e){
    e.preventDefault();
    initModal_c30_b();
  });

  if(!$(".c30-a__container .slick-slider-holder .slick-slider").hasClass("slick-initialized")){
    $(".c30-a__container .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var slickActual = "";
      if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
      } else { slickActual = (nextSlide+1); }
      $(".c30-a__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    });
    $(".c30-a__container .slick-slider-holder .slick-slider").on('init', function(event, slick){
      var slickActual = "";
      if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
      } else { slickActual = (slick.currentSlide+1); }
      $(".c30-a__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
      $(".c30-a__container .slick-slider-holder .slick-contador .slick-total").html("0"+slick.slideCount);
    });

    $(".c30-a__container .slick-slider-holder .slick-slider").slick({
      arrows: true,
      cssEase: 'ease',
      easing: 'easing',
      infinite: true,
      /*responsive: [{
        breakpoint: 480,
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

    $(".c30-a__container.modal-detalle-habitacion .btn-close").on("click", function(e){
      e.preventDefault();
      //$(".c30-a__container .slick-slider-holder .slick-slider").slick('unslick');
      $(".c30-a__container.modal-detalle-habitacion").removeClass("show");

      //$('html, body').animate( { scrollTop : 1 }, 0 );
      $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
      $("body").removeClass("no-scroll-y");

      setTimeout(function(){
        $(".js-carousel-nomob").addClass("on-top-0");
        $(".c2-c3__container").addClass("on-scroll-up");
        $("body").addClass("on-scroll-up");
        $("body").removeClass("on-scroll");
        $(".c2-c3__container").removeClass("on-scroll");
        $(".topbar-main").removeClass("on-scroll");
        $("body").removeClass("on-scroll-down");
        $(".c2-c3__container").removeClass("on-scroll-down");
        $(".topbar-main").removeClass("scrollon-scroll-down");
      }, 10);
    });
  }
}
