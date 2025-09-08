$(function() {

    $('.c39__certificates-col .btn-leer').on('click', function(e) {
      e.preventDefault();
  
      $(this).toggleClass('menos');
      $(this).parent('.c39__certificates-col').find('.c39__certificates-hide').toggleClass('hide');
  
      if($(this).hasClass('menos')){
          $(this).text('VER MENOS');
          $(this).find('img').attr("src","../../../src/icons/arrow_big_down.svg")
      } else {
          $(this).text('VER MÁS');
      }
  
  
    });
  
  
  
  
  
  
  
    });
  