$(function() {

  $(".c62__container .tabs-holder .tabs li.btn-mas a").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().toggleClass("show");
  });

  $(".c2-c3__container .tabs-holder .tabs li.btn-mas a").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().toggleClass("show");
  });

});
