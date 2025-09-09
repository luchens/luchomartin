(function($) {
	"use strict";
	var lFollowX = 0,
		x = 0,
		x_ = 0,
		friction = 1 / 30,
		friction_ = 1 / 150;

	function moveBackground() {
		x += (lFollowX - x) * friction;

		var translate = 'translate(' + x + 'px) scale(1.1)';

		$('.banner .bg').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

		x_ -= (lFollowX - x) * friction_;
		var translate = 'translate(' + x_ + 'px) scale(1.02)';

		$('.banner .bg-front').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

		window.requestAnimationFrame(moveBackground);
	}

	$(window).on('mousemove click', function(e) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		lFollowX = (20 * lMouseX) / 100;
	});

	moveBackground();

  $(document).scroll(function(){
    onHabilidades();
		$(window).resize();

		const scrollIndicator = document.getElementById("scroll-indicator");
	  const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
	  const percentage = (window.scrollY / maxScrollableHeight) * 100;
	  scrollIndicator.style.width = `${percentage}%`;
  });

	/*window.addEventListener("scroll", () => {

	});*/


	/*let magneticArea = document.querySelector('.logo.l-1');
	let magneticElement = magneticArea.querySelectorAll('.logo-base');

	magneticArea.addEventListener('mousemove', function(e){
	  let Xvalue = e.pageX - this.offsetLeft;
	  let Yvalue = e.pageY - this.offsetTop;

	  magneticElement.forEach(element =>{
	    let magneticValue = element.getAttribute('data-magnetic-value')

	    element.animate({
	      transform: `translate(${Xvalue * magneticValue}%, ${Yvalue * magneticValue}%)`,
	    },{
	      duration: 500,
	      fill: 'forwards',
	    })
	  })
	});

	magneticArea.addEventListener('mouseleave', function(e){
	  magneticElement.forEach(element =>{
	    element.animate({
	      transform: `translate(0)`,
	    },{
	      duration: 150,
	      fill: 'forwards',
	    })
	  })
	});*/

  $(document).ready( function() {
	  $(".lb").rlightbox();
		$(window).resize();

	  window.addEventListener('DOMContentLoaded', function() {
	    var ql = new QueryLoader2(document.querySelector("body"), {
	      barColor: "rgba(31, 152, 209, 1)",
	      backgroundColor: "#0F121C",
	      percentage: false,
	      barHeight: 1,
	      minimumTime: 1000,
	      fadeOutTime: 3000
	    });
	  });

    jQuery(function($) {
			if($('.navbar-wrapper').length != 0) {
	      $('.navbar-wrapper').stickUp({
	        parts: {
	            0: 'home',
	            1: 'sobremi',
	            2: 'trabajos',
	            3: 'habilidades',
	            4: 'experiencia',
	            5: 'contacto'
	        },
	        itemClass: 'menuItem',
	        itemHover: 'active',
	        topMargin: 'auto'
	      });
			}
    });

    (function($) {
			$('body').jpreLoader({
	      splashID: "#jSplash",
	      loaderVPos: '50%',
	      splashVPos : '50%',
	      autoClose: false,
	      debugMode: true,
	      onetimeLoad: false,
	      showSplash : true,
	      showPercentage : true,
	      closeBtnText: "",
	      onComplete: function(){
	      }, splashFunction: function() {
	        $('#jSplash').children('section').not('.selected').hide();
	        $('#jSplash').hide().fadeIn(800);

	        var timer = setInterval(function() {
	        	splashRotator();
	        }, 4000);
	      }
	    }, function() {
	      clearInterval(timer);
	    });
		});

    function splashRotator(){
    	var cur = $('#jSplash').children('.selected');
    	var next = $(cur).next();

    	if($(next).length !== 0) {
    		$(next).addClass('selected');
    	} else {
    		$('#jSplash').children('section:first-child').addClass('selected');
    		next = $('#jSplash').children('section:first-child');
    	}

    	$(cur).removeClass('selected').fadeOut(800, function() {
	    	$(next).fadeIn(800);
	    });
    }

    /*var wow;
    wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       false,
        live:         false
    });
    wow.init();*/

    /*(function($) {
      var $innerS0 = $('.innerS0'),
      $innerS1 = $('.innerS1'),
      $faAngleDown = $('.fa-angle-down-holder'),
      $textoInicio = $('.texto-inicio'),
      $clouds = $('.clouds'),
      $particles = $('#particles-js');

      var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave'
        }
      });

      var innerS0Tl = new TimelineMax();
      innerS0Tl.to($innerS0, 1, { opacity: 0 }, 0);

      new ScrollMagic.Scene({
        duration: '100%'
      }).setTween(innerS0Tl).triggerElement($('body')[0]).addTo(ctrl);

      var innerS1Tl = new TimelineMax();
      innerS1Tl.to($innerS1, 1, { opacity: 0, yPercent: 20, scale: 0.9 }, 0);

      new ScrollMagic.Scene({
        duration: '100%'
      }).setTween(innerS1Tl).triggerElement($('body')[0]).addTo(ctrl);

      var faAngleDownTl = new TimelineMax();
      faAngleDownTl.to($faAngleDown, 1, { opacity: 0, yPercent: 10, scale: 0.8 }, 0.1);

      new ScrollMagic.Scene({
        duration: '100%'
      }).setTween(faAngleDownTl).triggerElement($('body')[0]).addTo(ctrl);

      var textoInicioTl = new TimelineMax();
      textoInicioTl.to($textoInicio, 1, { opacity: 0, yPercent: 5, scale: 0.7 }, 0.2);

      new ScrollMagic.Scene({
        duration: '100%'
      }).setTween(textoInicioTl).triggerElement($('body')[0]).addTo(ctrl);

      var cloudsTl = new TimelineMax();
      cloudsTl.to($clouds, 1, { opacity: 0, yPercent: 5, scale: 0.6 }, 0.3);

      new ScrollMagic.Scene({
        duration: '100%'
      }).setTween(cloudsTl).triggerElement($('body')[0]).addTo(ctrl);

      var particlesTl = new TimelineMax();
      particlesTl.to($particles, 1, { opacity: 0 }, 0.3);

      new ScrollMagic.Scene({
        duration: '100%'
      }).setTween(particlesTl).triggerElement($('body')[0]).addTo(ctrl);
  	})(jQuery);*/

	  $("ul.trabajosContainer li span.hoverBox .linKed.disabled").click(function(e) {
	    e.preventDefault();
	    return false;
	  });

	  $(".navbar.navbar-inverse.navbar-static-top a").click(function(e) {
	    e.preventDefault();
	    $(".navbar-collapse").addClass("hideClass collapse");
	  });

	  $(".navbar-toggle" ).click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	    $( ".navbar-collapse").removeClass("hideClass");
	  });

	  $("#home .fa-angle-down").click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	    $("#btn-sobremi").trigger("click");
	  });

	  $(".page-up-holder .fa-angle-up").click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	    $("#btn-inicio").trigger("click");
	  });

	  $("#sobremi #btn-go-contacto").click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	    $("#btn-contacto").trigger("click");
	  });

	  $(".navbar-logo-holder").click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	    $("#btn-inicio").trigger("click");
	  });

	  $('.menuItem a').click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;

	    var hdifExtra = 20;

	    if($(window).width() <= 768){
	      $('.btn-navbar').click();
	      if($(".navbar-collapse").hasClass("in")){ $('.navbar-toggle').click(); }

	      hdifExtra = 2;
	    }

	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

	      if (target.length) {
	        var hdif = ($('.menu .navbar-wrapper .navbar-header').outerHeight() + hdifExtra);
	        var sT = target.offset().top;
	        var page = $("html, body");

	        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
	            page.stop();
	        });

	        page.animate({ scrollTop: sT - hdif }, 1500, function(){
	           page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
	        });
	      }
	    }
    });

    validate_and_submit_forms();
    onHabilidades();

		AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 20, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    /*particlesJS.load('particles-js', 'particles.json', function() {
    	console.log('callback - particles.js config loaded');
    });*/
  });
}(jQuery));

function onHabilidades(){
  var top = ($('.habilidades').height()-$(window).scrollTop());
  var index = 0;

  if(top <= 700){
    if(index == 0){
      $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: '#2098D1',
        trackColor: '#fff',
        scaleColor: '#030'
      });
    }
    index++;
  }

  if($(window).scrollTop() >= ($('.home').height()-5)){
    $(".page-up-holder").removeClass("fadeOutDown").addClass('fadeInUp');
  } else {
    $(".page-up-holder").removeClass("fadeInUp").addClass('fadeOutDown');
  }
}

/*$(window).load(function() {
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 355,
				"density": {
					"enable": true,
					"value_area": 789.1476416322727
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.48927153781200905,
				"random": false,
				"anim": {
					"enable": true,
					"speed": 0.2,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 2,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 2,
					"size_min": 0,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 0.2,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "bubble"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 83.91608391608392,
					"size": 1,
					"duration": 3,
					"opacity": 1,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
});*/

function validate_and_submit_forms(b) {
  var a = (b !== undefined && b.length > 0) ? b : $("form.validate-form");

  a.each(function () {
    var c = $(this);

    c.find(".validate-field").each(function () {
      $(this).change(function () {
        $(this).siblings(".alert").fadeOut("fast", function () {
          $(this).remove();
        });

        if ($(this).val().trim() != "") {
          var e = validate_fields(c, $(this));
          if (e.length > 0) {
            if (e[0]["message"] !== undefined && e[0]["message"] !== "" && e[0]["message"] !== "success") {
              var d = '<div class="alert">' + e[0]["message"] + "</div>";
              $(this).after(d);
              $(this).siblings(".alert").fadeIn("fast");
            }
          }
        }
      });
    });

    c.submit(function (e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      $(this).find(".form-loader").fadeIn("fast");
      var d = $(this).attr("action");

      if (d === undefined && d === "") {
        return false;
      }
      $(this).find(".alert").remove();
      var f = false;

      $(this).find(".validate-field").each(function () {
        var h = validate_fields(c, $(this));
        if (h.length > 0) {
          if (h[0]["message"] !== undefined && h[0]["message"] != "" && h[0]["message"] != "success") {
            var g = '<div class="alert">' + h[0]["message"] + "</div>";
            $(this).after(g);
            $(this).siblings(".alert").fadeIn("fast");
            f = true;
          }
        }
      });

      if (f === true) {
        $(this).find(".form-loader").fadeOut("fast");
        return false;
      }

      $.ajax({
        type: "POST",
        url: d,
        data: $(this).serialize(),
        dataType: "html",
        success: function (k) {
          c.find(".form-loader").fadeOut("fast");
          var l = (k === "success") ? true : false;
          var h = (k === "captcha") ? false : true;
          var g = "";

          switch (k) {
            case "success":
              $(".form-general-error-container .success").fadeIn("fast");
              reset_forms();
              break;
            case "incomplete":
              $(".form-general-error-container .incomplete").fadeIn("fast");
              break;
            case "error":
              $(".form-general-error-container .error").fadeIn("fast");
              break;
          }

          if (!h) {
            c.find("#form-captcha").parent(".form-group").append(j);
            c.find("#form-captcha").siblings(".alert").fadeIn("fast");
          } else {
            $(".form-general-error-container .success, .form-general-error-container .incomplete, .form-general-error-container .error").delay(10000).fadeOut("fast");
          }

          if (l === true) {
            c.find(".form-control").val("");
          }
        }, error: function () {
          c.find(".form-loader").fadeOut("fast");
          $(this).find(".form-general-error-container .error").fadeIn("fast");
        }
      });
    });
  });
}

function reset_forms() {
  $(".validate-field").val("");
  $(".form-loader").fadeOut("fast");
}

function validate_fields(d, a) {
  if (d !== undefined && d.length > 0) {
    var b = (a !== undefined && a.length > 0) ? a : d.find(".validate");
    var c = new Array();

    b.each(function () {
      var e = $(this).attr("data-validation-type");
      var h = $(this).hasClass("required");
      var g = $(this).val().trim();
      var f = new Array();
      f.field_object = $(this);
      f.message = "success";

      if (h === true && (g === "" || g === null || g === undefined)) {
        f.message = "Este campo es obligatorio.";
      }

      if (e === "string" && (g !== "" && g !== null && g !== undefined)) {
        if (g.match(/^[a-z0-9 .\-]+$/i) === null) {
          f.message = "Caracteres inválidos.";
        }
      } else {
        if (e === "email" && (g !== "" && g !== null && g !== undefined)) {
          if (g.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
            f.message = "Ingresá un email válido.";
          }
        } else {
          if (e === "phone" && (g !== "" && g !== null && g !== undefined)) {
            if (g.match(/^\(?\+?[\d\(\-\s\)]+$/) === null) {
              f.message = "Caracteres inválidos.";
            }
          }
        }
      }
      c.push(f);
    });
    return c;
  }
}
