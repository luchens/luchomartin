  
  $(".modal-galeria-imagenes .btn-close").on("click", function(e){
    e.preventDefault();
    $(".modal-galeria-imagenes").removeClass("show");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
    $("body").removeClass("no-scroll-y");
  });
  

  function initSliderModalGaleriaImagen(){
    $(".modal-galeria-imagenes").addClass("show");
    $("body").addClass("no-scroll-y");

    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  
    $(".modal-galeria-imagenes .slick-slider-holder .slick-slider").slick({
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
  
  $(".modal-galeria-imagenes .slick-slider-holder .slick-slider").on('init', function(event, slick){
    var slickActual = "";
    if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
    } else { slickActual = (slick.currentSlide+1); }
    var slickTotal = slick.slideCount;
    if(slickTotal < 9){slickTotal = "0"+slickTotal};
  
    $(".modal-galeria-imagenes .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".modal-galeria-imagenes .slick-slider-holder .slick-contador .slick-total").html(slickTotal);
  });
  
  $(".modal-galeria-imagenes .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slickActual = "";
    if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
    } else { slickActual = (nextSlide+1); }
    $(".modal-galeria-imagenes .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    $(".modal-galeria-imagenes .slick-slider-holder .texto").html($(this).find(".slick-slide").not(".slick-cloned").eq(slickActual-1).children('.item').data('caption'));
  
  });


    //MODAL BASICA
    $(".js-open-modal").on("click", function(e){
      e.preventDefault();
      var id = $(this).attr("id");
  
      console.log(id);
  
      $('body').css('overflow','hidden');
  
  //    if($(this).parents('.section-modal').find(".js-general-modal").attr('data-id') == id) {
  //      console.log("entro");
        $(this).parents('.section-modal').find("[data-id='" + id + "']").addClass("show");
  //    }
    });
  
    $(".btn-close").on("click", function(e){
      e.preventDefault();
      $(this).parents(".general_modal").removeClass("show");
      $('body').css('overflow','initial');
    });