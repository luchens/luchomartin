$(function() {

  $(".c51-02__container.modal-galeria .video-holder .ico-play").each(function() {
    var video = $(this).parent().find("video").get(0);

    $(this).on("click", function(){
      if (video.paused) {
        video.play();
        $(this).css('opacity', '0');
      } else {
        video.pause();
        $(this).css('opacity', '1');
      }
    });
  });

  $(".c51-02__container.videos-holder .e-click").on("click", function(e){
    e.preventDefault();

    $(".c51-02__container.modal-galeria.video").addClass("show");
    $("body").addClass("no-scroll-y");


    if(!$(".c51-02__container .slick-slider-holder.video .slick-slider").hasClass("slick-initialized")){
      initSlider_c51Video();
    }

    var id = $(this).attr("id").split('-');

    $(".c51-02__container .slick-slider-holder.video .slick-slider").slick('slickGoTo', id[1]);
  });

  $(".c51-02__container.images-holder .e-click").on("click", function(e){
    e.preventDefault();

    $(".c51-02__container.modal-galeria.imagenes").addClass("show");
    $("body").addClass("no-scroll-y");


    if(!$(".c51-02__container .slick-slider-holder.imagenes .slick-slider").hasClass("slick-initialized")){
      initSlider_c51Imagenes();
    }

    var id = $(this).attr("id").split('-');

    $(".c51-02__container .slick-slider-holder.imagenes .slick-slider").slick('slickGoTo', id[1]);
  });

  $(".c51-02__container .btn-ver.video").on("click", function(e){
    e.preventDefault();
    $(".c51-02__container.modal-galeria.video").addClass("show");
    $("body").addClass("no-scroll-y");


    if(!$(".c51-02__container .slick-slider-holder.video .slick-slider").hasClass("slick-initialized")){
      initSlider_c51Video();
    }
  });


  $(".c51-02__container .btn-ver-mas").on("click", function(e){
    e.preventDefault();

    $(this).parent().parent().addClass("show");

    //$(this).css('display','none');
    //$(this).parent().siblings('.hidden-ver-mas').css('display','block');
  });

  $(".c51-02__container .btn-ver-mas-holder .btn-ver-menos").on("click", function(e){
    e.preventDefault();

    $(this).parent().parent().parent().removeClass("show");

    //$(this).parent().parent().siblings('.btn-ver-mas-holder').children('.btn-ver-mas').css('display','block');
    //$(this).parent().parent().css('display','none');

    $([document.documentElement, document.body]).animate({
      scrollTop: $(this).closest("section").offset().top-300
  }, 500);

  });



  $(".c51-02__container .slick-slider-holder.video .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(".c51-02__container .slick-slider-holder.video .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c51-02__container .slick-slider-holder .texto").html($(this).find(".slick-slide").not(".slick-cloned").eq(slickActual-1).children('.item').data('caption'));
  });
  $(".c51-02__container .slick-slider-holder.video .slick-slider").on('init', function(event, slick){
    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }
    var slickTotal = slick.slideCount;
    if(slickTotal < 9){slickTotal = "0"+slickTotal};


    $(".c51-02__container .slick-slider-holder.video .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c51-02__container .slick-slider-holder.video .slick-contador .slick-total").html(slickTotal);
  });

  $(".c51-02__container.modal-galeria.video .btn-close").on("click", function(e){
    e.preventDefault();
    //$(".c51-02__container .slick-slider-holder .slick-slider").slick('unslick');
    $(".c51-02__container.modal-galeria.video").removeClass("show");
    $("body").removeClass("no-scroll-y");

  });

  $(".c51-02__container .slick-slider-holder.imagenes .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(".c51-02__container .slick-slider-holder.imagenes .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c51-02__container .slick-slider-holder .texto").html($(this).find(".slick-slide").not(".slick-cloned").eq(slickActual-1).children('.item').data('caption'));

  });
  $(".c51-02__container .slick-slider-holder.imagenes .slick-slider").on('init', function(event, slick){
    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }
    var slickTotal = slick.slideCount;
    if(slickTotal < 9){slickTotal = "0"+slickTotal};

    $(".c51-02__container .slick-slider-holder.imagenes .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".c51-02__container .slick-slider-holder.imagenes .slick-contador .slick-total").html(slickTotal);
  });

  $(".c51-02__container.modal-galeria.imagenes .btn-close").on("click", function(e){
    e.preventDefault();
    //$(".c51-02__container .slick-slider-holder .slick-slider").slick('unslick');
    $(".c51-02__container.modal-galeria.imagenes").removeClass("show");
    $("body").removeClass("no-scroll-y");

  });
});

function initSlider_c51Video(){
  $(".c51-02__container .slick-slider-holder.video .slick-slider").slick({
    arrows: true,
    cssEase: 'ease',
    easing: 'easing',
    infinite: true,
    /*responsive: [{
      breakpoint: 480,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 1
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 3
      }
    }],*/
    slidesPerRow: 1,
    slidesToShow: 1,
    speed: 800,
    waitForAnimate: true,
    dragging: true
  });
}

function initSlider_c51Imagenes(){
  $(".c51-02__container .slick-slider-holder.imagenes .slick-slider").slick({
    arrows: true,
    cssEase: 'ease',
    easing: 'easing',
    infinite: true,
    /*responsive: [{
      breakpoint: 480,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 1
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 3
      }
    }],*/
    slidesPerRow: 1,
    slidesToShow: 1,
    speed: 800,
    waitForAnimate: true,
    dragging: true
  });
}
