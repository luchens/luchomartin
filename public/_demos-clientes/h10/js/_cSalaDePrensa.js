$(function() {

  $(".cSalaDePrensa__container .col .col-right .btns .col-right_ .btn-ver-mas").on("click", function(e){
    e.preventDefault();

    $(this).parent().parent().parent().parent().find(".texto").toggleClass("show");

    if(!$(this).parent().parent().parent().parent().find(".texto").hasClass("show")){
      $(this).html("Ver más");
    } else {
      $(this).html("Ver menos");
    }
  });
  
});
