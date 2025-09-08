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

  $(".modulo-20 .logos .logo").on("mouseover", function() {
    $(".modulo-20 .mapa img").removeClass("hover");
    var id = $(this).attr("id");
    var id_ = id.split("l");
    $(".modulo-20 .mapa img"+"#m"+id_[1]).addClass("hover");
  });

  $(".modulo-20 .logos .logo").on("mouseout", function() {
    $(".modulo-20 .mapa img").removeClass("hover");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".modulo-22 .menu a").on("click", function(e){
    e.preventDefault();
    $(".modulo-22 .menu a").removeClass("activo");
    $(".modulo-22 .categorias .categoria").removeClass("show");
    $(this).addClass("activo");
    var id = $(this).attr("href");
    $(".modulo-22 .categorias .categoria"+id).addClass("show");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".modulo-25 .confirmacion-ok .holder .btn-link").on("click", function(e){
    e.preventDefault();
    $(".modulo-25 .confirmacion-ok.show").removeClass("show");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".btn-link.open-modal").on("click", function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    $(".modals"+id).addClass("open");
    $('html').addClass("no-scroll");
  });

  $(".modals .holder .modal-head .btn-cerrar").on("click", function(e){
    e.preventDefault();
    $(".modals").removeClass("open");
    $('html').removeClass("no-scroll");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  if($(".slider-modulo-17").length){
    var slider_modulo_17 = $(".slider-modulo-17 .slick-slider").slick({
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

  if($(".slider-modulo-16").length){
    var slider_modulo_16 = $(".slider-modulo-16 .slick-slider").slick({
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

  if($(".slider-modulo-15").length){
    var slider_modulo_15 = $(".slider-modulo-15 .slick-slider").slick({
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

  if($(".slider-modulo-10").length){
    var slider_modulo_10 = $(".slider-modulo-10 .slick-slider").slick({
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

  if($(".slider-modulo-08").length){
    var slider_modulo_08 = $(".slider-modulo-08 .slick-slider").slick({
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

  if($(".slider-modulo-03").length){
    var slider_modulo_03 = $(".slider-modulo-03 .slick-slider").slick({
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

  /*$(".slider-publicaciones .slick-slider").on("init", function(event, slick){
    if(slick.slideCount <= 1){
      $('.btns-slider').addClass("disabled");
    }
  });*/

  var slider_publicaciones = $(".slider-publicaciones .slick-slider").slick({
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
    responsive: [{
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
    }],
    //rows: 1,
    //rtl: false,
    //slide: '',
    //slidesPerRow: 1,
    slidesToShow: 3,
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

  $('.btns-slider .btn-prev').on("click", function(e){
    e.preventDefault();
    //slider_publicaciones.slick('slickPrev');

    var id = $(this).parent().attr("id");
    var id_ = id.split("_");

    $("#slider_"+id_[2]+".slider-publicaciones .slick-slider").slick('slickPrev');
  });

  $('.btns-slider .btn-next').on("click", function(e){
    e.preventDefault();
    //slider_publicaciones.slick('slickNext');

    var id = $(this).parent().attr("id");
    var id_ = id.split("_");

    $("#slider_"+id_[2]+".slider-publicaciones .slick-slider").slick('slickNext');
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  /*$(".slider-premios .slick-slider").on("init", function(event, slick){
    if(slick.slideCount <= 1){
      $('.btns-slider').addClass("disabled");
    }
  });*/

  var slider_premios = $(".slider-premios .slick-slider").slick({
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
    responsive: [{
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
    }],
    //rows: 1,
    //rtl: false,
    //slide: '',
    //slidesPerRow: 1,
    slidesToShow: 3,
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

  $('.btns-slider .btn-prev').on("click", function(e){
    e.preventDefault();
    var id = $(this).parent().attr("id");
    var id_ = id.split("_");
    $("#slider_"+id_[2]+".slider-premios .slick-slider").slick('slickPrev');
  });

  $('.btns-slider .btn-next').on("click", function(e){
    e.preventDefault();
    var id = $(this).parent().attr("id");
    var id_ = id.split("_");
    $("#slider_"+id_[2]+".slider-premios .slick-slider").slick('slickNext');
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  var slider_logos = $(".slider-logos .slick-slider").slick({
    //accessibility: true,
    //adaptiveHeight: false,
    //appendArrows: $("element"),
    //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
    arrows: false,
    //asNavFor: null,
    //prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    //nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    autoplay: true,
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
    pauseOnHover: false,
    pauseOnFocus: false,
    //pauseOnDotsHover: false,
    //respondTo: 'window',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      }
    },{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }],
    //rows: 1,
    //rtl: false,
    //slide: '',
    //slidesPerRow: 1,
    slidesToShow: 5,
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
    waitForAnimate: false,
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

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".slider-testimonios .slick-slider").on("init", function(event, slick){
    if(slick.slideCount <= 1){
      $('.slider-publicaciones .btns-slider').addClass("disabled");
    }
  });

  var slider_testimonios = $(".slider-testimonios .slick-slider").slick({
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
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
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

  $('.btns-slider-testimonios .btn-prev').on("click", function(e){
    e.preventDefault();
    slider_testimonios.slick('slickPrev');
  });

  $('.btns-slider-testimonios .btn-next').on("click", function(e){
    e.preventDefault();
    slider_testimonios.slick('slickNext');
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  $('.navbar .menu-content .navbar-toggler').on("click", function(e){
    e.preventDefault();
    $('body').toggleClass("open-menu");
    $('html').toggleClass("no-scroll");

    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-equipo").removeClass("activo");
    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-actualidad").removeClass("activo");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  jQuery(window).scroll(function() {
    stateScrollTop();
  });

  stateScrollTop();

  /* ---------------------------------------------------------------------------------------------------------*/

  /*$(window).resize(function() {
    $(".navbar .menu-content .navbar-collapse").removeClass("show");
    $(".navbar .menu-content .navbar-toggler").attr("aria-expanded", "false");
    $(".navbar .menu-content .navbar-toggler").removeClass("collapsed").addClass("collapsed");
  });*/

  window.addEventListener('resize', () => {
    $(".navbar .menu-content .navbar-collapse").removeClass("show");
    $(".navbar .menu-content .navbar-toggler").attr("aria-expanded", "false");
    $(".navbar .menu-content .navbar-toggler").removeClass("collapsed").addClass("collapsed");
    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-equipo").removeClass("activo");
    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-actualidad").removeClass("activo");
    $('html').removeClass("no-scroll");
  });

});

/* ------------------------------------------------------------------------------------------ */

function countUp(){
  setTimeout(() => {
    $('.counter').each(function() {
      let $this = $(this);
      let countTo = $this.attr('data-count');
      let plus = $this.attr('data-plus');
      let cero;
      let k = $this.attr('data-k');
      let m = $this.attr('data-m');
      let float = $this.attr('data-float');
      let porcentaje = $this.attr('data-p');
      let number = parseInt($this.text(), 10);

      if(plus == "true"){
        plus = "+";
      } else {
        plus = "";
      }

      if(k == "true"){
        k = "k";
      } else {
        k = "";
      }

      if(m == "true"){
        m = "M";
      } else {
        m = "";
      }

      if(float == "true"){
        cero = "0";
      } else {
        cero = "";
      }

      if(porcentaje == "true"){
        porcentaje = "%";
      } else {
        porcentaje = "";
      }

      $({ countNum: number }).animate({
        countNum: countTo
      }, {
        duration: 1000,
        easing:'linear',
        step: function() {
          var n = Math.floor(this.countNum);
          $this.text(cero+""+Number(n)+""+k+""+m+""+plus+""+porcentaje);
        },
        complete: function() {
          var n = Math.floor(this.countNum);
          $this.text(cero+""+Number(n)+""+k+""+m+""+plus+""+porcentaje);
        }
      });
    });
  }, 200);
}

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

let isInViewport = 0;

$(window).on('resize scroll', function() {
  $('.counter').each(function() {
    //var activeColor = $(this).attr('id');
    if ($(this).isInViewport()) {
      if(isInViewport == 0){
        countUp();
      }
      isInViewport = 1;
      //$('#fixed-' + activeColor).addClass(activeColor + '-active');
    } else {
      isInViewport = 0;
      //$('#fixed-' + activeColor).removeClass(activeColor + '-active');
    }
  });
});

$(window).resize();

/* ------------------------------------------------------------------------------------------ */

var lastScrollTop = 0;

function stateScrollTop(){
  var distance = jQuery('.navbar').outerHeight();

  if($(".navbar .menu-content .navbar-collapse").hasClass("show")){
    $(".navbar .menu-content .navbar-collapse").removeClass("show");
    $(".navbar .menu-content .navbar-toggler").attr("aria-expanded", "false");
    $(".navbar .menu-content .navbar-toggler").removeClass("collapsed").addClass("collapsed");
  }

  if(jQuery(".cabecera").length){
    if (jQuery(this).scrollTop() >= (jQuery(".cabecera").outerHeight()-jQuery(".navbar").outerHeight())) {
      jQuery('.navbar').addClass("scrolling");
    } else {
      jQuery('.navbar').removeClass("scrolling");
    }
  } else {
    if (jQuery(this).scrollTop() > 0) {
      jQuery('.navbar').addClass("scrolling");
    } else {
      jQuery('.navbar').removeClass("scrolling");
    }
  }



  /*if (jQuery(this).scrollTop() >= distance) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      jQuery('.navbar').css({ top: -(jQuery(".navbar").outerHeight())+"px" });
    } else {
      jQuery('.navbar').css({ top: 0 });
    }
    lastScrollTop = st;
  } else {
  }*/
}
