$(function() {

  $(".btn-modal-suscripcion-newsletter").on("click", function(e){
    e.preventDefault();
    initModal_cSuscripcion_newsletter();
  });

  $(".cSuscripcion-newsletter__container.modal-suscripcion-newsletter .container-holder .c75__container .btn-enviar").on("click", function(e){
    e.preventDefault();
    $(".layer-confirmacion").addClass("show");
  });

});

function initModal_cSuscripcion_newsletter(){
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
  $(".cSuscripcion-newsletter__container.modal-suscripcion-newsletter").addClass("show");



  $(".cSuscripcion-newsletter__container.modal-suscripcion-newsletter .btn-close").on("click", function(e){
    e.preventDefault();
    //$(".cSuscripcion-newsletter__container .slick-slider-holder .slick-slider").slick('unslick');
    $(".cSuscripcion-newsletter__container.modal-suscripcion-newsletter").removeClass("show");

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
