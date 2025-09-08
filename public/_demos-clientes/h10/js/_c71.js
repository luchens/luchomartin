$(function () {

  $(".filters .icon").on("click", function(e){
    e.preventDefault();
    $(this).closest('.label').remove();
  });

  $(".c71__container .list .subtitulo").on("click", function(e) {
    e.preventDefault();
    $(this).parent().toggleClass("show");
  });

});
