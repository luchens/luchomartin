$(function() {
  $(window).resize(function() {
    eventButtonsTopFichaHotel();
  });
  $(window).scroll(function() {
    stateScrollTopFichaHotel();
    fixPosYCabecera();

    if($(this).scrollTop() == 0){
      //$(".ficha-hotel .c2-c3__container.bottom").addClass("is-hidden");
      //$(".ficha-hotel .c62__container.buscador-avanzado").addClass("is-hidden");
    }
  });
  eventButtonsTopFichaHotel();
  fixPosYCabecera();
});

function eventButtonsTopFichaHotel(){
  $(".ficha-hotel .c2-c3__container .hotel-top .col-right .btn-buscar").on("click", function(e){
    e.preventDefault();

    $(".ficha-hotel .c2-c3__container.bottom").toggleClass("is-hidden");
    $(".ficha-hotel .c62__container.buscador-avanzado").toggleClass("is-hidden");

    if($(window).scrollTop() == 0){
      $('html, body').animate( { scrollTop : 1 }, 0 );
    }

    if (!$('.c62__container.buscador-avanzado').hasClass("on-scroll")){
      $('.c62__container.buscador-avanzado').addClass("on-scroll");
      $('.c2-c3__container').addClass("on-scroll");
      $('.carousel-general').addClass("on-scroll");
//    $('.c2-c3__container').addClass("on-scroll-up");
      $('.c62__container.buscador-avanzado').addClass("on-scroll-up");
      $('.c2-c3__container .bottom').addClass("on-scroll-up");
    }
  });

  if ($(window).width() < 1024) {
    $(".js-dropdown > span").off('click');

    /*$(".topbar-main__container-right .header__icon-mobile.contactanos").on("click", function (e) {
      e.preventDefault();

      if($(".topbar-main-mobile-contactanos").hasClass("open")){
        $(".topbar-main-mobile-contactanos").removeClass("open");
      } else {
        $('html, body').animate( { scrollTop : 0 }, 300 );
        $(".topbar-main-mobile-contactanos").addClass("open");
      }
    });

    $(".topbar-main__container-right .header__icon-mobile.login").on("click", function (e) {
      e.preventDefault();

      if($(".topbar-main-mobile-login").hasClass("open")){
        $(".topbar-main-mobile-login").removeClass("open");
      } else {
        $('html, body').animate( { scrollTop : 0 }, 300 );
        $(".topbar-main-mobile-login").addClass("open");
      }
    });*/
  } else {
    $(".js-dropdown > span").on("click", function (e) {
      e.preventDefault();
      $(".js-topbar__links-bottom .dropdown").removeClass("active");
      $(".js-dropdown").removeClass("dropdown-onclick--active");
      $(this).parent().addClass("dropdown-onclick--active");
    });
  }
}

var lastScrollTop2 = 0;
var c62_top = 0;
var c62_top_extra = 0;
var ficha_galeria =(($('.ficha-galeria').length)>0)? true:false;
if(ficha_galeria)
{  $('.c62__container.buscador-avanzado').addClass("on-scroll");}

function fixPosYCabecera(){
  //console.log($(".c2-c3__container .hotel-top").outerHeight());

  if ($(window).width() > 1023) {
    if($(".c2-c3__container.bottom").hasClass("on-scroll-down")){
      $(".c62__container.buscador-avanzado").css({"top": $(".c2-c3__container .hotel-top").outerHeight()+"px" });
      $(".c2-c3__container.bottom").css({"top": ($(".c2-c3__container .hotel-top").outerHeight()+$(".c62__container.buscador-avanzado").outerHeight())+"px" });
    } else {
      $(".c62__container.buscador-avanzado").css({"top": $(".c2-c3__container .hotel-top").outerHeight()+$('.c2-c3__container .menu-top').outerHeight()+"px" });
      $(".c2-c3__container.bottom").css({"top": ($(".c2-c3__container .hotel-top").outerHeight()+$(".c62__container.buscador-avanzado").outerHeight())+$('.c2-c3__container .menu-top').outerHeight()+"px" });
    }

    /*if($(".c2-c3__container .hotel-top").outerHeight() > 80){
      $(".c2-c3__container.bottom").addClass("_y-fix");
      $(".c62__container.buscador-avanzado").addClass("_y-fix");
    } else {
      $(".c2-c3__container.bottom").removeClass("_y-fix");
      $(".c62__container.buscador-avanzado").removeClass("_y-fix");
    }*/
  } else {
    $(".c62__container.buscador-avanzado").css({"top": "" });
    $(".c2-c3__container.bottom").css({"top": "" });
    /*if($(".c2-c3__container.bottom").hasClass("on-scroll-down")){
      $(".c2-c3__container.bottom").css({"top": $(".c2-c3__container .hotel-top").outerHeight()+"px" });
    } else {
      $(".c2-c3__container.bottom").css({"top": ($(".c2-c3__container .hotel-top").outerHeight()+56)+"px" });
    }*/
  }
}

setInterval(function(){
  fixPosYCabecera();
}, 100);

function stateScrollTopFichaHotel(){

 if(  $('.modal-detalle-habitacion.show').length || $('.modal-reservar-habitacion.show').length)
 {
  $('.c62__container.buscador-avanzado').removeClass("on-scroll");
  $('.c2-c3__container').removeClass("on-scroll");
  $('.topbar-main').removeClass("on-scroll");
  $('body').removeClass("on-scroll");
  $('.carousel-general').removeClass("on-top-0");

  $('.c2-c3__container').removeClass("on-scroll-up");
  $('.c62__container.buscador-avanzado').removeClass("on-scroll-up");
  $('.c2-c3__container:not(.bottom)').removeClass("on-scroll-up");
  $('.carousel-general').removeClass("on-scroll-up");
  $('.topbar-main').removeClass("on-scroll-up");
  $('body').removeClass("on-scroll-up");

  $('.c2-c3__container').removeClass("on-scroll-down");
  $('.c62__container.buscador-avanzado').removeClass("on-scroll-down");
  $('.c2-c3__container:not(.bottom)').removeClass("on-scroll-down");
  $('.carousel-general').removeClass("on-scroll-down");
  $('.topbar-main').removeClass("on-scroll-down");
  $('body').removeClass("on-scroll-down")

 }
 else{



  var distance2 = $('.c2-c3__container .menu-top').outerHeight();

  //if ($(this).scrollTop() >= distance2) {
  //if ($(this).scrollTop() >= 600) {
  if ($(window).width() <= 480) {
    c62_top = 0;
    c62_top_extra = 60;
  } else if ($(window).width() >= 740) {
    c62_top = 0;
    c62_top_extra = -200;
    if(ficha_galeria){c62_top_extra = -56;}
} else if ($(window).width() >= 1024) {
      c62_top = 0;
      c62_top_extra = -220;
  } else {
    c62_top = 0;
    c62_top_extra = 40;
  }


  if ($(this).scrollTop() >= ($(".c62__container").outerHeight()-c62_top+c62_top_extra)) {
    $('.c62__container.buscador-avanzado').addClass("on-scroll");
    $('.c2-c3__container').addClass("on-scroll");
    $('.topbar-main').addClass("on-scroll");
    $('.carousel-general').addClass("on-scroll");
    $('body').addClass("on-scroll");
  } else {
    $('.c62__container.buscador-avanzado').removeClass("on-scroll");
    $('.c2-c3__container').removeClass("on-scroll");
    $('.topbar-main').removeClass("on-scroll");
    $('body').removeClass("on-scroll");
//    $('.carousel-general').removeClass("on-scroll");
  }
  if ($(this).scrollTop() === 0)
  {    $('.carousel-general').addClass("on-top-0");}
  else
  { $('.carousel-general').removeClass("on-top-0");}



  if(ficha_galeria)
  {  $('.c62__container.buscador-avanzado').addClass("on-scroll");}


  /*if ($(this).scrollTop() >= distance2) {
    $('.c2-c3__container:not(.bottom)').addClass("on-scroll-down");
  } else {
    $('.c2-c3__container:not(.bottom)').removeClass("on-scroll-down");
  }*/

  //if (jQuery(this).scrollTop() >= distance2) {
    var st2 = $(this).scrollTop();
    if (($(this).scrollTop() > 0) && (st2 > lastScrollTop2)){
      //$('.c2-c3__container:not(.bottom)').addClass("on-scroll");
      $('.c2-c3__container').addClass("on-scroll-down");
      $('.c62__container.buscador-avanzado').addClass("on-scroll-down");
      $('.c2-c3__container:not(.bottom)').addClass("on-scroll-down");
      $('.carousel-general').addClass("on-scroll-down");

      $('.c2-c3__container').removeClass("on-scroll-up");
      $('.c62__container.buscador-avanzado').removeClass("on-scroll-up");
      $('.c2-c3__container:not(.bottom)').removeClass("on-scroll-up");
      $('.carousel-general').removeClass("on-scroll-up");


      $('.topbar-main').addClass("on-scroll-down");
      $('.topbar-main').removeClass("on-scroll-up");

      $('body').addClass("on-scroll-down");
      $('body').removeClass("on-scroll-up");

      $('body').addClass("on-scroll-up-buscador");
      $('body').removeClass("on-scroll-down-buscador");

      $('body.paso-1').removeClass("ini-buscador-avanzado");

      //console.log("down");

      $('.dropdown-idioma').removeClass("dropdown-onclick--active");
      $('.dropdown-reservas').removeClass("dropdown-onclick--active");
      $('.dropdown-telefono').removeClass("dropdown-onclick--active");



    } else if (($(this).scrollTop() > 0) && (st2 < lastScrollTop2)) {

      //$('.c2-c3__container:not(.bottom)').removeClass("on-scroll");
      $('.c2-c3__container').addClass("on-scroll-up");
      $('.c62__container.buscador-avanzado').addClass("on-scroll-up");
      $('.c2-c3__container:not(.bottom)').addClass("on-scroll-up");
      $('.carousel-general').addClass("on-scroll-up");


      $('.c2-c3__container').removeClass("on-scroll-down");
      $('.c62__container.buscador-avanzado').removeClass("on-scroll-down");
      $('.c2-c3__container:not(.bottom)').removeClass("on-scroll-down");
      $('.carousel-general').removeClass("on-scroll-down");

      $('.topbar-main').addClass("on-scroll-up");
      $('.topbar-main').removeClass("on-scroll-down");

      $('body').addClass("on-scroll-up");
      $('body').removeClass("on-scroll-down");

      $('body').addClass("on-scroll-down-buscador");
      $('body').removeClass("on-scroll-up-buscador");

      //$('body').addClass("ini-buscador-avanzado");

      //console.log("UUUUup");
    } else if ($(this).scrollTop() <= 0) {
      $('body').removeClass("on-scroll-down-buscador");
      $('body').removeClass("on-scroll-up-buscador");

      $('body.paso-1').addClass("ini-buscador-avanzado");
    }


    lastScrollTop2 = st2;
  /*} else {
  }*/

 } //else


}
