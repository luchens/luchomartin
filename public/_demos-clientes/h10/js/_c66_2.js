$(function() {

  $(".c66__container .texto .texto-1 .btn-leer.mas").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().addClass("show");
  });

  $(".c66__container .texto .texto-2 .btn-leer.menos").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().removeClass("show");
  });

});
