$(function() {

  $(".c8-1__container .btn-ver-mas").on("click", function(e){
    e.preventDefault();
    $('.c37__container[data-order="'+$(this).data("order")+'"]').toggleClass("show");
    $(this).parent().toggleClass("show");
  });

  $(".c8-1__container .btn-ver-menos").on("click", function(e){
    e.preventDefault();
    $('.c37__container[data-order="'+$(this).data("order")+'"]').toggleClass("show");
    $(this).parent().toggleClass("show");

  });

});
