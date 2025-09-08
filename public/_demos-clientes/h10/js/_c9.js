$(function() {

    $(".card-info09 .card-info09__p09 .btn-leer.mas").on("click", function(e){
      e.preventDefault();
      $(".card-info09 .card-info09__text-container").addClass("show");
    });
  
    $(".card-info09 .card-info09__p09 .btn-leer.menos").on("click", function(e){
      e.preventDefault();
      $(".card-info09 .card-info09__text-container").removeClass("show");
    });
  
  });
  