(function($) {
	"use strict";

	$(window).resize(function(){
  	$('.banner').css({'height': $(window).height() });
	});

	$(document).ready( function() {
    window.addEventListener('DOMContentLoaded', function() {
	    var ql = new QueryLoader2(document.querySelector("body"), {
	      barColor: "#fff",
	      backgroundColor: "#0F121C",
	      percentage: true,
	      barHeight: 1,
	      minimumTime: 1000,
	      fadeOutTime: 3000
	    });
    });

		var wow;
		wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
		});
		wow.init();

    //jQuery(function($) {
    $(window).resize();
    //});

		var lFollowX = 0,
			x = 0,
			friction = 1 / 30;

		function moveBackground() {
			x += (lFollowX - x) * friction;
			var translate = 'translate(' + x + 'px) scale(1.1)';

			$('.home.alt.lft .bg').css({
				'-webit-transform': translate,
				'-moz-transform': translate,
				'transform': translate
			});

			window.requestAnimationFrame(moveBackground);
		}

		var lFollowX2 = 0,
			x2 = 0,
			friction2 = 1 / 30;

		function moveBackground2() {
			x2 += (lFollowX2 - x2) * friction2;
			var translate2 = 'translate(' + x2 + 'px) scale(1.1)';

			$('.home.alt.rgt .bg').css({
				'-webit-transform': translate2,
				'-moz-transform': translate2,
				'transform': translate2
			});

			window.requestAnimationFrame(moveBackground2);
		}

		$(window).on('mousemove click', function(e) {
			var lMouseX = Math.max(-100, Math.min(100, $('.home.alt.lft').width() / 2 - e.clientX));
			lFollowX = (20 * lMouseX) / 100;

			var lMouseX2 = Math.max(-100, Math.min(100, ($('.home.alt.rgt').width()+$('.home.alt.lft').width() / 2) - e.clientX));
			lFollowX2 = (20 * lMouseX2) / 100;

			console.log(lMouseX2);
		});

		moveBackground();
		moveBackground2();

		/*var lFollowX = 0;
	  var x = 0;
	  var friction = 1 / 24;
		var translate;
		var lMouseX;

		function moveBackground(el) {
			lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - el.clientX));
		  lFollowX = (20 * lMouseX) / 100;

		  x += (lFollowX - x) * friction;
			translate = 'translateX(' + x + 'px), scale(1.1)';

		  $(el).css({
		    '-webit-transform': translate,
		    '-moz-transform': translate,
		    'transform': translate
		  });

		  window.requestAnimationFrame(moveBackground);
		}

		$(document).on('mousemove', function(e) {
			moveBackground('.home.alt.lft .bg');
			$(this).addClass("hover");
		});

		$('.home.alt.lft, .footer').mouseenter(function() {
		    console.log('lft over');
				$(this).addClass("hover");
		}).mouseleave(function(e) {
			console.log('lft out');
			$(this).removeClass("hover");
		});*/

		/*$('.home.alt.lft, .footer').on('mouseover', function(e) {
			moveBackground('.home.alt.lft .bg');
			$(this).addClass("hover");
			console.log('lft over');
		});

		$('.home.alt.lft, .footer').on('mouseout', function(e) {
			$(this).removeClass("hover");
			console.log('lft out');
		});*/

		/*$('.home.alt.rgt, .footer').on('mouseover', function(e) {
			moveBackground('.home.alt.rgt .bg');
			$(this).addClass("hover");
			console.log('rgt over');
		});

		$('.home.alt.rgt, .footer').on('mouseout', function(e) {
			$(this).removeClass("hover");
			console.log('rgt out');
		});*/

		/*$('.home.alt.rgt').on('mouseover', function(e) {
			moveBackground('.home.alt.rgt .bg');
			console.log('rgt over');
		});

		$('.home.alt.rgt').on('mouseout', function(e) {
			var translate = 'scale(1)';
			$('.home.alt.rgt .bg').css({
		    '-webit-transform': translate,
		    '-moz-transform': translate,
		    'transform': translate
		  });
			console.log('rgt out');
		});*/
	});
}(jQuery));
