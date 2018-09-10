
(function($) { 
	"use strict";
    
    $(window).resize(function(){
        $('.banner').css({'height': $(window).height() });
    });

    $(document).ready( function() {
        window.addEventListener('DOMContentLoaded', function() {
            "use strict";
            var ql = new QueryLoader2(document.querySelector("body"), {
                barColor: "#fff",
                backgroundColor: "#0F121C",
                percentage: true,
                barHeight: 1,
                minimumTime: 1000,
                fadeOutTime: 3000
            });
        });

        //jQuery(function($) {
            $(window).resize();
        //});
    });
    
}(jQuery));