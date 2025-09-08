jQuery(document).ready(function(){

  $(".video-player").on("click", function(e){
    e.preventDefault();
    var video = $(this).find("video").get(0);
    if ( video.paused ) {
      video.play();
      $(this).addClass("isPlay");
    } else {
      video.pause();
      $(this).removeClass("isPlay");
    }
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".navbar .navbar-nav .col-right .buscador .btn-buscar .icon").on("click", function(e){
    e.preventDefault();
    $(".navbar .navbar-nav .col-right .buscador").addClass("show");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".modulo-13 .confirmacion-ok .holder .btn-link").on("click", function(e){
    e.preventDefault();
    $(".modulo-13 .confirmacion-ok.show").removeClass("show");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".modulo-14 .confirmacion-ok .holder .btn-link").on("click", function(e){
    e.preventDefault();
    $(".modulo-14 .confirmacion-ok.show").removeClass("show");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".modulo-15 .confirmacion-ok .holder .btn-link").on("click", function(e){
    e.preventDefault();
    $(".modulo-15 .confirmacion-ok.show").removeClass("show");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".modulo-14 .form-check-input").on("click", function(e){
    if($(this).is(':checked')){
      $(".modulo-14 .btn-enviar").attr("disabled", false);
    } else {
      $(".modulo-14 .btn-enviar").attr("disabled", true);
    }
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".modulo-15 .form-check-input").on("click", function(e){
    if($(this).is(':checked')){
      $(".modulo-15 .btn-enviar").attr("disabled", false);
    } else {
      $(".modulo-15 .btn-enviar").attr("disabled", true);
    }
  });

  /* ---------------------------------------------------------------------------------------------------------*/
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated')
      }, false)
    })
  })();

  /* ---------------------------------------------------------------------------------------------------------*/

  if($(".slider-modulo-02").length){
    var slider_modulo_02 = $(".slider-modulo-02 .slick-slider");

    slider_modulo_02.on('init', function (event, slick) {
      $(".modulo-02 .mobile .slider-modulo-02 .slick-slider .slick-list .slick-track .slick-slide .holder").on("click", function(e){
        e.preventDefault();
        $(".modulo-02 .mobile .slider-modulo-02 .slick-slider .slick-list .slick-track .slick-slide .holder").removeClass("show");
        $(".modulo-02 .mobile .slider-modulo-02 .slick-slider .slick-list .slick-track .slick-slide .btn-cerrar").removeClass("show");
        $(this).addClass("show");
        $(this).prev(".btn-cerrar").addClass("show");
      });

      $(".modulo-02 .mobile .slider-modulo-02 .slick-slider .slick-list .slick-track .slick-slide .btn-cerrar").on("click", function(e){
        e.preventDefault();
        $(".modulo-02 .mobile .slider-modulo-02 .slick-slider .slick-list .slick-track .slick-slide .holder").removeClass("show");
        $(".modulo-02 .mobile .slider-modulo-02 .slick-slider .slick-list .slick-track .slick-slide .btn-cerrar").removeClass("show");
      });
    });

    slider_modulo_02.slick({
      //accessibility: true,
      //adaptiveHeight: false,
      //appendArrows: $("element"),
      //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
      arrows: false,
      //asNavFor: null,
      //prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      //nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      autoplay: false,
      autoplaySpeed: 3000,
      //centerMode: true,
      //centerPadding: '0px',
      cssEase: 'ease-in-out',
      /*customPaging: function(slider, i) {
          return $('<button type="button" />').text(i + 1);
      },*/
      dots: false,
      //dotsClass: 'slick-dots',
      draggable: true,
      easing: 'easing',
      //edgeFriction: 0.35,
      //fade: true,
      //focusOnSelect: true,
      //focusOnChange: true,
      infinite: true,
      //initialSlide: 0,
      lazyLoad: 'ondemand',
      //mobileFirst: false,
      //pauseOnHover: true,
      //pauseOnFocus: true,
      //pauseOnDotsHover: false,
      //respondTo: 'window',
      /*responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }],*/
      //rows: 1,
      //rtl: false,
      //slide: '',
      //slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      //swipe: true,
      //swipeToSlide: false,
      //touchMove: true,
      //touchThreshold: 5,
      //useCSS: true,
      //useTransform: true,
      //variableWidth: false,
      //vertical: false,
      //verticalSwiping: false,
      waitForAnimate: true,
      //zIndex: 1000,
      //animating: true,
      dragging: true,
      //autoPlayTimer: null,
      //currentDirection: 0,
      //currentLeft: null,
      //currentSlide: 0,
      //direction: 1,
      //$dots: null,
      //listWidth: null,
      //listHeight: null,
      //loadIndex: 0,
      //$prevArrow: null,
      //$nextArrow: null,
      //scrolling: false,
      //slideCount: null,
      //slideWidth: null,
      //$slideTrack: null,
      //$slides: null,
      //sliding: false,
      //slideOffset: 0,
      //swipeLeft: null,
      //swiping: false,
      //$list: null,
      //touchObject: {},
      //transformsEnabled: false,
      //unslicked: true
    });
  }

  /* ---------------------------------------------------------------------------------------------------------*/

  if($(".slider-modulo-05").length){
    var slider_modulo_05 = $(".slider-modulo-05 .slick-slider");

    slider_modulo_05.slick({
      //accessibility: true,
      //adaptiveHeight: false,
      //appendArrows: $("element"),
      //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
      arrows: false,
      //asNavFor: null,
      //prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      //nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      autoplay: false,
      autoplaySpeed: 3000,
      //centerMode: true,
      //centerPadding: '0px',
      cssEase: 'ease-in-out',
      /*customPaging: function(slider, i) {
          return $('<button type="button" />').text(i + 1);
      },*/
      dots: false,
      //dotsClass: 'slick-dots',
      draggable: true,
      easing: 'easing',
      //edgeFriction: 0.35,
      //fade: true,
      //focusOnSelect: true,
      //focusOnChange: true,
      infinite: true,
      //initialSlide: 0,
      lazyLoad: 'ondemand',
      //mobileFirst: false,
      //pauseOnHover: true,
      //pauseOnFocus: true,
      //pauseOnDotsHover: false,
      //respondTo: 'window',
      /*responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }],*/
      //rows: 1,
      //rtl: false,
      //slide: '',
      //slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      //swipe: true,
      //swipeToSlide: false,
      //touchMove: true,
      //touchThreshold: 5,
      //useCSS: true,
      //useTransform: true,
      //variableWidth: false,
      //vertical: false,
      //verticalSwiping: false,
      waitForAnimate: true,
      //zIndex: 1000,
      //animating: true,
      dragging: true,
      //autoPlayTimer: null,
      //currentDirection: 0,
      //currentLeft: null,
      //currentSlide: 0,
      //direction: 1,
      //$dots: null,
      //listWidth: null,
      //listHeight: null,
      //loadIndex: 0,
      //$prevArrow: null,
      //$nextArrow: null,
      //scrolling: false,
      //slideCount: null,
      //slideWidth: null,
      //$slideTrack: null,
      //$slides: null,
      //sliding: false,
      //slideOffset: 0,
      //swipeLeft: null,
      //swiping: false,
      //$list: null,
      //touchObject: {},
      //transformsEnabled: false,
      //unslicked: true
    });
  }

  jQuery(window).scroll(function() {
    stateScrollTop();
  });

  stateScrollTop();

  let containingElement = document.querySelector('.buscador');

  $(window).on("click", function(event){
    if(!containingElement.contains(event.target)){
      $(".navbar .navbar-nav .col-right .buscador").removeClass("show");
    }
  });
});

/* ------------------------------------------------------------------------------------------ */

var lastScrollTop = 0;

function stateScrollTop(){
  var distance = jQuery('.navbar').outerHeight();

  if (jQuery(this).scrollTop() > 0) {
    jQuery('.navbar').addClass("scrolling");
  } else {
    jQuery('.navbar').removeClass("scrolling");
  }
}
