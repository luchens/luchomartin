$(function() {

    $(".c10__container .card-info__text-container10 .btn-leer.mas").on("click", function(e){
      e.preventDefault();
      $(this).closest(".c10__container .card-info__text-container10").addClass("show");
    });

    $(".c10__container .card-info__text-container10 .btn-leer.menos").on("click", function(e){
      e.preventDefault();
      $(this).closest(".c10__container .card-info__text-container10").removeClass("show");
    });

});
