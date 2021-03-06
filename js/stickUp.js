jQuery(function($) {
	
	$(document).ready(function(){
		var contentButton = [];
		var contentTop = [];
		var content = [];
		var lastScrollTop = 0;
		var scrollDir = '';
		var itemClass = '';
		var itemHover = '';
		var menuSize = null;
		var stickyHeight = 0;
		var stickyMarginB = 0;
		var currentMarginT = 0;
		var topMargin = 0;
        
		$(window).scroll(function(event){
   			var st = $(this).scrollTop();
   			if (st > lastScrollTop){
       			scrollDir = 'down';
   			} else {
      			scrollDir = 'up';
   			}
  			lastScrollTop = st;
		});
        
		$.fn.stickUp = function( options ) {
			// adding a class to users div
			$(this).addClass('stuckMenu');
        	//getting options
        	var objn = 0;
        	if(options != null) {
	        	for(var o in options.parts) {
	        		if (options.parts.hasOwnProperty(o)){
	        			content[objn] = options.parts[objn];
	        			objn++;
	        		}
	        	}
	  			if(objn == 0) {
	  				console.log('error:needs arguments');
	  			}

	  			itemClass = options.itemClass;
	  			itemHover = options.itemHover;
	  			if(options.topMargin != null) {
	  				if(options.topMargin == 'auto') {
	  					topMargin = parseInt($('.stuckMenu').css('margin-top'));
	  				} else {
	  					if(isNaN(options.topMargin) && options.topMargin.search("px") > 0){
	  						topMargin = parseInt(options.topMargin.replace("px",""));
	  					} else if(!isNaN(parseInt(options.topMargin))) {
	  						topMargin = parseInt(options.topMargin);
	  					} else {
	  						//console.log("incorrect argument, ignored.");
	  						topMargin = 0;
	  					}	
	  				}
	  			} else {
	  				topMargin = 0;
	  			}
	  			menuSize = $('.'+itemClass).size();
  			}			
			stickyHeight = parseInt($(this).height());
			stickyMarginB = parseInt($(this).css('margin-bottom'));
			currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));
			vartop = parseInt($(this).offset().top);
			//$(this).find('*').removeClass(itemHover);
            //checkOnScroll();
		};
        
		$(document).on('scroll', function() {
			checkOnScroll();
		});
        
        function checkOnScroll(){
            var varscroll = parseInt($(document).scrollTop());
            
            if(varscroll < 10){
                $(window).resize();
            }

            if(menuSize != null){
                for(var i=0; i < menuSize; i++){
                    contentTop[i] = $('#'+content[i]+'').offset().top;
                    function bottomView(i) {
                        contentView = $('#'+content[i]+'').height()*.4;
                        testView = contentTop[i] - contentView;
                        
                        if(varscroll > testView){
                            $('.'+itemClass).removeClass(itemHover);
                            $('.'+itemClass+':eq('+i+')').addClass(itemHover);
                        } else if(varscroll < 100){
                            $('.'+itemClass).removeClass(itemHover);
                            $('.'+itemClass+':eq(0)').addClass(itemHover);
                        }
                    }
                    if(scrollDir == 'down' && varscroll > contentTop[i]-100 && varscroll < contentTop[i]+100) {
                        $('.'+itemClass).removeClass(itemHover);
                        $('.'+itemClass+':eq('+i+')').addClass(itemHover);
                    }
                    if(scrollDir == 'up') {
                        bottomView(i);
                    }
                }
            }

            if(vartop < (varscroll + topMargin)){
                $('.wrapper').addClass('spHeight');
                $('.stuckMenu').addClass('isStuck');
                $('.navbar-logo-holder').removeClass("fadeOutUp").addClass('fadeInDown');
                $('.navbar-logo-sub-holder').removeClass("slideOutLeft").addClass('slideInLeft');
                $('.stuckMenu').next().closest('div').css({
                    'margin-top': (stickyHeight + stickyMarginB + currentMarginT) + 'px'
                }, 10);
                $('.stuckMenu').css("position","fixed");
                $('.isStuck').css({
                    top: '0px'
                }, 10, function(){

                });
            };

            if(varscroll + topMargin < vartop){
                $('.wrapper').removeClass('spHeight');
                $('.stuckMenu').removeClass('isStuck');
                $('.navbar-logo-holder').removeClass("fadeInDown").addClass('fadeOutUp');
                $('.navbar-logo-sub-holder').removeClass("slideInLeft").addClass('slideOutLeft');
                $('.stuckMenu').next().closest('div').css({
                    'margin-top': currentMarginT + 'px'
                }, 10);
                $('.stuckMenu').css("position","relative");
            };
        };
        
        setTimeout(function(){
            checkOnScroll();
        }, 500);
        
	});
});