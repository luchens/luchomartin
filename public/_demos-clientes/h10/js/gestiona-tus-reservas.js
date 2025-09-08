$(function() {
  $('.reservas-realizadas .btns .btn-cancelar').on("click", function(e){
    $(".modal-mantente").addClass("show");
    $("body").addClass("no-scroll-y");
    e.preventDefault();
  });

  $('.modal-mantente .btn-close').on("click", function(e){
    $("body").removeClass("no-scroll-y");
    $(".modal-mantente").removeClass("show");
    e.preventDefault();
  });

  $('.modal-mantente .btn-cancel').on("click", function(e){
    $("body").removeClass("no-scroll-y");
    $(".modal-mantente").removeClass("show");
    e.preventDefault();
  });

  $('.modal-mantente .btn-enviar').on("click", function(e){
    $(".modal-mantente").removeClass("show");
    $(".modal-confirmacion").addClass("show");
    $("body").addClass("no-scroll-y");
    e.preventDefault();
  });

  $('.modal-confirmacion .btn-close').on("click", function(e){
    $("body").removeClass("no-scroll-y");
    $(".modal-confirmacion").removeClass("show");
    e.preventDefault();
  });


});
