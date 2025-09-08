$(document).ready(function(){
	if($(window).width() >= 768){
		var l = $(".scrollify").length;
		if(l){
			for (var i=1; i<l; i++){
				$(".scrollify-control").append('<i class="b-'+i+'" data-id="'+i+'" ></i>');
			}
		}

		$(".scrollify-control i").each(function(index) {
			$(this).on("click",function(e){
				$.scrollify.move("#"+($(this).data("id")+1));
			});
		});

		$.scrollify({
	    section : ".scrollify",
			//sectionName: ".scrollify-container",
			//interstitialSection: "scrollify-container",
			easing: "easeOutBack", //easeOutExpo
			scrollSpeed: 1500,
			offset: 0,
			setHeights: false,
			//scrollbars: true,
			//overflowScroll:false,
			//target:"html,body",
			//standardScrollElements: true,
			//overflowScroll:false,
			updateHash: true,
			//touchScroll:false,
			before:function(section) {
				console.log("before: " + section);
				/*console.log("before");*/
				$(".scrollify-control i").removeClass("active");
				$(".scrollify-control i.b-"+section).addClass("active");

				/*if(section == 1 || section == l){
					$(".scrollify-control").removeClass("active");
				}*/
			},
			after:function(section) {
				console.log("after: " + section);
				/*console.log("after");*/
			},
			afterResize:function(section) { console.log("afterResize: " + section); /*console.log("afterResize");*/ },
			afterRender:function(section) { console.log("afterRender: " + section); /*console.log("afterRender");*/ }
		});
	}

	if($(".scrollify").length){
		$(".scrollify-control").addClass("active");
		//$.scrollify.move(window.location.hash);
	}

	/*var previousScroll = 0;
	$(window).on("scroll",function(){
		var currentScroll = $(this).scrollTop();
		if (currentScroll > previousScroll){
			delta = -1;
		} else {
			delta = 1;
		}
		previousScroll = currentScroll;
		console.log(delta);
		deltaY(delta);
	});*/
});

/*var count = 0;
var count2 = 1;
var mult = 15;
var i = new Array();
$(".onscroller > div").each(function(idx,v){ i[idx] = $(this).height(); });
var l = i.length;
var delta;*/

/*function findScrollDirectionOtherBrowsers(event){
	if (event.wheelDelta){
		delta = event.wheelDelta;
	} else {
		delta = -1 *event.deltaY;
	}
	deltaY(delta);

	console.log(event.wheelDelta + " / " +(-1 *event.deltaY));
}
window.addEventListener('wheel', findScrollDirectionOtherBrowsers);*/

/*function deltaY(delta){
	if($(window).scrollTop() >= $(".onscroller").offset().top){
		if (delta) {
			$(".onscroller").removeClass("scroller").addClass("scroller");
			if(count2 >= 1 && count2 <= l){
				$("html, body").stop().animate({ scrollTop:$(".onscroller div.n"+count2).offset().top }, 100, 'swing', function() {
				});
			}
			var int = (count2 * mult);
			if(count > int) {
				count2++;
			}
			console.log(int +" / "+ count +" / "+ count2);
			count++;
		} else {
			$(".onscroller").removeClass("scroller").addClass("scroller");
			if(count2 >= 1 && count2 <= l){
				$("html, body").stop().animate({ scrollTop:$(".onscroller div.n"+count2).offset().top }, 100, 'swing', function() {
				});
			}
			var int = (count2 * mult);
			if(count < int) {
				count2--;
			}
			if(count2 == 1){
				count2 = 1;
				count = 0;
			}
			console.log(int +" / "+ count +" - "+ count2);
			count--;
		}
	}
}*/
