$(function() {

  $(".c59__container.club-h10 .table .holder-btn .btn-mas").on("click", function(e){
    e.preventDefault();
    $(".c59__container.club-h10").toggleClass("show");

    if($(".c59__container.club-h10").hasClass("show")){
      $(".c59__container.club-h10 .btn-mas").html("VER MENOS");
      $('.c59__container.club-h10 .table .holder-btn .icon').attr("src","../../../src/icons/arrow_big_up.svg");
    } else {
      $(".c59__container.club-h10 .btn-mas").html("VER MÁS");
      $('.c59__container.club-h10 .table .holder-btn .icon').attr("src","../../../src/icons/arrow_big_down.svg");
      $([document.documentElement, document.body]).animate({ scrollTop: $(this).closest('.c59__container.club-h10').offset().top - 150}, 1000);
    }
  });

  $(".c59__container .btn-modal").on("click", function(e){
    e.preventDefault();
    $(".c59__container.modal").addClass("show");
  });

  $(".c59__container.modal .modal-body .btn-close").on("click", function(e){
    e.preventDefault();
    $(".c59__container.modal").removeClass("show");
  });

  var slider = $(".c59__container .slick-slider-holder .slick-slider");
  var settings = {
    infinite: true,
    mobileFirst: true,
    dots: false,
    arrows: true,
    dragging: true,
    responsive: [
      {
        breakpoint: 739,
        slidesToShow: 1,
        slidesToScroll: 1,
        settings: "unslick"
      }
    ]
  };
  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > 739){
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
});
