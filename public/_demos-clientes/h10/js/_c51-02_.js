$(function() {

  $(".video-holder .ico-play").each(function() {
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

  $(".c51-02__container .btn-ver").on("click", function(e){
    e.preventDefault();
    $(".c51-02__container.modal-galeria").addClass("show");

    if(!$(".c51-02__container .slick-slider-holder .slick-slider").hasClass("slick-initialized")){
      initSlider_c51_2();
    }
  });

  $(".c51-02__container .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(".c51-02__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
  });
  $(".c51-02__container .slick-slider-holder .slick-slider").on('init', function(event, slick){
    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }
    $(".c51-02__container .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c51-02__container .slick-slider-holder .slick-contador .slick-total").html("0"+slick.slideCount);
  });

  $(".c51-02__container.modal-galeria .btn-close").on("click", function(e){
    e.preventDefault();
    //$(".c51-02__container .slick-slider-holder .slick-slider").slick('unslick');
    $(".c51-02__container.modal-galeria").removeClass("show");
  });
});

function initSlider_c51_2(){
  $(".c51-02__container .slick-slider-holder .slick-slider").slick({
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
