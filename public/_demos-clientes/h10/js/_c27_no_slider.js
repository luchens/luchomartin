$(function() {

  $(".c27__container .container-holder .contents .habitaciones .habitacion .data .btns .btn-detalles").on("click", function(e){
    e.preventDefault();

    initModal_c30_a();
  });

  /*$(".c27__container .container-holder .contents .habitaciones .habitacion .data .btns .btn-reservar").on("click", function(e){
    e.preventDefault();

    initModal_c30_b();
  });*/

  $(".c27__container .container-holder .nav-holder .nav li .btn").on("click", function(e){
    e.preventDefault();

    var id = $(this).attr("id");
    $(".c27__container .container-holder .nav-holder .nav li .btn").removeClass("activo");
    $(".c27__container .container-holder .nav-holder .nav li #"+id+".btn").addClass("activo");

    $(".c27__container .container-holder .nav-holder .nav li").append('<div class="unselect"></div>');

    //$(".c27__container .slick-slider-holder .slick-slider").slick("unslick");

//    $(".c27__container .container-holder .habitaciones").removeClass("activo");
//    $(".c27__container .container-holder #"+id+".habitaciones").addClass("activo");

    /*if ($('.c27__container .slick-slider-holder .slick-slider').hasClass('slick-initialized')) {
      $('.c27__container .slick-slider-holder .slick-slider').slick('destroy');
    }*/

    /*$(".c27__container .slick-slider-holder .slick-slider").slick("unslick");*/

    /*setTimeout(function(){
      initSlider_c27();
    }, 10);*/


    $(".c27__container .contents .layer").addClass("show");
    $(".c27__container .contents .layer").addClass("show-o");

    setTimeout(function(){
      $(".c27__container .container-holder .habitaciones").removeClass("activo");
      $(".c27__container .container-holder #"+id+".habitaciones").addClass("activo");
      $(".c27__container .container-holder .habitaciones.activo .slick-slider-holder .slick-slider").slick("reinit");

      $(".c27__container .contents .layer").removeClass("show-o");

      setTimeout(function(){
        $(".c27__container .contents .layer").removeClass("show");
        $(".c27__container .container-holder .nav-holder .nav li .unselect").remove();
      }, 1000);
    }, 0);


//    $(".c27__container .container-holder .habitaciones.activo .slick-slider-holder .slick-slider").slick("reinit");


  });

  initSlider_c27();

  //setTimeout(function(){
    /*$(".c27__container .container-holder .habitaciones").each(function(index) {
      if(index > 0){
        $(".c27__container .container-holder #"+index+".habitaciones").removeClass("activo");
      }
    });*/
  //}, 1);


});

var slider;
var settings;

settings = {
  infinite: true,
  mobileFirst: true,
  dots: false,
  arrows: false,
  dragging: true,
  responsive: [
//    {
//      breakpoint: 767,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1,
//      }
//    },
    {
      breakpoint: 739,
      settings: "unslick"
    }

  ]
};

function initSlider_c27(){
  slider = $(".c27__container .slick-slider-holder .slick-slider");
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
