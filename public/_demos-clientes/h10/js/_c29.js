$(function() {

    $('.c29__container .btn-ver-mas-holder .btn-ver-mas').on('click', function(e) {
      e.preventDefault();

      $(this).css('display','none');
      $('.c29__container .hidden-ver-mas').css('display','block');
    });


    $('.c29__container .btn-ver-mas-holder .btn-ver-menos').on('click', function(e) {
        e.preventDefault();
        $('.c29__container .btn-ver-mas-holder .btn-ver-mas').css('display','block');
        $('.c29__container .hidden-ver-mas').css('display','none');
        $('html, body').animate({
            scrollTop: $(".c29__container .btn-ver-mas-holder .btn-ver-mas").offset().top-650
        }, 500);
      });


});
