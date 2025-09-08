jQuery(document).ready(function(){
  /*$('#accordion').collapse({
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
  });*/

  jQuery(window).scroll(function() {
    stateScrollTop();
  });

  stateScrollTop();

  var owl = jQuery('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    margin: 0,
    URLhashListener: true,
    autoplayHoverPause: false,
    startPosition: 'URLHash',
    nav: false,
    dots: true,
    dotsContainer: '#carousel-custom-dots',
    autoplay: true,
    autoplayTimeout: 8000
  });

  //setInterval(function(){
  //$(".owl-dots #1.owl-dot .lines .line").css("width","100%");
  //$(".owl-dots #1.owl-dot .lines .line").addClass("show");
  //}, 3000);

  jQuery('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  });

  /*owl.on('mousewheel', '.owl-stage', function () {
    if(e.originalEvent.wheelDelta > 0) {
     owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    return false;
  });*/

  //owl.on('changed.owl.carousel', function(event) {
    /*$(".owl-dots .owl-dot .lines .line").css("width","0%");
    $(".owl-dots #"+(event.page.index+2)+".owl-dot .lines .line").css("width","100%");*/

    /*$(".owl-dots .owl-dot .lines .line").removeClass("show");
    $(".owl-dots #"+(event.page.index+2)+".owl-dot .lines .line").addClass("show");
  });*/
});

var lastScrollTop = 0;

function stateScrollTop(){
  var distance = jQuery('.navbar').outerHeight();

  if (jQuery(this).scrollTop() >= 1) {
    jQuery('.navbar').addClass("bg");
  } else {
    jQuery('.navbar').removeClass("bg");
  }

  if (jQuery(this).scrollTop() >= distance) {
    //jQuery('.navbar').addClass("bg");
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      jQuery('.navbar').addClass("hide");
    } else {
      jQuery('.navbar').removeClass("hide");
    }
    lastScrollTop = st;
  } else {
    //jQuery('.navbar').removeClass("bg");
  }
}


document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth > 992) {

	document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

		everyitem.addEventListener('mouseover', function(){

			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
			}

		});
		everyitem.addEventListener('mouseleave', function(){
			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
			}


		})
	});

}
// end if innerWidth
});
// DOMContentLoaded  end
