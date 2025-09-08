$(function () {
  var fecha_fin = $('.c56__container .contador-holder .contador').attr("data-fecha-fin");

  $(".c56__container .contador-holder .contador .dias").attr('data-after','DÍAS');
  $(".c56__container .contador-holder .contador .horas").attr('data-after','HORAS');
  $(".c56__container .contador-holder .contador .minutos").attr('data-after','MINUTOS');
  $(".c56__container .contador-holder .contador .segundos").attr('data-after','SEGUNDOS');

  //console.log(fecha_fin);
  $('.c56__container .contador-holder .contador').countdown(fecha_fin, function(event) {

    //console.log(event);
    //var totalHoras = event.offset.totalDays * 24 + event.offset.hours;
    var totalHoras = event.offset.hours;

    $('.c56__container .contador-holder .texto-top-holder .texto-top span').html(event.offset.totalDays);
    $('.c56__container .contador-holder .contador .dias').html(event.offset.totalDays);
    $('.c56__container .contador-holder .contador .horas').html(totalHoras);
    $('.c56__container .contador-holder .contador .minutos').html(event.strftime('%M'));
    $('.c56__container .contador-holder .contador .segundos').html(event.strftime('%S'));
    if(totalHoras <= 0){
      //console.log("FIN!");
    }
  });



  $(".c56__container .open-modal").on("click", function(e){
    e.preventDefault();
    initModal_c30_c(0);
  });


});

/*
//MODAL
$(".c56__container .open-modal").on("click", function(e){
  e.preventDefault();
  $(".c56__container.general_modal").addClass("show");
  var id = $(this).attr("id");
  $('body').css('overflow','hidden');
});

$(".c56__container.general_modal .btn-close").on("click", function(e){
  e.preventDefault();
  $(".c56__container.general_modal").removeClass("show");
  $('body').css('overflow','initial');
});
*/
