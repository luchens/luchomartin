jQuery(document).ready(function(){

  /* .custom-select */

  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

  /* ---------------------------------------------------------------------------------------------------------*/

  $(".navbar-lateral .container .holder .btns-link-desplegables .btn-link").on("click", function(e){
    e.preventDefault();
    $(".navbar-lateral .container .holder .btns-link-desplegables .btn-link").removeClass("activo");
    $(this).addClass("activo");
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  var slider_ficha_detalle = $(".slider-ficha-detalle .slick-slider").slick({
    //accessibility: true,
    //adaptiveHeight: false,
    //appendArrows: $("element"),
    //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
    arrows: true,
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
    dots: true,
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
        autoplay: false,
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

  $('.btns-slider-ficha-detalle .btn-prev').on("click", function(e){
    e.preventDefault();
    slider_ficha_detalle.slick('slickPrev');
  });

  $('.btns-slider-ficha-detalle .btn-next').on("click", function(e){
    e.preventDefault();
    slider_ficha_detalle.slick('slickNext');
  });

  /* ---------------------------------------------------------------------------------------------------------*/


  if($(window).width() <= 991){
    var slider_revistas_infantiles = $(".slider-revistas-infantiles .slick-slider").slick({
      //accessibility: true,
      //adaptiveHeight: false,
      //appendArrows: $("element"),
      //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
      arrows: true,
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
      dots: true,
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
          autoplay: false,
          autoplaySpeed: 4000
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

    $('.btns-slider-revistas-infantiles .btn-prev').on("click", function(e){
      e.preventDefault();
      slider_revistas_infantiles.slick('slickPrev');
    });

    $('.btns-slider-revistas-infantiles .btn-next').on("click", function(e){
      e.preventDefault();
      slider_revistas_infantiles.slick('slickNext');
    });
  }

  /* ---------------------------------------------------------------------------------------------------------*/

  if($(window).width() <= 991){
    var slider_mas_ninos = $(".slider-mas-ninos .slick-slider").slick({
      //accessibility: true,
      //adaptiveHeight: true,
      //appendArrows: $("element"),
      //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
      arrows: true,
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
      dots: true,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 768,
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

    $('.btns-slider-mas-ninos .btn-prev').on("click", function(e){
      e.preventDefault();
      slider_mas_ninos.slick('slickPrev');
    });

    $('.btns-slider-mas-ninos .btn-next').on("click", function(e){
      e.preventDefault();
      slider_mas_ninos.slick('slickNext');
    });
  }

  /* ---------------------------------------------------------------------------------------------------------*/

  if($(window).width() <= 991){
    var slider_bayard_juntos = $(".slider-bayard-juntos .slick-slider").slick({
      //accessibility: true,
      //adaptiveHeight: true,
      //appendArrows: $("element"),
      //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
      arrows: true,
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
      dots: true,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 768,
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

    $('.btns-slider-bayard-juntos .btn-prev').on("click", function(e){
      e.preventDefault();
      slider_bayard_juntos.slick('slickPrev');
    });

    $('.btns-slider-bayard-juntos .btn-next').on("click", function(e){
      e.preventDefault();
      slider_bayard_juntos.slick('slickNext');
    });
  }

  /* ---------------------------------------------------------------------------------------------------------*/

  if($(window).width() <= 991){
    var slider_elige_la_mejor = $(".slider-elige-la-mejor .slick-slider").slick({
      //accessibility: true,
      //adaptiveHeight: true,
      //appendArrows: $("element"),
      //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
      arrows: true,
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
      dots: true,
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
          autoplay: false,
          autoplaySpeed: 4000
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

    $('.btns-slider-elige-la-mejor .btn-prev').on("click", function(e){
      e.preventDefault();
      slider_elige_la_mejor.slick('slickPrev');
    });

    $('.btns-slider-elige-la-mejor .btn-next').on("click", function(e){
      e.preventDefault();
      slider_elige_la_mejor.slick('slickNext');
    });
  }

  /* ---------------------------------------------------------------------------------------------------------*/

  var slider_nuestras_revistas = $(".slider-nuestras-revistas .slick-slider").slick({
    //accessibility: true,
    //adaptiveHeight: false,
    //appendArrows: $("element"),
    //appendDots: $('.cabecera-slider .sliderParent .appendDots'),
    arrows: true,
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
    dots: true,
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
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
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

  $('.btns-slider-nuestras-revistas .btn-prev').on("click", function(e){
    e.preventDefault();
    slider_nuestras_revistas.slick('slickPrev');
  });

  $('.btns-slider-nuestras-revistas .btn-next').on("click", function(e){
    e.preventDefault();
    slider_nuestras_revistas.slick('slickNext');
  });

  /* ---------------------------------------------------------------------------------------------------------*/

  /*$('.navbar .menu-content .navbar-toggler').on("click", function(e){
    e.preventDefault();
    $('body').toggleClass("open-menu");
    $('html').toggleClass("no-scroll");

    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-equipo").removeClass("activo");
    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-actualidad").removeClass("activo");
  });*/

  /* ---------------------------------------------------------------------------------------------------------*/

  $('.navbar .menu-top .row .col .btn-menu').on("click", function(e){
    e.preventDefault();
    $('.navbar-lateral').addClass("open");
  });

  $('.navbar-lateral .container .holder .btn-cerrar').on("click", function(e){
    e.preventDefault();
    $('.navbar-lateral').removeClass("open");
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

  /*window.addEventListener('resize', () => {
    $(".navbar .menu-content .navbar-collapse").removeClass("show");
    $(".navbar .menu-content .navbar-toggler").attr("aria-expanded", "false");
    $(".navbar .menu-content .navbar-toggler").removeClass("collapsed").addClass("collapsed");
    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-equipo").removeClass("activo");
    $(".navbar .menu-content .navbar-collapse .navbar-nav-mobile .holder-actualidad").removeClass("activo");
    $('html').removeClass("no-scroll");
  });*/

});

/* ------------------------------------------------------------------------------------------ */

/*function countUp(){
  setTimeout(() => {
    $('.counter').each(function() {
      var $this = $(this);
      var countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).animate({
        countNum: countTo
      }, {
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
  }, 200);
}*/

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

let isInViewport = 0;

/*$(window).on('resize scroll', function() {
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
});*/

//$(window).resize();

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
