$(document).ready(function () {

  // MOBILE MENU
  $('#mobile-open').click(function () {
    $('body').toggleClass("mobile-open");
    $('#mobile-open i').toggleClass("fa-bars fa-times");
  });

  $('#select-nosotros').change(function(){
    var v = $(this).val();
    window.location = v;
  });

  $('#select-contacto').change(function(){
    var v = $(this).val();

    if(v == "feedback"){
      $("#side-nav .iframe").trigger("click");
    } else {
      window.location = v;
    }
  });

  $('input[name=escuela]').change(function(){
    if( $(this).is(":checked") ){
      var val = $(this).val();
      if(val == "Cursando"){
        $("#escuela_finaliza").show();
      } else {
        $("#escuela_finaliza").hide();
      }
    }
  });

  $('input[name=terciario]').change(function(){
    if( $(this).is(":checked") ){
      var val = $(this).val();
      if(val == "Cursando"){
        $("#terciario_finaliza").show();
      } else {
        $("#terciario_finaliza").hide();
      }
    }
  });

  $('input[name=universitario]').change(function(){
    if( $(this).is(":checked") ){
      var val = $(this).val();
      if(val == "Cursando"){
        $("#universitario_finaliza").show();
      } else {
        $("#universitario_finaliza").hide();
      }
    }
  });

  $('input[name=posgrado]').change(function(){
    if( $(this).is(":checked") ){
      var val = $(this).val();
      if(val == "Cursando"){
        $("#posgrado_finaliza").show();
      } else {
        $("#posgrado_finaliza").hide();
      }
    }
  });

  $('#agregar-mas-btn').click(function (e) {
    //$(".empleo").appendTo(".empleos");

    $($(".empleo").after().html()).appendTo(".empleos-dpl");

    $('html, body').stop().animate({
       /*scrollTop: ($(".empleos-dpl").offset().top-($(".topheader").height()+180))*/
       scrollTop: ($(window).scrollTop()+86)
    }, 300);

   $('.eliminar-btn').click(function (e) {
     $(this).parent().parent().parent().remove();
     $('html, body').stop().animate({
        /*scrollTop: ($(".empleos-dpl").offset().top-($(".topheader").height()+180))*/
        scrollTop: ($(window).scrollTop()-86)
     }, 300);
     e.preventDefault();
   });

    e.preventDefault();
  });

  $(window).resize(function() {
    var mh = $(window).height();
    var fh = $(".footer").height();
    $(".innercontent").css("min-height", (mh-fh-15));
  });
  $(window).resize();

  var options = {
      //target:        '#output2',   // target element(s) to be updated with server response
      beforeSubmit:  showRequest,  // pre-submit callback
      success:       showResponse,  // post-submit callback

      // other available options:
      //url:       url         // override for form's 'action' attribute
      type:      'post',        // 'get' or 'post', override for form's 'method' attribute
      //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
      clearForm: true,        // clear all form fields after successful submit
      resetForm: true        // reset the form after successful submit

      // $.ajax options can be used here too, for example:
      //timeout:   3000
  };

  // bind to the form's submit event
  $('form').submit(function() {
      // inside event callbacks 'this' is the DOM element so we first
      // wrap it in a jQuery object and then invoke ajaxSubmit
      $(this).ajaxSubmit(options);

      // !!! Important !!!
      // always return false to prevent standard browser submit and page navigation
      return false;
  });

  // pre-submit callback
  function showRequest(formData, jqForm, options) {
    // formData is an array; here we use $.param to convert it to a string to display it
    // but the form plugin does this for you automatically when it submits the data
    var queryString = $.param(formData);

    // jqForm is a jQuery object encapsulating the form element.  To access the
    // DOM element for the form do this:
    // var formElement = jqForm[0];

    //console.log('About to submit: \n\n' + queryString);

    // here we could return false to prevent the form from being submitted;
    // returning anything other than false will allow the form submit to continue
    return true;
  }

  // post-submit callback
  function showResponse(responseText, statusText, xhr, $form)  {
    if(responseText == "ok"){
      //$("#miModal").modal("show");
      //$.colorbox({html:"El fomulario fue recibido correctamente."});
      $.colorbox({
        html:"<br>El fomulario fue recibido correctamente.",
        onClosed : function(){
          //$.colorbox.remove();
        },
        width:"40%"
      });

      setTimeout(function(){
        //$("#miModal").modal("hide");
        $.colorbox.close();
      }, 3000);
    }
    //console.log(responseText);
    //console.log(success);
    //console.log('status: ' + statusText + '\n\nresponseText: \n' + responseText + '\n\nThe output div should have already been updated with the responseText.');
  }

  $(".iframe").colorbox({
    iframe:true,
    width:"80%",
    height:"80%",
    preloading: true,
    top: "0px",
    onOpen : function(){
      $('html, body').stop().animate({
         /*scrollTop: ($(".empleos-dpl").offset().top-($(".topheader").height()+180))*/
         scrollTop: ($("html, body").scrollTop())
      }, 300);
    }
  });

  /*$(".item.marca").colorbox({
    inline: true,
    width: "992px",
    rel: 'group'
  });*/

  $(".item.inline").colorbox({
    inline: true,
    /*innerWidth: "100%",
    innerHeight:"100%",*/
    width: "40%",
    height: "100%",
    rel: 'group',
    scrolling: false,
    preloading: true,
    top: "0px"

  });

  // TOGGLE SIDE MENU ON MOBILE DEVICES
  $('.side-menu .title').click(function () {
    $('#side-nav').toggleClass("active");
    $('.side-menu .title i').toggleClass("fa-chevron-down fa-chevron-up");
  });

  $('#escuela_finaliza input, #terciario_finaliza input, #universitario_finaliza input, #posgrado_finaliza input').datepicker({ format: 'dd/mm/yyyy', language: 'es', todayHighlight: true });

  // OWL CAROUSEL - BRANDS CAROUSEL
  $('#brands').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 8,
    smartSpeed: 2000,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    mouseDrag: true,
    center: false,
    loop: true,
    responsive: {
      0: {
        items: 5,
        nav: false

      },
      580: {
        items: 7,
        nav: false

      },
      768: {
        items: 7,
        nav: false

      },
      992: {
        items: 8

      },
      1200: {
        items: 10

      },
      1600: {
        items: 10
      }
    }
  });

  // OWL CAROUSEL - MAIN BANNER
  $('#owl-demo').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      smartSpeed: 450,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      loop: true,
      mouseDrag: false
  });

  // OWL CAROUSEL - BRANDS CAROUSEL
  $('#brands').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 8,
      smartSpeed: 2000,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      loop: false,
      mouseDrag: true,
      center: true,
      loop: true,
      responsive: {

          0: {
              items: 2.5,
              nav: false

          },
          580: {
              items: 4.5,
              nav: false

          },
          768: {
              items: 4,
              nav: false

          },
          992: {
              items: 5

          },
          1200: {
              items: 7

          },
          1600: {
              items: 10
          }
      }
  });

});
