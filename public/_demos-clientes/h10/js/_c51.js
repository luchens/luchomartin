$(function() {

  $(".c51__container.modal-galeria .video-holder .ico-play").each(function() {
    var video = $(this).parent().find("video").get(0);

    $(this).on("click", function(){
      if (video.paused) {
        video.play();
        $(this).css('opacity', '0');
      } else {
        video.pause();
        $(this).css('opacity', '1');
      }
    });
  });

  $(".c51__container .grid-wrapper .e-click").on("click", function(e){
    e.preventDefault();

    $(".c51__container.modal-galeria").addClass("show");
    $("body").addClass("no-scroll-y");


    if(!$(".c51__container .slick-slider-holder .slick-slider").hasClass("slick-initialized")){
      initSlider_c51();
    }

    var id = $(this).attr("id").split('-');

    $(".c51__container .slick-slider-holder .slick-slider").slick('slickGoTo', id[1]);
  });

/*  $(".c51__container .btn-ver").on("click", function(e){
    e.preventDefault();
    $(".c51__container.modal-galeria").addClass("show");

    if(!$(".c51__container .slick-slider-holder .slick-slider").hasClass("slick-initialized")){
      initSlider_c51();
    }
  });*/

  $(".c51__container .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(".c51__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c51__container .slick-slider-holder .texto").html($(this).find(".slick-slide").not(".slick-cloned").eq(slickActual-1).children('.item').data('caption'));
  });
  $(".c51__container .slick-slider-holder .slick-slider").on('init', function(event, slick){
    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }
    $(".c51__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c51__container .slick-slider-holder .slick-contador .slick-total").html("0"+slick.slideCount);
  });

  $(".c51__container.modal-galeria .btn-close").on("click", function(e){
    e.preventDefault();
    //$(".c51__container .slick-slider-holder .slick-slider").slick('unslick');
    $(".c51__container.modal-galeria").removeClass("show");
    $("body").removeClass("no-scroll-y");

  });
});

function initSlider_c51(){
  $(".c51__container .slick-slider-holder .slick-slider").slick({
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
}
