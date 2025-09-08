$(function() {

  if($(window).width() < 992) {
     $(".c12__container .card-info-sm__description .btn-leer.mas").on("click", function(e){
       e.preventDefault();
       $(this).closest(".card-info-sm__description").addClass("show");
     });

     $(".c12__container .card-info-sm__description .btn-leer.menos").on("click", function(e){
       e.preventDefault();
       $(this).closest(".card-info-sm__description").removeClass("show");
     });

    } else {
      $('.c12__container .js-btn-see-more').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('hide');
        $(this).closest('.card-info-sm').siblings('.card-info-sm').addClass('card-info-sm--border');
        $(this).closest('.card-info-sm').siblings('.card-info-sm').find('.card-info-sm__hide').fadeOut();
        $(this).closest('.card-info-sm').addClass('extend');
      })

      $('.c12__container .js-close').on('click', function(e) {
        e.preventDefault();

        $(this).closest('.card-info-sm').siblings('.card-info-sm').removeClass('card-info-sm--border');
        $(this).closest('.card-info-sm.extend').siblings('.card-info-sm').find('.card-info-sm__hide').fadeIn();
        $(this).closest('.card-info-sm').removeClass('extend');
        $(this).closest('.card-info-sm').find('.js-btn-see-more').removeClass('hide');
      })

    }

  });
