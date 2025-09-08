$(function() {

  if($(".sticky").length){
    stickySidebar = new StickySidebar('#col-right', {
      topSpacing: 113,
      bottomSpacing: -113,
      containerSelector: '.container-fix',
      //containerSelector: false,
      innerWrapperSelector: '.sticky',
      resizeSensor: true
      //stickyClass: 'is-affixed',
      //minWidth: 0
    });
  }

  $(".proceso-de-reservas .habitacion-top").hide();
  $(".proceso-de-reservas .habitacion-top.fix-width").show();
  $(".proceso-de-reservas .habitacion-top .btn-continuar").hide();
  $(".proceso-de-reservas .mi-reserva .conv").hide();
  $(".proceso-de-reservas .menu-bottom-mobile .conv").hide();
  $(".proceso-de-reservas .estado-continuar").hide();
  $(".proceso-de-reservas .estado-modificar").hide();
  $(".proceso-de-reservas .pago-ahora").hide();
  $(".proceso-de-reservas .texto-msj").hide();
  $(".proceso-de-reservas .menu-bottom-mobile .btn-back-top").hide();

  $(".proceso-de-reservas .menu-mobile .btn-editar").on("click", function(e){
    if ($(window).width() <= 1024) {
      e.preventDefault();
      $(".show-open-buscador-avanzado-mobile").addClass("open");
      $("body").addClass("no-scroll-y");

    } else {
    }
  });

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

  $(".proceso-de-reservas .mi-reserva .btn-impuestos, .proceso-de-reservas .extra-top .extra-bottom .data .importe .texto-pie .btn-impuestos").on("click", function(e){
    e.preventDefault();
    $(".modal-impuestos").addClass("show");
    $("body").removeClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });

  $(".proceso-de-reservas #i-quiero-regalar").change(function(e) {
    e.preventDefault();

    if($(this).is(':checked')){
      $(".proceso-de-reservas #f-quiero-regalar").removeClass("hidden");
    } else {
      $(".proceso-de-reservas #f-quiero-regalar").addClass("hidden");
    }
  });

  $(".proceso-de-reservas .menu-mobile .btn-editar").on("click", function(e){
    e.preventDefault();
    $(".show-open-buscador-avanzado-mobile").addClass("open");
  });

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

  $(".proceso-de-reservas .menu-bottom-mobile .acordeon .item .holder-top .btn-ver-detalles").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("show");

    if($(this).hasClass("show")){
      $(this).html("Ocultar detalles");
    } else {
      $(this).html("Ver detalles");
    }
  });

  $(".proceso-de-reservas .menu-bottom-mobile .btn-link-top").on("click", function(e){
    e.preventDefault();
    $(this).parent().toggleClass("open");
    $("body").toggleClass("no-scroll-y");
  });

  $(".proceso-de-reservas .menu-bottom-mobile .detalle .btn-close").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .menu-bottom-mobile").removeClass("open");
    $("body").removeClass("no-scroll-y");
  });

  $('input[name=tarifa]').on('change', function() {
    $(this).closest('.habitaciones-opcion-mobile').find('.prices').addClass('show-prices');
    if ($(this).closest('.habitaciones-opcion-mobile').find('input[name=regimen]:checked').val())
    {
      $(this).closest('.habitaciones-opcion-mobile').find(".estado-continuar").show();
      $(this).closest('.habitaciones-opcion-mobile').find(".estado-no-continuar").hide();
    }
  });

  $('input[name=regimen]').on('change', function() {
    if ($(this).closest('.habitaciones-opcion-mobile').find('input[name=tarifa]:checked').val())
    {
      $(this).closest('.habitaciones-opcion-mobile').find(".estado-continuar").show();
      $(this).closest('.habitaciones-opcion-mobile').find(".estado-no-continuar").hide();
    }
  });

  $(".proceso-de-reservas .notificacion-top .btn-close").on("click", function(e){
    e.preventDefault();
    $("body").removeClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $(this).parent().fadeOut(500);

    setTimeout(function(){
      $(".proceso-de-reservas .pasos").removeClass("noti-fix").addClass("noti-fix-remove");
    },501);
  });

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



  $(".proceso-de-reservas .menu-bottom-mobile .conversor-divisas a").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .menu-bottom-mobile .conv").show();
  });

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

  $(".proceso-de-reservas .mi-reserva .holder-top .btn-ver-detalles").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("show");

    if($(this).hasClass("show")){
      $(this).html("Ocultar detalles");
    } else {
      $(this).html("Ver detalles");
    }
  });

  $(".proceso-de-reservas .mi-reserva .holder-top .btn-eliminar").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().parent().remove();

    $(".proceso-de-reservas .habitacion-top .habitacion").eq(0).remove();
    num_hab = $(".proceso-de-reservas .habitacion-top .habitaciones-holder").children().length;
    $(".proceso-de-reservas .habitacion-top .titulo-top .texto").html( num_hab + " habitaciones de 4");
    if (num_hab > (num_max_hab-1)) {$(".proceso-de-reservas .habitacion-top .btn-continuar").show()}
    else{$(".proceso-de-reservas .habitacion-top .btn-continuar").hide()}

  });

  $(".proceso-de-reservas .menu-bottom-mobile .holder .btn-eliminar").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().parent().remove();
  });



  $(".proceso-de-reservas .habitacion .btns .btn-link:first-child").on("click", function(e){
    e.preventDefault();
    initModal_c30_a();
  });

  $(".proceso-de-reservas .habitacion .btns .btn-link:last-child").on("click", function(e){
    e.preventDefault();
    initModal_c30_b();
  });

  $(".proceso-de-reservas .habitacion .tabla .row .col .btn-link").on("click", function(e){
    e.preventDefault();

    num_hab = $(".proceso-de-reservas .habitacion-top .habitaciones-holder").children().length;
    if (num_hab < num_max_hab)
    {
      fake_hab='<div class="habitacion"><div class="image"><img src="../../images/image-154.png" class="img"></div><div class="data"><div class="titulo">1- HABITACIÓN DOBLE VISTA MAR LATERAL<div class="icons"><img src="../../icons/habitacion.svg" class="icon" alt=""><img src="../../icons/habitacion.svg" class="icon" alt=""><img src="../../icons/habitacion.svg" class="icon" alt=""><img src="../../icons/habitacion.svg" class="icon" alt=""></div></div><div class="texto">1 Cambio gratis, Sólo Alojamiento, <b>Desayuno incluido Club H10</b></div><div class="row-bottom"><div class="btns"><a href="#" class="btn-link">Ver equipamiento</a><span class="line"></span><a href="#" class="btn-link">Eliminar</a></div><div class="precio"><span>193€</span> 193€</div></div></div></div>';
      fake_detalle = '<div class="detalle"><div class="row"><div class="col-left"><div class="titulo">Habitación doble vista mar lateral</div></div><div class="col-right"><a href="#" class="btn-eliminar"><img src="../../icons/trash.svg" alt=""></a></div></div><div class="row bottom"><div class="col-left"><div class="texto">2 adultos, 2 niños Cancelación gratuita Media pensión</div></div><div class="col-right"><div class="precio">364 €</div></div></div></div>';

      $(".proceso-de-reservas .mi-reserva .holder-top .holder-detalles").append(fake_detalle);
      $(".proceso-de-reservas .habitacion-top .habitaciones-holder").append(fake_hab);

      $('html, body').animate( { scrollTop : $(".proceso-de-reservas .habitacion-top .titulo-top").offset().top-250 }, 200 );


      num_hab += 1;
      $(".proceso-de-reservas .habitacion-top .titulo-top .texto").html( num_hab + " habitaciones de 4");
      if (num_hab > (num_max_hab-1)) {
        $(".proceso-de-reservas .estado-continuar").show();
        $(".proceso-de-reservas .estado-no-continuar").hide();
      }
      else{
        $(".proceso-de-reservas .estado-continuar").hide();
        $(".proceso-de-reservas .estado-no-continuar").show();
      }


      $(".proceso-de-reservas .habitacion .btns .btn-link").off("click");

      $(".proceso-de-reservas .habitacion .btns .btn-link:first-child").on("click", function(e){
        e.preventDefault();
        initModal_c30_a();
      });

      $(".proceso-de-reservas .habitacion .btns .btn-link:last-child").on("click", function(e){
        e.preventDefault();
//        initModal_c30_b();
      });


      $(".proceso-de-reservas .mi-reserva .holder-top .btn-eliminar").off("click");
      $(".proceso-de-reservas .mi-reserva .holder-top .btn-eliminar").on("click", function(e){
        e.preventDefault();
        $(this).parent().parent().parent().remove();

        $(".proceso-de-reservas .habitacion-top .habitacion").eq(0).remove();
        num_hab = $(".proceso-de-reservas .habitacion-top .habitaciones-holder").children().length;
        $(".proceso-de-reservas .habitacion-top .titulo-top .texto").html( num_hab + " habitaciones de 4");
        if (num_hab < 1)
        {$(".proceso-de-reservas .habitacion-top").hide();}
        if (num_hab > (num_max_hab-1)) {
          $(".proceso-de-reservas .estado-continuar").show();
          $(".proceso-de-reservas .estado-no-continuar").hide();
        }
        else{
          $(".proceso-de-reservas .estado-continuar").hide();
          $(".proceso-de-reservas .estado-no-continuar").show();
          $(".proceso-de-reservas .mi-reserva .texto-msj").hide();
        }


      });

      if (num_hab > 0)
      {$(".proceso-de-reservas .habitacion-top").show();}


      if (num_hab > (num_max_hab-1)) {$(".proceso-de-reservas .habitacion-top .btn-continuar").show()}
      else{$(".proceso-de-reservas .habitacion-top .btn-continuar").hide()}


    }
  });

  /*$(".proceso-de-reservas .mensaje-ahorro .switch-holder .btn-switch").on("click", function(e){
    e.preventDefault();
    $(".modal-descuento").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });*/

  $(".proceso-de-reservas .data .row-bottom .btn-link-a").on("click", function(e){
    e.preventDefault();
    $(".modal-desglose-precios").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });

  $(".proceso-de-reservas .modal-condiciones .items .item .title").on("click", function(e){
    e.preventDefault();
    $(this).parent().toggleClass("show");
  });

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
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });

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

  $(".proceso-de-reservas .menu-bottom-mobile .holder .acordeon .item .item-content .total .btn-impuestos").on("click", function(e){
    e.preventDefault();
    $(".modal-impuestos").addClass("show");
    $("body").addClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
  });

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

  $(".proceso-de-reservas .habitacion .btn-modal-trigger").on("click", function(e){
    e.preventDefault();
    initSliderModalProcesoReservasGaleriaImagen();
  });

  $(".modal-proceso-de-reservas-galeria-imagenes .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-proceso-de-reservas-galeria-imagenes").removeClass("show");
  });

  $(".proceso-de-reservas .extra .btn-detalles").on("click", function(e){
    e.preventDefault();
    $(".modal-habitacion-detalle.modificar").addClass("show");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });

  $(".proceso-de-reservas .extra .btn-anadir").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .modal-habitacion-detalle .container-holder .col-bottom .col-selects:first-child option[hidden]").prop('selected', true);

      if ($(this).hasClass("parking"))
      {
        $(".modal-habitacion-detalle.modificar.parking").addClass("show");

        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.parking .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop("selectedIndex", 1);
        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.parking .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop('disabled', 'disabled');
      }
      else if ($(this).hasClass("cava"))
      {
        $(".modal-habitacion-detalle.modificar.cava").addClass("show");

        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.cava .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop("selectedIndex", 2);
        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.cava .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop('disabled', 'disabled');
      }
      else
      {
        $(".modal-habitacion-detalle.modificar.general").addClass("show");

        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.general .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop("selectedIndex", 0);
        $(".proceso-de-reservas .modal-habitacion-detalle.modificar.general .container-holder .col-bottom .col-left_ .col-selects-holder .col-selects .select:first-child select").prop('disabled', false);
      }

      $("body").addClass("no-scroll-y");
      $(".proceso-de-reservas .estado-no-continuar").show();
      $(".proceso-de-reservas .estado-continuar").hide();
      $(".proceso-de-reservas .estado-modificar").hide();


    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });

  $(".proceso-de-reservas .extra-top .extra .btn-modificar").on("click", function(e){
    e.preventDefault();
    $(".modal-habitacion-detalle.modificar").addClass("show");
    $(".proceso-de-reservas .estado-continuar").hide();
    $(".proceso-de-reservas .estado-modificar").show();

    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });

  $(".proceso-de-reservas .extra-top .extra .btn-eliminar").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().parent().parent().fadeOut();
  });

  $(".proceso-de-reservas .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-habitacion-detalle").removeClass("show");
    $("body").removeClass("no-scroll-y");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });

  $(".proceso-de-reservas .btn-continuar.estado-continuar").on("click", function(e){
    e.preventDefault();
    $(".modal-habitacion-detalle").removeClass("show");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
    $('body').removeClass("no-scroll-y");

      var fake_extra = $('<div class="extra"><div class="image"><img src="../../images/image-158.png" class="img" /></div><div class="data"><div class="titulo">Tratamiento en nuestro Despacio Spa <div class="texto"></div></div><div class="texto">Sorpenda a alguien especial con un ramo de flores frescas a su llegada</div><div class="row-bottom"><div class="btns"><a href="#" class="btn-modificar">Modificar</a><span class="line"></span><a href="#" class="btn-eliminar">Eliminar</a></div><div class="precio">1.450 €</div></div></div></div>');
      fake_extra.find(".btn-modificar").on("click", function(e){
      e.preventDefault();
      $(".modal-habitacion-detalle.modificar").addClass("show");
      $(".proceso-de-reservas .estado-continuar").hide();
      $(".proceso-de-reservas .estado-modificar").show();
      localStorage.setItem('scroll-y', $(window).scrollTop());
      $('html, body').animate( { scrollTop : 0 }, 0 );
    });
    fake_extra.find(".btn-eliminar").on("click", function(e){
      e.preventDefault();
      $(this).parent().parent().parent().parent().fadeOut();
      if($(".proceso-de-reservas.paso-2 .extras.seleccionados").children(":visible").length < 4)
        {$(".proceso-de-reservas.paso-2 .btn-continuar").html("CONTINUAR SIN EXTRAS");}
    });
    $(".proceso-de-reservas .extras.seleccionados").append(fake_extra);
    $(".proceso-de-reservas.paso-2 .btn-continuar").html("CONTINUAR");
    $([document.documentElement, document.body]).animate({scrollTop: 0}, 100);
  });

  $(".proceso-de-reservas .mi-reserva .estado-no-continuar").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .mi-reserva .texto-msj").show();
  });
  $(".proceso-de-reservas .menu-bottom-mobile .estado-no-continuar").on("click", function(e){
    e.preventDefault();
    $(".proceso-de-reservas .menu-bottom-mobile .texto-msj").show();
  });

  $(".proceso-de-reservas .btn-continuar.estado-modificar").on("click", function(e){
    e.preventDefault();
    $(".modal-habitacion-detalle").removeClass("show");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });

  $(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects .btn-eliminar").on("click", function(e){
    e.preventDefault();

    if($(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length > 1){
      $(this).parent().parent().remove();
      $(".proceso-de-reservas .modal-habitacion-detalle .mi-reserva .texto span").html($(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length);
      $(".proceso-de-reservas .modal-habitacion-detalle .mi-reserva .col-right span").html(156*$(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length + ",00");
    }
  });

  $(".proceso-de-reservas .modal-habitacion-detalle .container-holder .col-bottom .btn-anadir").on("click", function(e){
    e.preventDefault();

//    var c = $(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects:last-child").clone();

    var c = $('<div class="col-selects"><div class="select"><label>Día</label><select id="standard-select" required=""><option value="" hidden="">Elige un día</option><option value="23/12/2022">23/12/2022</option><option value="24/12/2022">24/12/2022</option><option value="25/12/2022">25/12/2022</option><option value="26/12/2022">26/12/2022</option></select></div><div class="select"><label>Habitación</label><select id="standard-select" required=""><option value="" hidden="">Elige la habitación</option><option value="Option 1">Habitación 1 (2 adultos, 2 niños)</option><option value="Option 2">Habitación 2 (2 adultos)</option></select></div><div class="select"><label>Cantidad</label><select id="standard-select" required=""><option value="" hidden="">Elige número</option><option value="Option 1">1</option><option value="Option 2">2</option></select></div><div class="select end"><div class="texto">SELECCIÓN 1</div><a href="#" class="btn-eliminar"><img src="../../icons/trash.svg" alt="" /></a></div></div>');
    c.find(".btn-eliminar").on("click", function(e){
      e.preventDefault();
      if($(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length > 1){
        $(this).parent().parent().remove();
        $(".proceso-de-reservas .modal-habitacion-detalle .mi-reserva .texto span").html($(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length);
        $(".proceso-de-reservas .modal-habitacion-detalle .mi-reserva .col-right span").html(156*$(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length + ",00");
      }
    });
    $(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder").append(c);
    $(".proceso-de-reservas .modal-habitacion-detalle .mi-reserva .texto span").html($(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length);
    $(".proceso-de-reservas .modal-habitacion-detalle .mi-reserva .col-right span").html(156*$(".proceso-de-reservas .modal-habitacion-detalle .col-selects-holder .col-selects").length + ",00");
  });


  $(".proceso-de-reservas .modal-habitacion-detalle .container-holder .col-bottom .col-selects:first-child select").on("change", function(e){
    e.preventDefault();
    console.log($(this).parent().parent().find("select option[hidden]:selected"));
    if (($(this).parent().parent().find("select option[hidden]:selected").length == 0) && ($(".proceso-de-reservas .modal-habitacion-detalle .estado-no-continuar").is(":visible")))
    {
      $(".proceso-de-reservas .modal-habitacion-detalle .estado-no-continuar").hide();
      $(".proceso-de-reservas .modal-habitacion-detalle .estado-continuar").show();
    }
  });



  $(".proceso-de-reservas .menu-bottom-mobile .btn-back-top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate( { scrollTop : 0 }, 400 );
  });

  $(".proceso-de-reservas .radiobox-holder input[name=realizar]").on("click", function(e){
    if($(this).val()== '2')
    {$(".proceso-de-reservas .pago-ahora").show();}
    else
    { $(".proceso-de-reservas .pago-ahora").hide();}
  });


  $(window).scroll(function() {
    stateScrollTopMenuReservas();
    if( $(window).scrollTop()>175)
    {  $(".proceso-de-reservas .menu-bottom-mobile .btn-back-top").show();}
    else
    {  $(".proceso-de-reservas .menu-bottom-mobile .btn-back-top").hide();}

  });

  stateScrollTopMenuReservas();

});

function stateScrollTopMenuReservas(){
  var distance = jQuery('.menu-mobile').outerHeight();

  if ($(window).width() <= 1024) {
    if(jQuery(this).scrollTop() > 0){
      jQuery('.menu-mobile').addClass("sticky");
    } else {
      jQuery('.menu-mobile').removeClass("sticky");
    }
  }

  if (jQuery(this).scrollTop() >= distance) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      if ($(window).width() <= 1024) {
        jQuery('.menu-mobile').addClass("on-sticky");
      }
      jQuery('.notificacion-top').addClass("on-sticky");
    } else {
      if ($(window).width() <= 1024) {
        jQuery('.menu-mobile').removeClass("on-sticky");
      }
      jQuery('.notificacion-top').removeClass("on-sticky");
    }
    lastScrollTop = st;
  }
}

function initSliderModalProcesoReservasGaleriaImagen(){
  $(".modal-proceso-de-reservas-galeria-imagenes").addClass("show");
  localStorage.setItem('scroll-y', $(window).scrollTop());
  $('html, body').animate( { scrollTop : 0 }, 0 );

  $(".modal-proceso-de-reservas-galeria-imagenes .slick-slider-holder .slick-slider").slick({
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

$(".modal-proceso-de-reservas-galeria-imagenes .slick-slider-holder .slick-slider").on('init', function(event, slick){
  var slickActual = "";
  if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
  } else { slickActual = (slick.currentSlide+1); }
  var slickTotal = slick.slideCount;
  if(slickTotal < 9){slickTotal = "0"+slickTotal};

  $(".modal-proceso-de-reservas-galeria-imagenes .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
  $(".modal-proceso-de-reservas-galeria-imagenes .slick-slider-holder .slick-contador .slick-total").html(slickTotal);
});

$(".modal-proceso-de-reservas-galeria-imagenes .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var slickActual = "";
  if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
  } else { slickActual = (nextSlide+1); }
  $(".modal-proceso-de-reservas-galeria-imagenes .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
  $(".modal-proceso-de-reservas-galeria-imagenes .slick-slider-holder .texto").html($(this).find(".slick-slide").not(".slick-cloned").eq(slickActual-1).children('.item').data('caption'));

});
