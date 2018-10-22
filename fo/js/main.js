;(function () {

	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	var parallax = function() {
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false,
			responsive: true

		});
	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: false,
		    dots: true,
		    smartSpeed: 500,
		    autoHeight: true
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#counter-animate').length > 0 ) {
			$('#counter-animate').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');

				}
			} , { offset: '90%' } );
		}
	};

	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}

	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}
		});

	};

	// Document on load.
	$(function(){
		fullHeight();
		parallax();
		testimonialCarousel();
		contentWayPoint();
		counterWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
	});

	var access_token = window.location.hash.replace(/#access_token=([\w\d.]+)/, '$1');
	var authorization = 'https://api.instagram.com/oauth/authorize/?client_id=a73b64b9fee24fffb89f034660a3b729&redirect_uri=http://localhost/&response_type=token&scope=public_content';
	if (!access_token) {
		access_token = '6028252587.a73b64b.c0a20451ea424a8eb092d11c638363e7';
	}
	$(document).ready(function () {
		$('#photos').masongram({
			access_token: access_token,
			count: 20,
			offset: 50,
			size: 'standard_resolution',
			caption: '<div class="text-center"><p data-if="{likes}"><i class="fa fa-heart text-dan ger"></i> {likes}</p><p data-if="{caption}">{caption}</p> <a tabindex="-1" class="btn btn-primary btn-sm" href="{link}" target="_blank" data-if="{link}"><i class="fa fa-instagram"></i> Instagram</a></div>'
			//caption: '<div class="text-center"><p data-if="{likes}"><i class="fa fa-heart text-danger"></i> {likes}</p><p data-if="{caption}">{caption}</p><a tabindex="-1" class="btn btn-primary" href="https://fruskac.net/en/map?c={location},12z" target="_blank" data-if="{location}"><i class="fa fa-map-o"></i> Location</a> <a tabindex="-1" class="btn btn-primary" href="{link}" target="_blank" data-if="{link}"><i class="fa fa-instagram"></i> Instagram</a></div>'
		});
		console.log(authorization);
		$('.authorization').attr('href', authorization);
	});

	var lFollowX = 0,
			    lFollowY = 0,
			    x = 0,
			    //y = 0,
			    friction = 1 / 30;

			function moveBackground() {
			  x += (lFollowX - x) * friction;
			  //y += (lFollowY - y) * friction;

			  //var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
				var translate = 'translate(' + x + 'px) scale(1.1)';

			  $('#fh5co-aside .bg').css({
			    '-webit-transform': translate,
			    '-moz-transform': translate,
			    'transform': translate
			  });

			  window.requestAnimationFrame(moveBackground);
			}

			$("#fh5co-aside").on('mousemove click', function(e) {
			  var lMouseX = Math.max(-100, Math.min(100, $("#fh5co-aside").width() / 2 - e.clientX));
			  //var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
			  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
			  //lFollowY = (10 * lMouseY) / 100;
			});

			moveBackground();

}());
