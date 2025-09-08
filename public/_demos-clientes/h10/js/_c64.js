$(function() {
  $(".c64__container .head .switch-holder .btn-switch").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("activo");

    $(".c64__container .valoraciones").removeClass("activo");
    $(".c64__container .head .switch-holder .logo").removeClass("activo");

    if(!$(this).hasClass("activo")){
      $(".c64__container .valoraciones.h10hoteles").addClass("activo");
      $(".c64__container .head .switch-holder .logo.l-h10").addClass("activo");
      $(".c64__container .btn-ver-todas-holder .btn-ver-todas").attr("id", "0");

      $(slider_h10).slick('slickGoTo', 0);

      /*if (!slider_h10.hasClass("slick-initialized")) {
        return slider_h10.slick(settings_h10);
      }*/

    } else {
      $(".c64__container .valoraciones.tripadvisor").addClass("activo");
      $(".c64__container .head .switch-holder .logo.l-tv").addClass("activo");
      $(".c64__container .btn-ver-todas-holder .btn-ver-todas").attr("id", "1");

      $(slider_trip).slick('slickGoTo', 0);

      /*if (!slider_trip.hasClass("slick-initialized")) {
        return slider_trip.slick(settings_trip);
      }*/
    }
  });

  $(".c64__container .btn-ver-todas-holder .btn-ver-todas").on("click", function(e){
    e.preventDefault();
    $(".c64__container.modal").addClass("show");
    var id = $(this).attr("id");

    $(".c64__container.modal .valoraciones_").removeClass("activo_");
    $(".c64__container.modal .head_ .switch-holder_ .logo_").removeClass("activo_");
    $(".c64__container.modal .head_ .switch-holder_ .btn-switch_").removeClass("activo_");

    if(id == 0){
      $(".c64__container.modal .valoraciones_.h10hoteles_").addClass("activo_");
      $(".c64__container.modal .head_ .switch-holder_ .logo_.l-h10_").addClass("activo_");
    } else {
      $(".c64__container.modal .valoraciones_.tripadvisor_").addClass("activo_");
      $(".c64__container.modal .head_ .switch-holder_ .logo_.l-tv_").addClass("activo_");
      $(".c64__container.modal .head_ .switch-holder_ .btn-switch_").addClass("activo_");
    }

//    $('html, body').animate( { scrollTop : 0 }, 300 );
    $('body').css('overflow','hidden');
  });

  $(".c64__container.modal .btn-close").on("click", function(e){
    e.preventDefault();
    $(".c64__container.modal").removeClass("show");
    $('body').css('overflow','initial');
  });

  $(".c64__container.modal .head_ .switch-holder_ .btn-switch_").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("activo_");

    $(".c64__container .head .switch-holder .btn-switch").toggleClass("activo");

    $(".c64__container.modal .valoraciones_").removeClass("activo_");
    $(".c64__container.modal .head_ .switch-holder_ .logo_").removeClass("activo_");

    $(".c64__container .valoraciones").removeClass("activo");
    $(".c64__container .head .switch-holder .logo").removeClass("activo");

    if(!$(this).hasClass("activo_")){
      $(".c64__container.modal .valoraciones_.h10hoteles_").addClass("activo_");
      $(".c64__container.modal .head_ .switch-holder_ .logo_.l-h10_").addClass("activo_");

      $(".c64__container .valoraciones.h10hoteles").addClass("activo");
      $(".c64__container .head .switch-holder .logo.l-h10").addClass("activo");
      $(".c64__container .btn-ver-todas-holder .btn-ver-todas").attr("id", "0");
    } else {
      $(".c64__container.modal .valoraciones_.tripadvisor_").addClass("activo_");
      $(".c64__container.modal .head_ .switch-holder_ .logo_.l-tv_").addClass("activo_");

      $(".c64__container .valoraciones.tripadvisor").addClass("activo");
      $(".c64__container .head .switch-holder .logo.l-tv").addClass("activo");
      $(".c64__container .btn-ver-todas-holder .btn-ver-todas").attr("id", "1");
    }
  });

  var slider_h10 = $(".c64__container .valoraciones.h10hoteles .slick-slider-holder .slick-slider");
  var settings_h10 = {
    infinite: true,
    mobileFirst: true,
    dots: false,
    arrows: false,
    dragging: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        slidesToShow: 4,
        slidesToScroll: 1,
        settings: "unslick"
      }

    ]
  };
  slider_h10.slick(settings_h10);

  var slider_trip = $(".c64__container .valoraciones.tripadvisor .slick-slider-holder .slick-slider");
  var settings_trip = {
    infinite: true,
    mobileFirst: true,
    dots: false,
    arrows: false,
    dragging: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        slidesToShow: 4,
        slidesToScroll: 1,
        settings: "unslick"
      }

    ]
  };
  slider_trip.slick(settings_trip);

  $(window).on("resize", function () {
    if ($(window).width() > 1024) {
      return;
    }
    if (!slider_h10.hasClass("slick-initialized")) {
      return slider_h10.slick(settings_h10);
    }
    if (!slider_trip.hasClass("slick-initialized")) {
      return slider_trip.slick(settings_trip);
    }
  });
});
