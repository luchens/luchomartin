function onLoadPage(){
  jQuery("body").addClass("out");

  setTimeout(function(){
    jQuery("body").removeClass("out").removeClass("loading");
  }, 1000);
}

/*function playVideo(){
  "use strict";
  var video = $("#videoContainer iframe").attr('src');

  $("#videoContainer").toggleClass("d-none").addClass("show");
  $("#videoContainer iframe").attr('src', `${video}&autoplay=1`);
  //$("#videoContainer").html('<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/SkcRebG58K8?controls=0&autoplay=1&loop=1&rel=0&wmode=transparent" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
}*/

jQuery(document).ready(function(){
  onLoadPage();

  var hash = window.location.hash;
  if (hash) {
    hash = hash.replace('#','');
    hash = hash.replace(/([^a-z0-9]+)/gi, '-');
    hash = '#' + hash; // hash now equals #foo with example 1

    $('.navbar .menu-content .menu li a[href*="'+hash+'"]').addClass("activo");
    //$('.navbar .menu-content .menu li a[href*="'+hash+'"]').trigger("click");
    var scroll = new SmoothScroll('.navbar .menu-content .menu li a[href*="#'+hash+'"]');
  }

  $(".navbar .menu-content .menu li a").on("click", function(){
    $(".navbar .menu-content .menu li a").removeClass("activo");
    $(this).addClass("activo");
  });

  //$('video[data-yt2html5]').youtubeToHtml5();

  /*const controller = $('video[data-yt2html5]').youtubeToHtml5({
  	autoload: false
  });

  controller.addAction('load.failed', function(element, data) {
  	element.classList.add('is-unplayable');
  });

  controller.load();*/

  /*$(".video-layer").on("click", function(){
    playVideo();
  });*/

  /*var player = videojs('video-js', {
    autoplay: 'muted'
  });*/

  /* ---------------------------------------------------------------------------------------------------------*/

  /*$(".b-slider .slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var p = Math.floor(((nextSlide+1) / slick.slideCount) * 100);
    $(".los-desafios .b-slider .progress-bar .bar").css( "width", p+"%");
  });
  $(".b-slider .slick-slider").on('init', function(event, slick){
    var p = Math.floor(((slick.currentSlide+1) / slick.slideCount) * 100);
    $(".los-desafios .b-slider .progress-bar .bar").css( "width", p+"%");
  });

  //$(".los-desafios .b-slider .progress-bar .bar").css({ width: "0px" });

  var b_slider = $(".b-slider .slick-slider").slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    dots: false,
    draggable: true,
    easing: 'easing',
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    waitForAnimate: true,
    dragging: true,
    variableWidth: false,
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }],
  });*/

  /* ---------------------------------------------------------------------------------------------------------*/

  jQuery(window).scroll(function() {
    stateScrollTop();
  });

  stateScrollTop();

  /* ---------------------------------------------------------------------------------------------------------*/

  /*$(window).resize(function() {

  });*/

  /* ---------------------------------------------------------------------------------------------------------*/

  //let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
  //if (!isMobile) {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      //anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  //}

});

/* ------------------------------------------------------------------------------------------ */

//var lastScrollTop = 0;

function stateScrollTop(){
  var distance = jQuery('.navbar').outerHeight();

  if (jQuery(this).scrollTop() >= 1) {
    jQuery('.navbar').addClass("bg");
  } else {
    jQuery('.navbar').removeClass("bg");
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
