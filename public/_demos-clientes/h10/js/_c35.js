$(function() {

  if($(window).width() < 992) {
    if($('.card-sticker--gridx6').length) {
      $('.card-sticker--gridx6 .card-sticker__contenido--card:gt(3)').addClass('card-sticker--hide hide');
    }
    if($('.card-sticker--gridx4').length) {
      $('.card-sticker--gridx4 .card-sticker__contenido--card:gt(3)').addClass('card-sticker--hide hide');
    }
  } else {
      if($('.card-sticker--gridx6').length) {
        $('.card-sticker--gridx6 .card-sticker__contenido--card:gt(11)').addClass('card-sticker--hide hide');
      }
      if($('.card-sticker--gridx4').length) {
        $('.card-sticker--gridx4 .card-sticker__contenido--card:gt(3)').addClass('card-sticker--hide hide');
      }
  }

  if ($('.card-sticker__contenido--card').length > 4 && $(window).width() < 992) {
    $(this).find('.card-sticker__masdetalles').show();
  }

  if ($('.card-sticker__contenido--card').length > 12 && $(window).width() > 992) {
    $(this).find('.card-sticker__masdetalles').show();
  }


  $('.card-sticker__masdetalles a').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.card-sticker').find('.card-sticker--hide').toggleClass('hide');
    $(this).parent().toggleClass("show");
    $(this).parent().parent().find('.card-sticker__menosdetalles').toggleClass("show");


    $([document.documentElement, document.body]).animate({
      scrollTop: $(this).closest('.card-sticker').offset().top - 150}, 1000);
      
  });

  $('.card-sticker__menosdetalles a').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.card-sticker').find('.card-sticker--hide').toggleClass('hide');
    $(this).parent().toggleClass("show");
    $(this).parent().parent().find('.card-sticker__masdetalles').toggleClass("show");
  });

});
