$(function() {

  // INFO: SIDEBAR DERECHA STICKY
  if($(".sticky").length){
    stickySidebar = new StickySidebar('#col-right', {
      topSpacing: 113,
      bottomSpacing: -113,
      containerSelector: '.container-fix',
      innerWrapperSelector: '.sticky',
      resizeSensor: true
    });
  }

});





















