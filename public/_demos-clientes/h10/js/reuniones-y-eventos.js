$(function() {

  $('.reuniones-y-eventos .text-center .btn-ver-mas').on("click", function(e){
    $(".reuniones-y-eventos .items-holder").toggleClass("show");
    e.preventDefault();
  });

  $('.reuniones-y-eventos .form-holder-avanzado .input.negocios').on("click", function(e){
    $(".reuniones-y-eventos .form-holder-avanzado .show-open-negocios-holder").addClass("open");
    e.preventDefault();
  });

  $('.reuniones-y-eventos .form-holder-avanzado .input.hotel').on("click", function(e){
    $(".reuniones-y-eventos .form-holder-avanzado .show-open-hotel-destino-2-holder").addClass("open");
    $(".reuniones-y-eventos .form-holder-avanzado .show-open-negocios-holder").removeClass("open");
    e.preventDefault();
  });

  $('.reuniones-y-eventos .form-holder-avanzado .input.hotel').keyup(function() {
    if ($(this).val().length > 0) {
      $(".reuniones-y-eventos .form-holder-avanzado .show-open-hotel-destino-2-holder").removeClass("open");
      $(this).addClass("show-open-hotel-destino");
    } else {
      $(".reuniones-y-eventos .form-holder-avanzado .show-open-hotel-destino-2-holder").addClass("open");
      $(this).removeClass("show-open-hotel-destino");
    }
  });

  $('.reuniones-y-eventos .form-holder-avanzado .input.asistentes').on("click", function(e){
    $(".reuniones-y-eventos .form-holder-avanzado .show-open-negocios-holder").removeClass("open");
    e.preventDefault();
  });

  $(".reuniones-y-eventos .form-holder-avanzado .show-open-hotel-destino-2-holder .close").on("click", function(e){
    e.preventDefault();
    $(".reuniones-y-eventos .form-holder-avanzado .show-open-hotel-destino-2-holder").removeClass("open");
  });

  $(".show-open-hotel-destino-holder").mouseleave(function(){
    $(".reuniones-y-eventos .form-holder-avanzado .input").removeClass("show-open-hotel-destino");
  });

  $(".show-open-negocios-holder").mouseleave(function(){
    $(".reuniones-y-eventos .form-holder-avanzado .show-open-negocios-holder").removeClass("open");
  });

  $(".reuniones-y-eventos .form-holder-avanzado .input:not(.hotel)").on("click", function(e){
    e.preventDefault();
    $(".reuniones-y-eventos .form-holder-avanzado input.input.hotel").removeClass("show-open-hotel-destino");
    $(".reuniones-y-eventos .form-holder-avanzado .show-open-hotel-destino-2-holder").removeClass("open");
  });

  $(".reuniones-y-eventos .text-top .col-right .total").html($(".reuniones-y-eventos .items-holder .item").length);
  $(".reuniones-y-eventos .items-holder .item .col-right .btn-seleccionar").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().toggleClass("selected");
    $(".reuniones-y-eventos .text-top .col-right .nro").html($(".reuniones-y-eventos .items-holder .item.selected").length);
  });

  $(".reuniones-y-eventos .modal-mas-informacion .modal-body .btn-close").on("click", function(e){
    e.preventDefault();
    $(".reuniones-y-eventos .modal-mas-informacion").removeClass("show");
    $("body").removeClass("no-scroll-y");
    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
  });

  $(".reuniones-y-eventos .items-holder .item .col-right .btn-mas").on("click", function(e){
    e.preventDefault();
    $(".reuniones-y-eventos .modal-mas-informacion").addClass("show");
    initSliderMasInformacion();
    $("body").removeClass("no-scroll-y");
    localStorage.setItem('scroll-y', $(window).scrollTop());
    $('html, body').animate( { scrollTop : 0 }, 0 );
  });

  $(".reuniones-y-eventos .accordions .accordion").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("open");

    $('input[name="datepicker-from"]').daterangepicker({
      parentEl: ".datepicker-holder.from",
      singleDatePicker: true,
      autoApply: true,
      locale: {
        format: 'DD/MM/YYYY'
      }
    }, function(start, end, label) {
      //var years = moment().diff(start, 'years');
      //alert("You are " + years + " years old!");
      //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });

    $('input[name="datepicker-to"]').daterangepicker({
      parentEl: ".datepicker-holder.to",
      singleDatePicker: true,
      autoApply: true,
      locale: {
        format: 'DD/MM/YYYY'
      }
    }, function(start, end, label) {
      //var years = moment().diff(start, 'years');
      //alert("You are " + years + " years old!");
      //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
  });
});

function initSliderMasInformacion(){
  if(!$(".reuniones-y-eventos .modal-mas-informacion .slider-holder .slick-slider-holder .slick-slider").hasClass('slick-initialized')){
    $(".reuniones-y-eventos .modal-mas-informacion .slider-holder .slick-slider-holder .slick-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
      var slickActual = "";
      if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
      } else { slickActual = (slick.currentSlide+1); }
      $(".reuniones-y-eventos .modal-mas-informacion .slider-holder .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");


      var caption = $(this).find(".slick-active").children().attr("data-caption");
      $(".reuniones-y-eventos .modal-mas-informacion .modal-body .slider-holder .slick-slider-holder .slick-contador-holder .texto").html(caption);
    });
    $(".reuniones-y-eventos .modal-mas-informacion .slider-holder .slick-slider-holder .slick-slider").on('init', function(event, slick, currentSlide, nextSlide){
      var slickActual = "";
      if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
      } else { slickActual = (slick.currentSlide+1); }
      $(".reuniones-y-eventos .modal-mas-informacion .slider-holder .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
      $(".reuniones-y-eventos .modal-mas-informacion .slider-holder .slick-slider-holder .slick-contador .slick-total").html("0"+slick.slideCount);
      var caption = $(this).find(".slick-active").children().attr("data-caption");
      $(".reuniones-y-eventos .modal-mas-informacion .modal-body .slider-holder .slick-slider-holder .slick-contador-holder .texto").html(caption);
    });

    $('[data-slick-index="0"]').addClass('slick-now');

    $(".reuniones-y-eventos .modal-mas-informacion .slider-holder .slick-slider-holder .slick-slider").slick({
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

  if(!$(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-slider").hasClass('slick-initialized')){
    $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var p = Math.floor(((nextSlide+1) / slick.slideCount) * 100);
      $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-contador .linea-holder .linea").css( "width", p+"%");

      var slickActual = "";
      if(nextSlide < 9){ slickActual = "0"+(nextSlide+1);
      } else { slickActual = (nextSlide+1); }
      $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
    });
    $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-slider").on('init', function(event, slick){
      var p = Math.floor(((slick.currentSlide+1) / slick.slideCount) * 100);
      $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-contador .linea-holder .linea").css( "width", p+"%");

      var slickActual = "";
      if(slick.currentSlide < 9){ slickActual = "0"+(slick.currentSlide+1);
      } else { slickActual = (slick.currentSlide+1); }
      $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-contador .slick-actual").html(slickActual+"/ ");
      $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-contador .slick-total").html("0"+slick.slideCount);
    });
    $(".reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-slider").slick({
      arrows: false,
      cssEase: 'ease',
      easing: 'easing',
      infinite: true,
      responsive: [{
        breakpoint: 739,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1
        }
      },{
        breakpoint: 1024,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 2
        }
      }],
      slidesPerRow: 1,
      slidesToShow: 4,
      speed: 800,
      waitForAnimate: true,
      dragging: true
    });

    $(".reuniones-y-eventos .modal-mas-informacion .modal-body .slider-thumbs .slick-slider-holder .slick-contador .slick-prev-next-holder .slick-prev").on("click",function(e){
      e.preventDefault();
      $('.reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-slider').slick('slickPrev');
    });
    $(".reuniones-y-eventos .modal-mas-informacion .modal-body .slider-thumbs .slick-slider-holder .slick-contador .slick-prev-next-holder .slick-next").on("click",function(e){
      e.preventDefault();
      $('.reuniones-y-eventos .modal-mas-informacion .slider-thumbs .slick-slider-holder .slick-slider').slick('slickNext');
    });
  }
}
