$(function () {

  $(".c61__container .item").on("click", function(e){
    e.preventDefault();

    $(this).toggleClass("show");
  });

  $(".c61__container .titulo-top").on("click", function(e){
    e.preventDefault();

    $(this).toggleClass("show");
  });



});
