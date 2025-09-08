$(function() {

  $(".btn-leer.mas").each(function(i, obj) {
    console.log($(this).parent().find(".contenido_crop .contenido p").length);
    adjustCrop($(this));


    if ($(this).parent().find(".contenido_crop .contenido").height() < ($(this).parent().find(".contenido_crop").height()-5))
    {
      $(this).hide();
      $(this).parent().find(".contenido_crop").addClass('nodegrad');
    }
    else
    {
      $(this).show()
      $(this).parent().find(".contenido_crop").removeClass('nodegrad');
    }


/*    if ($(window).width()>480)
    {
      if ($(this).parent().find(".contenido_crop .contenido").height() < 175)
      {$(this).hide()}
      else
      {$(this).show()}
    }
    if ($(window).width()<480)
    {
      if ($(this).parent().find(".contenido_crop .contenido").height() < 225)
      {$(this).hide()}
      else
      {$(this).show()}
    } */
  });

  $(".btn-leer.mas").on("click", function(e){
    e.preventDefault();
    $(this).parent().addClass("show");
    $(this).parent().find(".contenido_crop").removeAttr("style");

  });

  $(".btn-leer.menos").on("click", function(e){
    e.preventDefault();
    $(this).parent().removeClass("show");

    adjustCrop($(this));

    $([document.documentElement, document.body]).animate({
      scrollTop: $(this).parent().offset().top - 200}, 100);
  });

  function adjustCrop(e){
    
    if ($(window).width()>1024)
    {
      if(e.parent().find(".contenido_crop .contenido p").length>1)
      {e.parent().find(".contenido_crop").addClass("large");}
    }
    if (($(window).width()>710) && ($(window).width()<1024))
    {
      if(e.parent().find(".contenido_crop .contenido p").length>1)
      {e.parent().find(".contenido_crop").css("max-height","173px");}
    }
    if (($(window).width()>480) && ($(window).width()<710))
    {
      if(e.parent().find(".contenido_crop .contenido p").length>1)
      {e.parent().find(".contenido_crop").addClass("large");}
    }
    if ($(window).width()<480)
    {
      if(e.parent().find(".contenido_crop .contenido p").length>1)
      {e.parent().find(".contenido_crop").addClass("xlarge");}
    }

  }
  





// LEGACY
  $(".texto_leer_mas .btn-leer.mas").on("click", function(e){
    e.preventDefault();
    $(this).closest(".texto_leer_mas").addClass("show");
  });

  $(".texto_leer_mas .btn-leer.menos").on("click", function(e){
    e.preventDefault();
    $(this).closest(".texto_leer_mas").removeClass("show");
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".texto_leer_mas").offset().top - 200}, 100);
  });

});
