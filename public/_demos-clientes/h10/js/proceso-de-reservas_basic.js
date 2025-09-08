$(function() {

  // INFO: SIDEBAR DERECHA STICKY
  if($(".sticky").length){
    stickySidebar = new StickySidebar('#col-right', {
      topSpacing: 113,
      bottomSpacing: -113,
      containerSelector: '.container-fix',
      innerWrapperSelector: '.sticky',
      resizeSensor: true
    });
  }

  //INFO: CIERRE GENERAL MODALES
  $(".proceso-de-reservas .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-habitacion-detalle").removeClass("show");
    $("body").removeClass("no-scroll-y");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });
  //INFO: MOVIL BOTON DE BACK TO TOP
  $(".proceso-de-reservas .menu-bottom-mobile .btn-back-top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate( { scrollTop : 0 }, 400 );
  });
  $(window).scroll(function() {
    stateScrollTopMenuReservas();
    if( $(window).scrollTop()>175)
    {  $(".proceso-de-reservas .menu-bottom-mobile .btn-back-top").show();}
    else
    {  $(".proceso-de-reservas .menu-bottom-mobile .btn-back-top").hide();}

  });


  // INFO: MOVIL CONTROL MODAL CONTACTANOS
  $(".proceso-de-reservas .menu-bottom-mobile .detalle .holder .title-top .holder-top .btns .btn-call").on("click", function(e){
    e.preventDefault();
    $(".menu-bottom-mobile .detalle").addClass("hide");
    $(".menu-bottom-mobile .contactanos").addClass("show");
  });
  $(".proceso-de-reservas .menu-bottom-mobile .contactanos .btn-close").on("click", function(e){
    e.preventDefault();
    $(".menu-bottom-mobile .detalle").removeClass("hide");
    $(".menu-bottom-mobile .contactanos").removeClass("show");
  });

  // INFO: MOVIL CONTROL MOSTRAR BUSCADOR AVANZADO
  $(".proceso-de-reservas .menu-mobile .btn-editar").on("click", function(e){
    e.preventDefault();
    $(".show-open-buscador-avanzado-mobile").addClass("open");
  });

  // INFO: MOVIL CONTROL DE ITEMS DE ACORDEON DE LA PESTAÑA INFERIONR. SE HACE UN POCO COMPLEJO POR BUG EN IPHONE
  $(".proceso-de-reservas .menu-bottom-mobile .acordeon .item .item-title").on("click", function(e){
    e.preventDefault();
    $(this).parent().find(".item-title-2").toggleClass("show");
    $(this).parent().find(".item-title-2").show();
    $(this).hide();
  });
  $(".proceso-de-reservas .menu-bottom-mobile .acordeon .item .item-title-2").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("show");
    $(this).parent().find(".item-title").show();
    $(this).hide();
  });

  // INFO: MOVIL CONTROL DE VER DETALLES DE LA PESTAÑA INFERIOR.
  $(".proceso-de-reservas .menu-bottom-mobile .acordeon .item .holder-top .btn-ver-detalles").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("show");

    if($(this).hasClass("show")){
      $(this).html("Ocultar detalles");
    } else {
      $(this).html("Ver detalles");
    }
  });

  // INFO: MOVIL CIERRE DE LA PESTAÑA INFERIOR CUANDO ESTE DESPLEGADA.
  $(".proceso-de-reservas .menu-bottom-mobile .detalle .btn-close").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .menu-bottom-mobile").removeClass("open");
    $("body").removeClass("no-scroll-y");
  });


  // INFO: MOVIL CONTROL PARA EL BOTON DE DESPLEGLAR LA PESTAÑA INFERIOR .
  $(".proceso-de-reservas .menu-bottom-mobile .btn-link-top").on("click", function(e){
    e.preventDefault();
    $(this).parent().toggleClass("open");
    $("body").toggleClass("no-scroll-y");
  });





  // INFO: DESKTOP CONTROL MODAL IMPUESTOS
  $(".proceso-de-reservas .mi-reserva .btn-impuestos, .proceso-de-reservas .extra-top .extra-bottom .data .importe .texto-pie .btn-impuestos").on("click", function(e){
    e.preventDefault();
    $(".modal-impuestos").addClass("show");
    $("body").removeClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });
  // INFO: MOVIL CONTROL MODAL IMPUESTOS
  $(".proceso-de-reservas .menu-bottom-mobile .holder .acordeon .item .item-content .total .btn-impuestos").on("click", function(e){
    e.preventDefault();
    $(".modal-impuestos").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });


  // INFO: CONTROL MODAL CAMBIO FECHA
  $(".proceso-de-reservas .tabla .btn-cambio").on("click", function(e){
    e.preventDefault();
    $(".modal-cambio").addClass("show");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });
  $(".modal-cambio .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-cambio").removeClass("show");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });

  // INFO: CONTROL MODAL CANCELACION GRATUITA
  $(".proceso-de-reservas .tabla .btn-cancelacion").on("click", function(e){
    e.preventDefault();
    $(".modal-cancelacion").addClass("show");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });

  $(".modal-cancelacion .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-cancelacion").removeClass("show");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });

  // INFO: CONTROL MODAL TODO INCLUIDO
  $(".proceso-de-reservas .tabla .btn-todo").on("click", function(e){
    e.preventDefault();
    $(".modal-todo").addClass("show");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });

  $(".modal-todo .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-todo").removeClass("show");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });


  // INFO: MOVIL CONTROL MODAL CONDICIONES
  $(".proceso-de-reservas .habitaciones-opcion-mobile .btn-link").on("click", function(e){
    e.preventDefault();
    $(".modal-condiciones").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });
  $(".modal-condiciones .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-condiciones").removeClass("show");
    $("body").removeClass("no-scroll-y");
    $("body").removeClass("no-scroll-y");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });
  $(".proceso-de-reservas .modal-condiciones .items .item .title").on("click", function(e){
    e.preventDefault();
    $(this).parent().toggleClass("show");
  });



  // INFO: MOVIL CONTROL MODAL MONEDA DE HOTEL
  $(".proceso-de-reservas .menu-bottom-mobile .row .col-left .btn-link").on("click", function(e){
    e.preventDefault();
    $(".modal-moneda-del-hotel").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });
  $(".proceso-de-reservas .menu-bottom-mobile .holder .acordeon .item .item-content .total .row .btn-moneda").on("click", function(e){
    e.preventDefault();
    $(".modal-moneda-del-hotel").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });

  // INFO: DESKTOP CONTROL MODAL MONEDA DE HOTEL
  $(".proceso-de-reservas .mi-reserva .btn-moneda").on("click", function(e){
    e.preventDefault();
    $(".modal-moneda-del-hotel").addClass("show");
    $("body").removeClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });
  $(".modal-info .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-info").removeClass("show");
    $("body").removeClass("no-scroll-y");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });


  // INFO: CONTROL VISIBILIDAD CONVERSOR DE DIVISAS
  $(".proceso-de-reservas .conversor-divisas .titulo").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("show");
    stickySidebar.updateSticky();
  });
  $(".proceso-de-reservas .conversor-divisas a").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .mi-reserva .conv").show();
    $(".proceso-de-reservas .conversor-divisas a").removeClass("activo");
    $(this).addClass("activo");
    $(".proceso-de-reservas .conversor-divisas .titulo").toggleClass("show");
    $(".proceso-de-reservas .menu-bottom-mobile .item-title-2").first().toggleClass("show");
    $(".proceso-de-reservas .menu-bottom-mobile .item-title").first().show();
    $(".proceso-de-reservas .menu-bottom-mobile .item-title-2").first().hide();
  });

  
  // INFO: CONTROL VISIBILIDAD DETALLES DEL CARRITO
  $(".proceso-de-reservas .mi-reserva .holder-top .btn-ver-detalles").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("show");

    if($(this).hasClass("show")){
      $(this).html("Ocultar detalles");
    } else {
      $(this).html("Ver detalles");
    }
  });



  // INFO: CONTROL ACTIVACION BOTON SWITCH AZUL
  $(".switch-holder .btn-switch").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("activo");
    $(this).parent().parent().toggleClass("desactivo");
    $(this).parent().parent().parent().parent().toggleClass("desactivo");


    if(!$(this).hasClass("activo")){
      $(".modal-descuento").addClass("show");
      $("body").addClass("no-scroll-y");
      localStorage.setItem('scroll-y', $(window).scrollTop());
    }
  });







  // INFO: PASO 2 MOSTRAR MODAL DE SELECCION
  $(".proceso-de-reservas .extra .btn-anadir").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .modal-habitacion-detalle .container-holder .col-bottom .col-selects:first-child option[hidden]").prop('selected', true);

        $(".modal-habitacion-detalle.modificar.general").addClass("show");

        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.general .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop("selectedIndex", 0);
        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.general .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop('disabled', false);

      $("body").addClass("no-scroll-y");
      $(".proceso-de-reservas .estado-no-continuar").show();
      $(".proceso-de-reservas .estado-continuar").hide();
      $(".proceso-de-reservas .estado-modificar").hide();

    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });
  //INFO: PASO 2 ABRE MODAL VER DETALLES
  $(".proceso-de-reservas .extra .btn-detalles").on("click", function(e){
    e.preventDefault();
    $(".modal-habitacion-detalle.modificar").addClass("show");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });



  // INFO: PASO 3 VISIBILIDAD QUIERO REGALAR
  $(".proceso-de-reservas #i-quiero-regalar").change(function(e) {
    e.preventDefault();

    if($(this).is(':checked')){
      $(".proceso-de-reservas #f-quiero-regalar").removeClass("hidden");
    } else {
      $(".proceso-de-reservas #f-quiero-regalar").addClass("hidden");
    }
  });
  // INFO: PASO 3 SELECCION DE OPCION REALIZAR PAGO AHORA
  $(".proceso-de-reservas .radiobox-holder input[name=realizar]").on("click", function(e){
    if($(this).val()== '2')
    {$(".proceso-de-reservas .pago-ahora").show();}
    else
    { $(".proceso-de-reservas .pago-ahora").hide();}
  });



  // INFO: PASO 4 CONTROL DE CIERRE DE LA NOTIFICACION VERDE
  $(".proceso-de-reservas .notificacion-top .btn-close").on("click", function(e){
    e.preventDefault();
    $("body").removeClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $(this).parent().fadeOut(500);

    setTimeout(function(){
      $(".proceso-de-reservas .pasos").removeClass("noti-fix").addClass("noti-fix-remove");
    },501);
  });
  // INFO: PASO 4 CONTROL MODAL DESGLOSE DE PRECIOS
  $(".proceso-de-reservas .data .row-bottom .btn-link-a").on("click", function(e){
    e.preventDefault();
    $(".modal-desglose-precios").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });


  stateScrollTopMenuReservas();

});

// INFO: MOVIL CONTROL DE STICKY MENU MOVIL
function stateScrollTopMenuReservas(){
  var distance = jQuery('.menu-mobile').outerHeight();

  if(jQuery(this).scrollTop() > 0){
    jQuery('.menu-mobile').addClass("sticky");
  } else {
    jQuery('.menu-mobile').removeClass("sticky");
  }

  if (jQuery(this).scrollTop() >= distance) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      jQuery('.menu-mobile').addClass("on-sticky");
      jQuery('.notificacion-top').addClass("on-sticky");
    } else {
      jQuery('.menu-mobile').removeClass("on-sticky");
      jQuery('.notificacion-top').removeClass("on-sticky");
    }
    lastScrollTop = st;
  } else {
  }

}



















