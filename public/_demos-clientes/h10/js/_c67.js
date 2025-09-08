$(function() {

  $(".c67__container .texto .btn-leer.mas").on("click", function(e) {
    e.preventDefault();
    $(this).parent().parent().addClass("show");
  });

  $(".c67__container .texto .btn-leer.menos").on("click", function(e) {
    e.preventDefault();
    $(this).parent().parent().removeClass("show");
  });

});
