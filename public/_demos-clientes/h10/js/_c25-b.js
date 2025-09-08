$(function() {
  $(".c25-b__container .items .item .data .text-stars .btn-ver-mas").on("click", function(e){
    e.preventDefault();
    $(this).parent().find(".collapsed").toggleClass("show");
  });
});
