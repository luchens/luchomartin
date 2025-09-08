$(function() {

  $(".c53__container .filtro .titulo").on("click", function(e) {
    e.preventDefault();
    $(this).parent().toggleClass("show");
  });

  $(".c53__container .btn-ver-filtros").on("click", function(e) {
    e.preventDefault();
    $('html, body').animate( { scrollTop : 0 }, 0 );
    $(".c53__container.modal").addClass("show");
    /*$('.c53__container .filtros-holder').toggleClass("show");
    $('.c71__container .filters').toggleClass("show");
      $('.c53__container .btn-ver-filtros').html('Ocultar Filtros')
    } else {
      $('.c53__container .btn-ver-filtros').html('Ver Filtros')
    }*/
  });

  $(".c53__container.modal .btn-close").on("click", function(e) {
    e.preventDefault();
    $(".c53__container.modal").removeClass("show");
  });

  $(".c53__container.modal .bottom-holder .btn-aplicar").on("click", function(e) {
    e.preventDefault();
    $(".c53__container.modal").removeClass("show");
  });

  $(".c53__container .btn-limpiar").on("click", function(e) {
    e.preventDefault();
    $('.c71__container .filters').empty();
    $('.c53__container .filtros .filtro .checkbox-holder .checkbox input').prop( "checked", false );
  });

  if($(".js-range-slider").length){
    //$(".js-range-slider").ionRangeSlider();
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        skin: "round",
        min: 0,
        max: 500,
        from: 100,
        to: 320,
        grid: false,
        step: 10
    });
  }


});
