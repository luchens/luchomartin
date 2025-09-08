$(function() {
  $(".c43__container .btn-leer-mas").on("click", function(e){
    e.preventDefault();

    $(".c43__container .col-2").toggleClass("show");
    $(".c43__container .btn-leer-mas").toggleClass("activo");

    if($(".c43__container .col-2").hasClass("show")){
      $(".c43__container .btn-leer-mas").html("Leer menos");
    } else {
      $(".c43__container .btn-leer-mas").html("Leer más");
    }
  });
});
