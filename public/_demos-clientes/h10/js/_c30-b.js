$(function() {
  $(".btn-modal-reservar-habitacion").on("click", function(e){
    e.preventDefault();

    initModal_c30_b();
  });

  moment.locale('es');
  $('.c30-b__container #datepicker_habitaciones').daterangepicker({
    autoUpdateInput: true,
    alwaysShowCalendars: true,
    showDropdowns: false,
    autoApply: true,
    autoclose: true,
    parentEl: ".c30-b__container .datepicker-holder .daterangepicker-holder-input",
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
    //console.log(start.format('DD/MM/YYYY'));
    //console.log(end.format('DD/MM/YYYY'));
    //$('.c30-b__container #datepicker_habitaciones').val(start.format('DD/MM/YYYY')+" - "+end.format('DD/MM/YYYY'));

    /*setTimeout(function(){
      $(".c30-b__container .datepicker-holder .daterangepicker-holder-input .daterangepicker .calendar-table table tbody tr td").append('<div class="precio">128€</div>');
    },1);*/

    //$('.show-open-buscador-avanzado-mobile input[name="dateFilter-mobile"]').val(start.format('DD/MM/YYYY')+" - "+end.format('DD/MM/YYYY'));
  });

  $('.c30-b__container #datepicker_habitaciones').on('show.daterangepicker', function(ev, picker) {
    btnPrevNext();
  });


  /*setTimeout(function(){
    btnPrevNext();
  }, 100);*/

  /*$(document).on("click", ".daterangepicker .calendar-table .prev", function(){
    console.log("It works!");
  });*/

  /*$('.c30-b__container #datepicker_habitaciones').on('apply.daterangepicker', function(ev, picker) {
    console.log(picker.startDate.format('YYYY-MM-DD'));
    console.log(picker.endDate.format('YYYY-MM-DD'));
  });*/

  //$(window).load(function(){
    //$("#datepicker_habitaciones").trigger("click");
  //});

});

function btnPrevNext(){
  $('.daterangepicker .calendar-table .prev').off("click");
  $('.daterangepicker .calendar-table .next').off("click");

  $('.daterangepicker .calendar-table .prev').on('click', function(e) {
    setTimeout(function(){
      btnPrevNext();
    }, 1);
  });

  $('.daterangepicker .calendar-table .next').on('click', function(e) {
    setTimeout(function(){
      btnPrevNext();
    }, 1);
  });

  setPrecioDias();
}

function setPrecioDias(){
  if(!$(".c30-b__container .datepicker-holder .daterangepicker-holder-input .daterangepicker .calendar-table table tbody tr td").find("div").hasClass("precio")){
    $(".c30-b__container .datepicker-holder .daterangepicker-holder-input .daterangepicker .calendar-table table tbody tr td").append('<div class="precio">128<span class="currency">€</span></div>');
  }
}

function initModal_c30_b(){
  localStorage.setItem('scroll-y', $(window).scrollTop());
  $('html, body').animate( { scrollTop : 0 }, 300 );
  $(".c30-b__container.modal-reservar-habitacion").addClass("show");
  $("body").addClass("no-scroll-y");

  $("#datepicker_habitaciones").trigger("click");

  setPrecioDias();

  $(".c30-b__container.modal-reservar-habitacion .btn-close").on("click", function(e){
    e.preventDefault();
    $(".c30-b__container.modal-reservar-habitacion").removeClass("show");
    //$('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
    $("body").removeClass("no-scroll-y");
  });
}
