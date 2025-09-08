$(document).ready(function(){
  $('#accordion').collapse({
    toggle: true
  });

  var items = $("main .content-items .item .inner");
  $(items).on("click",function(e){
    e.preventDefault();
    if($(this).parent().hasClass("active")){
      $(this).parent().removeClass("active");
    } else {
      $(items).each(function() {
        if($(this).parent().hasClass("active")){
          $(this).parent().removeClass("active");
        }
      });
      $(this).parent().addClass("active");
    }
  });
});
