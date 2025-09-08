$(function() {

  $(".btn-modal-mensaje-error-solo-adultos").on("click", function(e){
    e.preventDefault();
    initModal_cMensaje_error_solo_adultos();
  });

});

function initModal_cMensaje_error_solo_adultos(){
  localStorage.setItem('scroll-y', $(window).scrollTop());
  $('html, body').animate( { scrollTop : 0 }, 0 );
  $("body").addClass("no-scroll-y");
  $(".cMensaje-error-solo-adultos__container.modal-mensaje-error-solo-adultos").addClass("show");

  $(".cMensaje-error-solo-adultos__container.modal-mensaje-error-solo-adultos .btn-close").on("click", function(e){
    e.preventDefault();
    $(".cMensaje-error-solo-adultos__container.modal-mensaje-error-solo-adultos").removeClass("show");

    $('html, body').animate( { scrollTop : localStorage.getItem('scroll-y') }, 0 );
    $("body").removeClass("no-scroll-y");
  });
}
