$(function() {

  //updateBuscadorAvanzadoHabitacionValueInput();

  $('.c7__container input[hoteldestinofilter]').on("click", function(e){

    $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").addClass("open");
/*    if($(this).hasClass("show-open-hotel-destino")){
      $(this).removeClass("show-open-hotel-destino");
    } else {
      $(this).addClass("show-open-hotel-destino");
    }*/
    e.preventDefault();
  });

  $('.c7__container input[hoteldestinofilter]').keyup(function() {
    if ( $(this).val().length > 0) {
      $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").removeClass("open");
      $(this).addClass("show-open-hotel-destino");
    } else {
      $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").addClass("open");
      $(this).removeClass("show-open-hotel-destino");
    }
  });

  $('.show-open-buscador-avanzado-mobile input[hoteldestinofilter]').on("click", function(e){
    if($(".show-open-hotel-destino-mobile").hasClass("open")){
      $(".show-open-hotel-destino-mobile").removeClass("open");
      $("body").removeClass("no-scroll-y");
    } else {
      $('html, body').animate({ scrollTop: 0 }, 0);
      $(".show-open-hotel-destino-mobile").addClass("open");
      $("body").addClass("no-scroll-y");
      $(".show-open-hotel-destino-mobile .holder .content .show-open-hotel-destino-holder_ input.input.hotel-destino").focus();
    }
    e.preventDefault();
  });

  $(".show-open-hotel-destino-holder").mouseleave(function(){
    $(".c7__container .form .form-item input.input").removeClass("show-open-hotel-destino");
  });

  $('.c7__container input[habitacionfilter]').on("click", function(e){
    if($(this).hasClass("show-open-opciones")){
      $(this).removeClass("show-open-opciones");
    } else {
      $(this).addClass("show-open-opciones");
    }
    e.preventDefault();
  });

  /*$('.c7__container input[habitacionfilter]').focusout(function() {
    if($('.c7__container input[habitacionfilter]').hasClass("show-open-opciones")){
      $('.c7__container input[habitacionfilter]').removeClass("show-open-opciones");
    } else {
      $('.c7__container input[habitacionfilter]').addClass("show-open-opciones");
    }
  });*/

  /*let outhabitacionfilter;
  $('.c7__container input[habitacionfilter]').mouseout(function() {
    outhabitacionfilter = setTimeout(function(){
      if($('.c7__container input[habitacionfilter]').hasClass("show-open-opciones")){
        $('.c7__container input[habitacionfilter]').removeClass("show-open-opciones");
        $('.c7__container input[habitacionfilter]').blur();
        clearInterval(outhabitacionfilter);
        //console.log("1");
      } else {
        if($('.c7__container input[habitacionfilter]').is(":focus")){
          $('.c7__container input[habitacionfilter]').addClass("show-open-opciones");
        }
        //console.log("2");
      }
    }, 1000);
  });*/

  /*$('.c7__container input[habitacionfilter]').on( "mouseenter", function() {
    //console.log("mouse enter");
  }).on( "mouseleave", function() {
    //console.log("mouse leave");
    setTimeout(function(){
      if($('.c7__container input[habitacionfilter]').hasClass("show-open-opciones")){
        $('.c7__container input[habitacionfilter]').removeClass("show-open-opciones");
      } else {
        $('.c7__container input[habitacionfilter]').addClass("show-open-opciones");
      }
    }, 1000);
  });*/


  $('.proceso-de-reservas .c7__container input[habitacionfilter]').on("click", function(e){
    e.preventDefault();
    updateBuscadorAvanzadoHabitacionValueInputReservas();
  });

  moment.locale('es');
  $('.c7__container input[name="dateFilter"]').daterangepicker({
    autoUpdateInput: false,
    //alwaysShowCalendars: true,
    showDropdowns: false,
    autoApply: true,
    autoclose: true,
    locale: {
      format: "DD/MM/YYYY",
      separator: " - ",
      applyLabel: "Aceptar",
      cancelLabel: "Cancelar",
      fromLabel: "Desde",
      toLabel: "Hasta",
      customRangeLabel: "Custom",
      firstDay: 1,
      daysOfWeek: [
          "D",
          "L",
          "M",
          "M",
          "J",
          "V",
          "S"
      ], monthNames: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
      ]
    }
  }, function(start, end) {
    $('.c7__container input[name="dateFilter"]').val(start.format('DD/MM/YYYY')+" - "+end.format('DD/MM/YYYY'));
    $('.show-open-buscador-avanzado-mobile input[name="dateFilter-mobile"]').val(start.format('DD/MM/YYYY')+" - "+end.format('DD/MM/YYYY'));
  });



  $('.show-open-buscador-avanzado-mobile input[name="dateFilter-mobile"]').daterangepicker({
    autoUpdateInput: false,
    //alwaysShowCalendars: true,
    showDropdowns: false,
    autoApply: true,
    autoclose: true,
    parentEl: ".daterangepicker-mobile .holder .content .daterangepicker-mobile-holder",
    locale: {
      format: "DD/MM/YYYY",
      separator: " - ",
      applyLabel: "Aceptar",
      cancelLabel: "Cancelar",
      fromLabel: "Desde",
      toLabel: "Hasta",
      customRangeLabel: "Custom",
      firstDay: 1,
      daysOfWeek: [
          "D",
          "L",
          "M",
          "M",
          "J",
          "V",
          "S"
      ], monthNames: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
      ]
    }
  }, function(start, end) {
    $(".daterangepicker-mobile").removeClass("open");
    $("body").removeClass("no-scroll-y");
    $('.show-open-buscador-avanzado-mobile input[name="dateFilter-mobile"]').val(start.format('DD/MM/YYYY')+" - "+end.format('DD/MM/YYYY'));
    $('.c7__container input[name="dateFilter"]').val(start.format('DD/MM/YYYY')+" - "+end.format('DD/MM/YYYY'));
  });

  $('.show-open-hotel-destino-mobile .holder .content .show-open-hotel-destino-holder_ input.input.hotel-destino').keyup(function() {
    if ( $(this).val().length > 0) {
      $(".show-open-hotel-destino-mobile .holder .content .show-open-hotel-destino-holder_ .hotel-destino-content.predictivo").addClass("open");
      $(".show-open-hotel-destino-mobile .holder .content .show-open-hotel-destino-holder_ .hotel-destino-content.no-predictivo").addClass("close");
    } else {
      $(".show-open-hotel-destino-mobile .holder .content .show-open-hotel-destino-holder_ .hotel-destino-content.predictivo").removeClass("open");
      $(".show-open-hotel-destino-mobile .holder .content .show-open-hotel-destino-holder_ .hotel-destino-content.no-predictivo").removeClass("close");
    }
  });

  $('.c7__container input[name="dateFilter"]').click(function() {
    $(".daterangepicker").attr('data-before','Selecciona una fecha de entrada y de salida:');
    $(".daterangepicker").css("display", "block");

    $(".c7__container input[habitacionfilter]").removeClass("show-open-opciones");
    $(".c7__container input[hoteldestinofilter]").removeClass("show-open-hotel-destino");
    $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").removeClass("open");

  });

  $('.show-open-buscador-avanzado-mobile input[name="dateFilter-mobile"]').focusin(function() {
    $('html, body').animate({ scrollTop: 0 }, 0);
    $(".daterangepicker-mobile").addClass("open");
    $("body").addClass("no-scroll-y");
    //$(".c7__container .form .form-item input.input.fecha-entrada-salida").trigger("click");
  });

  $('.c7__container input[codigopromocionalfiler]').focusin(function() {
    $(".c7__container input[habitacionfilter]").removeClass("show-open-opciones");
    $(".c7__container input[hoteldestinofilter]").removeClass("show-open-hotel-destino");
    $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").removeClass("open");
  });

  $('.c7__container input[hotelDestinofilter]').focusin(function() {
    $(".show-open-hotel-destino-mobile").addClass("open");
    //$("body").addClass("no-scroll-y");
    $(".c7__container input[habitacionfilter]").removeClass("show-open-opciones");
    $(".show-open-hotel-destino-mobile input.hotel-destino").focus();
  });

  $('.c7__container input[habitacionfilter]').focusin(function() {
    $(".show-open-opciones-mobile").addClass("open");
    //$("body").addClass("no-scroll-y");
    $(".c7__container input[hoteldestinofilter]").removeClass("show-open-hotel-destino");
    $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").removeClass("open");
    updateBuscadorAvanzadoHabitaciones("desktop");
  });

  $('.show-open-buscador-avanzado-mobile input[habitacionfilter]').focusin(function() {
    $('html, body').animate({ scrollTop: 0 }, 0);
    $(".show-open-opciones-mobile").addClass("open");
    $("body").addClass("no-scroll-y");
    updateBuscadorAvanzadoHabitaciones("mobile");
  });

  $(".c7__container .form .form-item .btn-buscar").on("click", function(e){

    if ($(window).width() <= 1024) {
      e.preventDefault();
      $(".show-open-buscador-avanzado-mobile").addClass("open");
      $(".topbar-main").removeClass("on-scroll-down");

      $("body").addClass("no-scroll-y");

    } else {
      //$(".c7__container .form .form-item .btn-buscar").off("click");
    }
  });

  $(".c7__container .form .form-item .show-open-hotel-destino-holder .items .item a").on("click", function(e){
    e.preventDefault();
    $(".c7__container .form .form-item input.input.hotel-destino").removeClass("show-open-hotel-destino");
//    $("input.input.hotel-destino").val($(this).children(".texto").text());
//fake
      $("input.input.hotel-destino").val("Tenerife");
  });

  $(".c7__container .form .form-item .show-open-hotel-destino-2-holder .items .item a").on("click", function(e){
    e.preventDefault();
    $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").removeClass("open");
//    $("input.input.hotel-destino").val($(this).children(".texto").text());
//fake
      $("input.input.hotel-destino").val("Tenerife");
  });

  $(".show-open-hotel-destino-mobile .items .item a").on("click", function(e){
    e.preventDefault();
    $(".show-open-hotel-destino-mobile").removeClass("open");
    $("body").removeClass("no-scroll-y");
//    $("input.input.hotel-destino").val($(this).children(".texto").text());
//fake
    $("input.input.hotel-destino").val("Tenerife");

  });

  $(".c7__container .form .form-item .show-open-opciones-holder .btn-actualizar").on("click", function(e){
    e.preventDefault();
    $(".c7__container .form .form-item input.habitacion").removeClass("show-open-opciones");
    //fake
    $(".c7__container .form .form-item input.habitacion").val("4 habitaciones, 8 personas");
  });
  $(".show-open-opciones-mobile .btn-actualizar").on("click", function(e){
    e.preventDefault();
    $(".show-open-opciones-mobile").removeClass("open");
    $("body").removeClass("no-scroll-y");
    //fake
    $(".show-open-buscador-avanzado-mobile .form .form-item input.habitacion").val("4 habitaciones, 8 personas");
  });

  $(".c7__container .form .form-item .show-open-hotel-destino-2-holder .close").on("click", function(e){
    e.preventDefault();

    $(".c7__container .form .form-item .show-open-hotel-destino-2-holder").removeClass("open");
  });

  $(".c7__container .form .form-item .show-open-opciones-holder .close").on("click", function(e){
    e.preventDefault();

    $(".c7__container .form .form-item input.input.habitacion").removeClass("show-open-opciones");
  });

  /*$(".show-open-opciones-holder").mouseenter(function(){
    //console.log(outhabitacionfilter);
    clearInterval(outhabitacionfilter);
    //$('.c7__container input[habitacionfilter]').blur();
  });*/



  /*$(".show-open-opciones-holder").mouseleave(function(){
    $(".c7__container .form .form-item input.input").removeClass("show-open-opciones");
    $('.c7__container input[habitacionfilter]').blur();
    clearInterval(outhabitacionfilter);
  });*/

  $(".show-open-opciones-holder .habitaciones .habitacion .contador-holder .contador .btn-restar-sumar").on("click", function(e){
    //$(this).find(".input-numero")
    var cls = $(this).hasClass("right");
    var val = $(this).parent().find('input').val();
    var min = $(this).parent().find('input').attr("min");

    if(cls == true){
      val++;
    } else if(cls == false) {
      val--;
    }

    if(val >= min){
      $(this).parent().find('input').val(val);
    }

//    if ($("body.proceso-de-reservas ").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInput($(this).parent().find('input'));
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputReservas($(this).parent().find('input'));
//    }
    e.preventDefault();
  });

  $(".show-open-opciones-holder .btns .btn-anadir").on("click", function(e){
    e.preventDefault();

    var h = $(".show-open-opciones-holder .habitaciones .habitacion:last-child").clone();
    h.find(".input-numero.input-adultos").val(1);
    h.find(".input-numero.input-ninos").val(0);
    h.appendTo(".show-open-opciones-holder .habitaciones");

    h.find(".btn-eliminar").on("click", function(e){
      e.preventDefault();

      if($(".show-open-opciones-holder .habitaciones .habitacion").length > 1){
        $(this).parent().remove();

        var i = 0;
        $.each($(".show-open-opciones-holder .habitaciones .habitacion"), function( index, value ) {
          var t = $(this).find(".habitacion-titulo span").html();
          $(this).find(".habitacion-titulo span").html("HABITACIÓN "+ (i+1));
          i++;
        });
      }
    });

    h.find(".btn-restar-sumar").on("click", function(e){
      var cls = $(this).hasClass("right");
      var val = $(this).parent().find('input').val();
      var min = $(this).parent().find('input').attr("min");

      if(cls == true){
        val++;
      } else if(cls == false) {
        val--;
      }

      if(val >= min){
        $(this).parent().find('input').val(val);
      }

//      if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInput($(this).parent().find('input'));
//      }
//      else{
        updateBuscadorAvanzadoHabitacionValueInputReservas($(this).parent().find('input'));
//      }
      e.preventDefault();
    });

    var i = 0;
    $.each($(".show-open-opciones-holder .habitaciones .habitacion"), function( index, value ) {
      var t = $(this).find(".habitacion-titulo span").html();
      $(this).find(".habitacion-titulo span").html("HABITACIÓN "+ (i+1));
      i++;
    });

//    if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInput();
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputReservas();
//    }
  });

  $(".show-open-opciones-holder .habitaciones .habitacion .btn-eliminar").on("click", function(e){
    e.preventDefault();

    if($(".show-open-opciones-holder .habitaciones .habitacion").length > 1){
      $(this).parent().remove();

      var i = 0;
      $.each($(".show-open-opciones-holder .habitaciones .habitacion"), function( index, value ) {
        var t = $(this).find(".habitacion-titulo span").html();
        $(this).find(".habitacion-titulo span").html("HABITACIÓN "+ (i+1));
        i++;
      });
    }
//    if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInput();
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputReservas();
//    }
  });

  $(".daterangepicker-mobile .close").on("click", function(e){
    e.preventDefault();

    $(".daterangepicker-mobile").removeClass("open");
    $("body").css("overflow-y", "visible");
  });

  $(".show-open-hotel-destino-mobile .close").on("click", function(e){
    e.preventDefault();

    $(".show-open-hotel-destino-mobile").removeClass("open");
  });

  $(".show-open-opciones-mobile .close").on("click", function(e){
    e.preventDefault();

    $(".show-open-opciones-mobile").removeClass("open");
  });

  $(".show-open-buscador-avanzado-mobile .close").on("click", function(e){
    e.preventDefault();
    $("body").removeClass("no-scroll-y");
    $(".show-open-buscador-avanzado-mobile").removeClass("open");
  });

  $(".show-open-opciones-mobile .holder .content .show-open-opciones-holder_ .habitaciones .habitacion .contador-holder .contador .btn-restar-sumar").on("click", function(e){
    //$(this).find(".input-numero")
    var cls = $(this).hasClass("right");
    var val = $(this).parent().find('input').val();
    var min = $(this).parent().find('input').attr("min");

    if(cls == true){
      val++;
    } else if(cls == false) {
      val--;
    }

    if(val >= min){
      $(this).parent().find('input').val(val);
    }

//    if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInputMobile($(this).parent().find('input'));
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputMobileReservas($(this).parent().find('input'));
//    }

    e.preventDefault();
  });

  $(".show-open-opciones-mobile .holder .content .show-open-opciones-holder_ .habitaciones .habitacion .btn-eliminar").on("click", function(e){
    e.preventDefault();

    if($(".show-open-opciones-mobile .holder .content .show-open-opciones-holder_ .habitaciones .habitacion").length > 1){
      $(this).parent().remove();

      var i = 0;
      $.each($(".show-open-opciones-mobile .holder .content .show-open-opciones-holder_ .habitaciones .habitacion"), function( index, value ) {
        var t = $(this).find(".habitacion-titulo span").html();
        $(this).find(".habitacion-titulo span").html("HABITACIÓN "+ (i+1));
        i++;
      });
    }
//    if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInputMobile();
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputMobileReservas();
//    }
  });

  $(".show-open-opciones-mobile .show-open-opciones-holder_ .btn-anadir").on("click", function(e){
    e.preventDefault();

    var h = $(".show-open-opciones-mobile .show-open-opciones-holder_ .habitaciones .habitacion:last-child").clone();
    h.find(".input-numero.input-adultos").val(1);
    h.find(".input-numero.input-ninos").val(0);
    h.appendTo(".show-open-opciones-mobile .show-open-opciones-holder_ .habitaciones");

    $(".show-open-opciones-mobile .show-open-opciones-holder_ .habitaciones .habitacion").find(".btn-eliminar").on("click", function(e){
      e.preventDefault();

      if($(".show-open-opciones-mobile .show-open-opciones-holder_ .habitaciones .habitacion").length > 1){
        $(this).parent().remove();

        var i = 0;
        $.each($(".show-open-opciones-mobile .show-open-opciones-holder_ .habitaciones .habitacion"), function( index, value ) {
          var t = $(this).find(".habitacion-titulo span").html();
          $(this).find(".habitacion-titulo span").html("HABITACIÓN "+ (i+1));
          i++;
        });
      }
    });

    $(".show-open-opciones-mobile .show-open-opciones-holder_ .habitaciones .habitacion").find(".btn-restar-sumar").on("click", function(e){
      var cls = $(this).hasClass("right");
      var val = $(this).parent().find('input').val();
      var min = $(this).parent().find('input').attr("min");

      if(cls == true){
        val++;
      } else if(cls == false) {
        val--;
      }

      if(val >= min){
        $(this).parent().find('input').val(val);
      }

//      if ($("body.proceso-de-reservas").length == 0 ) {
//        updateBuscadorAvanzadoHabitacionValueInputMobile($(this).parent().find('input'));
//      }
//      else{
        updateBuscadorAvanzadoHabitacionValueInputMobileReservas($(this).parent().find('input'));
//      }
      e.preventDefault();
    });

    var i = 0;
    $.each($(".show-open-opciones-mobile .show-open-opciones-holder_ .habitaciones .habitacion"), function( index, value ) {
      var t = $(this).find(".habitacion-titulo span").html();
      $(this).find(".habitacion-titulo span").html("HABITACIÓN "+ (i+1));
      i++;
    });

//    if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInput();
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputReservas();
//    }
  });

});

function updateBuscadorAvanzadoHabitacionValueInput(input){
  var total_a = 0;
  var total_n = 0;

  //if(!input.hasClass("input-edad")){
    $.each($(".show-open-opciones-holder .habitaciones .habitacion"), function( index, value ) {
      total_a += Number($(this).find(".input-numero.input-adultos").val());
      total_n += Number($(this).find(".input-numero.input-ninos").val());
    });

    //console.log(total_a+ " / " +total_n);
  //}
  //console.log(input.hasClass("input-edad"));
  $(".c7__container .form-holder .form .form-item input.input.habitacion").val(total_a + " adultos, " + total_n + " niños");
}

function updateBuscadorAvanzadoHabitacionValueInputMobile(input){
  var total_a = 0;
  var total_n = 0;

  //if(!input.hasClass("input-edad")){
    $.each($(".show-open-opciones-mobile .habitaciones .habitacion"), function( index, value ) {
      total_a += Number($(this).find(".input-numero.input-adultos").val());
      total_n += Number($(this).find(".input-numero.input-ninos").val());
    });

    //console.log(total_a+ " / " +total_n);
  //}
  //console.log(input.hasClass("input-edad"));
  $(".show-open-buscador-avanzado-mobile input.input.habitacion").val(total_a + " adultos, " + total_n + " niños");
}

function updateBuscadorAvanzadoHabitaciones(breakpoint){
  //console.log(breakpoint);

  if(breakpoint == "desktop"){
//    if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInput();
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputReservas();
//    }
  } else if (breakpoint == "mobile"){
//    if ($("body.proceso-de-reservas").length == 0 ) {
//      updateBuscadorAvanzadoHabitacionValueInputMobile();
//    }
//    else{
      updateBuscadorAvanzadoHabitacionValueInputMobileReservas();
//    }
  }

  /*if(breakpoint == "desktop"){
    $(".show-open-opciones-mobile .habitaciones").empty();
    var hbs = $(".show-open-opciones-holder .habitaciones").clone();
    hbs.html(".show-open-opciones-mobile .habitaciones");
  } else if (breakpoint == "mobile"){
    $(".show-open-opciones-holder .habitaciones").empty();
    var hbs = $(".show-open-opciones-mobile .habitaciones").clone();
    hbs.html(".show-open-opciones-holder .habitaciones");
  }*/
}


function updateBuscadorAvanzadoHabitacionValueInputReservas(input){
  var total_a = 4;
  var total_n = 8;
  $(".c7__container .form-holder .form .form-item input.input.habitacion").val(total_a + " habitaciones, " + total_n + " personas");
}

function updateBuscadorAvanzadoHabitacionValueInputMobileReservas(input){
  var total_a = 4;
  var total_n = 8;
  $(".show-open-buscador-avanzado-mobile input.input.habitacion").val(total_a + " habitaciones, " + total_n + " personas");
}
