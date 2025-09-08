$(function() {

  $(".cBonoRegalo__container .texto .btn-leer.mas").on("click", function(e){
    e.preventDefault();
    $(this).parent().addClass("show");

    $(".cBonoRegalo__container .texto .btn-leer.menos").on("click", function(e){
      e.preventDefault();
      $(this).parent().removeClass("show");
    });
  });

});
