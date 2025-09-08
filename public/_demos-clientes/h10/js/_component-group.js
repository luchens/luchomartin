$(function() {

    $(".component-group .component-group__info .btn-leer.mas").on("click", function(e){
      e.preventDefault();
      $(".component-group .component-group__info").addClass("show");
    });
  
    $(".component-group .component-group__info .btn-leer.menos").on("click", function(e){
      e.preventDefault();
      $(".component-group .component-group__info").removeClass("show");
    });
  
  });
  