$(function() {
  $(window).scroll(function() {
    stateScrollTop();
  });

  $(window).resize(function() {
    stateResize();
  });
  stateScrollTop();
  stateResize();

  $(".btn-backtop").on("click", function (e) {
  	e.preventDefault();

    $('html, body').animate( { scrollTop : 0 }, 300 );
  });

});

var lastScrollTop = 0;

function stateScrollTop(){
  var distance = jQuery('.topbar-main').outerHeight();

  if (jQuery(this).scrollTop() >= distance) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      jQuery('.topbar-main').not('.landings').removeClass("sticky-bg");
    } else {
      jQuery('.topbar-main').not('.landings').addClass("sticky-bg");
    }
    lastScrollTop = st;
  } else {
  }

  if(jQuery(window).width() > 1024){
    if(jQuery(this).scrollTop() <= 283 ){
      jQuery(".home .c7__container, .ficha .c7__container").not('.landings').addClass("fix-position-top-bottom");
      jQuery(".home .daterangepicker, .ficha .daterangepicker").addClass("fix-position-top-bottom");
    } else {
      jQuery(".home .c7__container, .ficha .c7__container").not('.landings').removeClass("fix-position-top-bottom");
      jQuery(".home .daterangepicker, .ficha .daterangepicker").removeClass("fix-position-top-bottom");
    }

    if(jQuery(this).scrollTop() <= 227 ){
      jQuery(".home .c7__container, .ficha .c7__container").not('.landings').addClass("fix-position-top-bottom-alt");
    } else {
      jQuery(".home .c7__container, .ficha .c7__container").not('.landings').removeClass("fix-position-top-bottom-alt");
    }
  }

  /*if (jQuery(this).scrollTop() <= 0) {
    jQuery('.topbar-main').removeClass("sticky-bg");
  }*/

  /*if (jQuery(this).scrollTop() >= distance) {
    jQuery('.topbar-main').addClass("sticky-bg");
  } else {
    jQuery('.topbar-main').removeClass("sticky-bg");
  }*/

  $(".daterangepicker").css("display", "none");

  if(jQuery(window).width() <= 1024){
    var wt = jQuery(window).scrollTop();
    //var topbar_main = jQuery('.topbar-main').outerHeight();
    var topbar_main = 56;
    var banner_c5 = jQuery('.banner-c5').outerHeight();
    //var c7__container = jQuery(".c7__container").offset().top;
    //jQuery('.topbar-main-mobile-holder').css({ top: wt+"px" });
    if(!banner_c5)
    banner_c5 = jQuery('.carousel-general.landings').outerHeight();


    if((banner_c5-(topbar_main*2-15)) <= wt){
      jQuery(".c7__container").addClass("fixed-to-bottom");
      jQuery(".banner-c5").addClass("fixed-to-bottom");
      //jQuery(".c62_style").addClass("fixed-to-bottom");
    } else {
      jQuery(".c7__container").removeClass("fixed-to-bottom");
      jQuery(".banner-c5").removeClass("fixed-bottom");
      //jQuery(".c62_style").removeClass("fixed-to-bottom");
    }

    if(jQuery(".interior_header .c7__container").length )
    {      jQuery(".c7__container").not('.landings').addClass("fixed-to-bottom");}

  }

  if(jQuery(window).width() > 1024){
    var wt = jQuery(window).scrollTop();
    //var topbar_main = jQuery('.topbar-main').outerHeight();
    var topbar_main = 82;
    var banner_c5 = jQuery('.banner-c5').outerHeight();
    if(!banner_c5)
      banner_c5 = jQuery('.carousel-general.landings').outerHeight();

    if(banner_c5)
    {
      if((banner_c5-(topbar_main*2-15)) <= wt){
        jQuery(".c7__container").addClass("fixed-to-top");
        jQuery(".topbar__links-bottom li .btn-reservar").addClass("show");
      } else {
        jQuery(".c7__container").removeClass("fixed-to-top");
        jQuery(".c7__container").removeClass("show");
        jQuery(".topbar__links-bottom li .btn-reservar").removeClass("show");
      }
    }

    if(jQuery(".interior_header .c7__container").length )
    {      jQuery(".c7__container").not('.landings').addClass("fixed-to-top");}

  }

  /*if (jQuery(this).scrollTop() >= distance) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      jQuery('.topbar-main').css({ top: -(jQuery(".topbar-main").outerHeight())+"px" });
    } else {
      jQuery('.topbar-main').css({ top: 0 });
    }
    lastScrollTop = st;
  } else {
  }*/
}

function stateResize(){
  if(jQuery(window).width() >= 1024){
    jQuery(".c7__container").removeClass("fixed-to-bottom");
    jQuery(".banner-c5").removeClass("fixed-to-bottom");
    jQuery("body").removeClass("no-scroll-y open-menu");
    jQuery(".topbar-main-mobile").removeClass("open");
    jQuery(".topbar-main").removeClass("sticky-bg open-menu");
    jQuery(".menu-icon__mobile-click").removeClass("active");
  }

  if(jQuery(window).width() < 1024){
    jQuery(".c7__container").not('.landings').removeClass("fixed-to-top");
  }
}
