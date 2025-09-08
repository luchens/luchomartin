$(function() {
  $(".c13__container .nav-container .nav li a").on("click", function(e){
    e.preventDefault();

    $(".c13__container .nav-container .nav li a").removeClass("activeitem");
    $(this).addClass("activeitem");

    const id = $(this).attr("id");

    /*$(".c13__container .contents .layer").removeClass("show-o");

    setTimeout(function(){
      $(".c13__container .contents .layer").removeClass("show");

      setTimeout(function(){
        $(".c13__container .contents .layer").addClass("show");

        setTimeout(function(){
          $(".c13__container .contents .layer").addClass("show-o");

          $(".c13__container .contents .content").removeClass("show");
          $(".c13__container .contents #"+id+".content").addClass("show");
        }, 400);
      }, 0);
    }, 400);*/

    $(".c13__container .contents .layer").addClass("show");
    $(".c13__container .contents .layer").addClass("show-o");

    setTimeout(function(){
      $(".c13__container .contents .content").removeClass("show");
      $(".c13__container .contents #"+id+".content").addClass("show");

      $(".c13__container .contents .layer").removeClass("show-o"); 

      $(".btn-leer.mas").each(function(i, obj) {
        if ($(window).width()>480)
        {
          if ($(this).parent().find(".contenido_crop .contenido").height() < 175)
          {$(this).hide()}
          else
          {$(this).show()}
        } 
        if ($(window).width()<480)
        {
          if ($(this).parent().find(".contenido_crop .contenido").height() < 165)
          {$(this).hide()}
          else
          {$(this).show()}
        } 
      });

      setTimeout(function(){
        $(".c13__container .contents .layer").removeClass("show");
      }, 1000);
    }, 0);
  

    /*var id = $(this).attr("id");
    $(".c13__container .contents .content").removeClass("show");
    $(".c13__container .contents #"+id+".content").addClass("show");
    */
  });
});
