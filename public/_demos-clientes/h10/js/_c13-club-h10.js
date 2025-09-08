$(function() {
  $(".c13__container .nav-container .nav li a").on("click", function(e){
    e.preventDefault();

    $(".c13__container .nav-container .nav li a").removeClass("activo");
    $(this).addClass("activo");

    if($(this).attr("href") == "#c_beneficios"){
      $('html, body').animate( { scrollTop : $($(this).attr("href")).offset().top }, 600 );
    } else {
      var offset;

      if ($(window).width() > 1024) {
        offset = 150;
      } else {
        offset = 60;
      }

      $('html, body').animate( { scrollTop : ($($(this).attr("href")).offset().top-offset) }, 600 );
    }

  });
});
