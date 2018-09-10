(function($) { 
	"use strict";


    
    //For background slider
    /*$(function() {
        $('#ri-grid').gridrotator( {
            rows		: 4,
            columns		: 8,
            animType	: 'fadeInOut',
            animSpeed	: 1000,
            interval	: 600,
            step		: 1,

            w1024		: {
                rows	: 5,
                columns	: 6
            },
            w768		: {
                rows	: 7,
                columns	: 4
            },
            w480		: {
                rows	: 4,
                columns	: 3
            },
            w320		: {
                rows	: 4,
                columns	: 2
            },
            w240		: {
                rows	: 4,
                columns	: 2
            }
        });
    });*/

    // for portfoli filter jquary
    /*$(window).load(function(){
        var $container = $('.trabajosContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.trabajosFilter a').click(function(e){
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            $('.trabajosFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        }); 

        var chart = window.chart = $('.chart').data('easyPieChart');
        //console.log(chart);
        $('.js_update').on('click', function() {
            chart.update(Math.random()*100);
        });
    });*/

    //jQuery(function($) {
        $(window).resize(function(){
            var windowWidth =  $(window).width();
            var windowHeight = $(window).height();

            if(windowWidth <= 768){
                $('.banner').css({'height': windowHeight });
                $('section:not(.footer)').css({ 'min-height': windowHeight });
            } else {
                $('.banner').css({'height': windowHeight - ($('.menu .navbar-wrapper .navbar-header').outerHeight() + 20) });
                $('section:not(.footer)').css({ 'min-height': windowHeight - ($('.menu .navbar-wrapper .navbar-header').outerHeight() + 20) });
            }
        });

        $(document).scroll(function(){
            onHabilidades();
        });
        
        $(document).ready( function() {



            /*$(window).bind('mousewheel DOMMouseScroll', function(event){
                if($(window).width() <= 768){
                    var scroll = $(window).scrollTop();
                    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                        $(".stuckMenu").css({"top": 0});
                        $(".stuckMenu").addClass("isStuck");
                    } else {
                        if(scroll > $(".stuckMenu").outerHeight()){
                            $(".stuckMenu").removeClass("isStuck");
                            $(".stuckMenu").css({"top": -$(".menu").outerHeight()});
                        }
                    }
                }
            });*/
            
            //jQuery.scrollSpeed(15, 500, 'easeOutCubic');
            
            /*$('body').umbg({
                'mediaPlayerType': 'YouTube', // YouTube, Vimeo, Dailymotion, Wistia, HTML5, Image, or Color.
                'mediaId': 'eKbFuqvWi8k', // Use the video id . For HTML5 use the location and video filename.
                'mediaPoster': 'images/laferrari.jpg', // Location of video poster to display for mobile.
                'audio': 0,
                'loop': 1,
                'controlBgColor': 'rgba(231, 76, 60,0.6)',
                'disableOnMobileVideoOnly': 0,
                'disableOnMobilePhonesOnly': 0,
                'displayControls': 0,
                'videoQuality': "default"
            });*/
            
            // for portfoli lightbox jquary
            /*var $chosenSheet,
            $stylesheets = $("a[id^=theme-]");*/

            // run rlightbox
            $(".lb").rlightbox();
            //$(".lb_title-overwritten").rlightbox({overwriteTitle: true});
            
            window.addEventListener('DOMContentLoaded', function() {
                "use strict";
                var ql = new QueryLoader2(document.querySelector("body"), {
                    barColor: "rgba(31, 152, 209, 1)",
                    backgroundColor: "#0F121C",
                    percentage: false,
                    barHeight: 1,
                    minimumTime: 1000,
                    fadeOutTime: 3000
                });
            });

            //enabling stickUp on the '.navbar-wrapper' class
            jQuery(function($) {
                $('.navbar-wrapper').stickUp({
                    parts: {
                        0: 'home',
                        1: 'sobremi',
                        2: 'trabajos',
                        3: 'habilidades',
                        4: 'experiencia',
                        //5: 'educacion',
                        5: 'contacto'
                    },
                    itemClass: 'menuItem',
                    itemHover: 'active',
                    topMargin: 'auto'
                });
            });

            // for banner height js
            /*var windowWidth =  $(window).width();
            var windowHeight = $(window).height();*/

            /*if(windowWidth <= 768){
            $('.banner').css({'height': windowHeight });
            $('section').css({'min-height': windowHeight });
            } else {
            $('.banner').css({'height': windowHeight -"60" });
            $('section').css({'min-height': windowHeight -"60" });
            }*/

            /*$('.navbar-collapse').on('shown.bs.collapse', function() {
            var topFix = $(window).height() - $(".menu").height();
            $('html,body').animate({ scrollTop: topFix + 130 }, 1000);
            });*/


            //jQuery(function($) {
                //$(window).resize();
            //});

            //var windowBottom = $(window).height();
            
            //$('.parallax').scrolly({bgParallax: true});
            //console.log(nagativeValue)

            //$("body").queryLoader2();

            /*var timer;	//timer for splash screen

            //calling jPreLoader
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
            console.log("done!");
            },
            splashFunction: function() {  

            //passing Splash Screen script to jPreLoader
            $('#jSplash').children('section').not('.selected').hide();
            $('#jSplash').hide().fadeIn(800);

            timer = setInterval(function() {
            splashRotator();
            }, 4000);
            }
            }, function() {
            clearInterval(timer);
            });

            //create splash screen animation
            function splashRotator(){
            var cur = $('#jSplash').children('.selected');
            var next = $(cur).next();

            if($(next).length != 0) {
            $(next).addClass('selected');
            } else {
            $('#jSplash').children('section:first-child').addClass('selected');
            next = $('#jSplash').children('section:first-child');
            }

            $(cur).removeClass('selected').fadeOut(800, function() {
            $(next).fadeIn(800);
            });
            }*/
            
            /*var gMap;

            gMap = new GMaps({
            div: '#gMap',
            lat: -32.9523035,
            lng: -60.6981577
            });

            gMap.drawOverlay({
            lat: gMap.getCenter().lat(),
            lng: gMap.getCenter().lng(),
            content: '<div class="overlay">Lima<div class="overlay_arrow above"></div></div>',
            verticalAlign: 'top',
            horizontalAlign: 'center'
            });*/

            /*var mapOptions = {
            zoom: 17,
            center: {
            lat: -32.9523035,
            lng: -60.6981577
            }
            };
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);*/
            
            var wow;
            wow = new WOW({
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0,          // default
                mobile:       true,       // default
                live:         true        // default
            });
            wow.init();
            
            // init controller
            /*var controller = new ScrollMagic.Controller();

            // build scene
            var scene = new ScrollMagic.Scene({
                    triggerElement: "#trigger"
                }).setVelocity("#animate", {
                    opacity: 0
                },{
                    duration: 400
                }).addTo(controller);*/
                //}).addIndicators().addTo(controller);
            
            (function($) {
                var $innerS0 = $('.innerS0'),
                $innerS1 = $('.innerS1'),
                $faAngleDown = $('.fa-angle-down-holder'),
                $exCon  = $('.exCon'),
                $textoInicio = $('.texto-inicio'),
                $clouds = $('.clouds'),
                $particles = $('#particles-js');

                // init
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
                
                /*TweenMax.staggerFrom([
                    '#brick1',
                    '#brick2',
                    '#brick3'
                ], 2, {
                    y: 400
                }, 0.2);*/

                /*new ScrollMagic.Scene({
                    triggerElement: [
                    '#brick1',
                    '#brick2',
                    '#brick3'
                ],
                    offset: 50
                })
                .addTo(ctrl)
                .triggerHook("onEnter")
                .setTween(TweenMax.from([
                    '#brick1',
                    '#brick2',
                    '#brick3'
                ], 0.5, { x: windowWidth, delay : 0.5 }, 1));*/
                
           })(jQuery);
            
            $("ul.trabajosContainer li span.hoverBox .linKed.disabled").click(function(e) {
                e.preventDefault();
                return false;
            });

            $(".navbar.navbar-inverse.navbar-static-top a").click(function(e) {
                e.preventDefault();
                $(".navbar-collapse").addClass("hideClass collapse");
            });

            /*$(".navbar.navbar-inverse.navbar-static-top a").click(function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                $( ".navbar-collapse").addClass("collapse");
            });

            $(".navbar.navbar-inverse.navbar-static-top a").click(function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                $(".navbar-collapse").removeClass("in");
            });*/

            $(".navbar-toggle" ).click(function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                $( ".navbar-collapse").removeClass("hideClass");
            });

            $('.mapArea').click(function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                $('.mapArea iframe').css("pointer-events", "auto");
            });

            $(".mapArea").mouseleave(function() {
              $('.mapArea iframe').css("pointer-events", "none"); 
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
            
            // Somth page scroll
            //$(function() {
                //$('a[href*=#]:not([href=#])').click(function() {
                $('.menuItem a').click(function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    
                    var hdifExtra = 20;

                    if($(window).width() <= 768){
                        $('.btn-navbar').click();
                        if($(".navbar-collapse").hasClass("in")){ $('.navbar-toggle').click(); }
                        
                        hdifExtra = 2;
                    }

                    //window.location.hash = $(this).attr("href");

                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        //console.log(target);

                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                        /*if(this.hash == "#home"){
                            $(window).resize();
                        }*/

                        if (target.length) {
                            //var windowWidth =  $(window).width();
                            var hdif = ($('.menu .navbar-wrapper .navbar-header').outerHeight() + hdifExtra);
                            var sT = target.offset().top;
                            var page = $("html, body");

                            /*if(windowWidth <= 768){
                                hdif = 0;
                            } else {*/
                                //hdif = $('.menu .navbar-wrapper').outerHeight();
                            //}

                            page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
                                page.stop();
                            });

                            page.animate({ scrollTop: sT - hdif }, 1500, function(){
                               page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                            });

                            // easeInOutExpo
                            // easeOutBounce

                            /*page.animate({
                                scrollTop: target.offset().top -hdif
                            }, 1000);*/

                            //return false;
                        }
                    }
                });
            //});
            
            validate_and_submit_forms();
            onHabilidades();
            $(window).resize();
            
            /*particlesJS.load('particles-js', 'particles.json', function() {
                console.log('callback - particles.js config loaded');
            });*/
            
        });
    //});
    
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

$(window).load(function() {
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
});

/*
$(window).load(function() {
    fillTopper();
    var topperHeight = $(window).height()
    var scrollProgress = 5;
    var topperScrollMagicController = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    function getTopperHeight() {
        return topperHeight / 1.5;
    }
    $(window).resize(function() {
        topperHeight = $(window).height();
        $('#topper').height($(window).height());
        $('html').addClass('force-gpu').removeClass('force-gpu');
    });
    var starScene = new ScrollScene({
        triggerElement: '#topper',
        duration: getTopperHeight,
        offset: 0
    })
    .addTo(topperScrollMagicController)
    .on('progress', function(e) {
        scrollProgress = e.progress * 100 * 2;
        if (scrollProgress <= 5) {
            scrollProgress = 5;
        }
    })
    .on('start', function(e) {
        $('body').addClass('hide-those-particles');
    });
    var camera, scene, renderer, mouseX = 0, mouseY = 0, particles = [];
    initStars();
    function initStars() {
        camera = new THREE.PerspectiveCamera(80, $('#topper').width() / $('#topper').height(), 1, 4000 );
        camera.position.z = 1000;
        scene = new THREE.Scene();
        scene.add(camera);
        renderer = new THREE.CanvasRenderer();
        renderer.setSize( $('#topper').width(), $('#topper').height() );
        document.getElementById('topper').appendChild( renderer.domElement );
        makeParticles();
        document.addEventListener( 'mousemove', onMouseMove, false );
        setInterval(update,1000/30);
    }
    function update() {
        updateParticles();
        renderer.render( scene, camera );
    }
    function makeParticles() {
        var particle, material;
        for ( var zpos= -1000; zpos < 1000; zpos+=5 ) {
            material = new THREE.ParticleCanvasMaterial( { color: 0x81dbeb, program: particleRender } );
            particle = new THREE.Particle(material);
            particle.position.x = Math.random() * 1000 - 500;
            particle.position.y = Math.random() * 1000 - 500;
            particle.position.z = zpos;
            particle.scale.x = particle.scale.y = 1;
            scene.add( particle );
            particles.push(particle);
        }
    }
    function particleRender( context ) {
        context.beginPath();
        context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
        context.fill();
    };
    function updateParticles() {
        for(var i=0; i<particles.length; i++) {
            particle = particles[i];
            particle.position.z +=  scrollProgress * 0.1;
            if(particle.position.z>1000) particle.position.z-=2000;
        }
    }
    function onMouseMove( event ) {
    }
    introStuff();
});

function introStuff() {
    $('body').addClass('show-background');
    setTimeout(function() {
        $('body').addClass('show-stars');
    }, 500);
}
function fillTopper() {
    $('#topper').height($(window).height());
}*/

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
                        if (e[0]["message"] !== undefined && e[0]["message"] != "" && e[0]["message"] != "success") {
                            var d = '<div class="alert">' + e[0]["message"] + "</div>";
                            $(this).after(d);
                            $(this).siblings(".alert").fadeIn("fast");
                        }
                    }
                }
            })
        });
        /*c.find("#form-captcha-refresh").click(function () {
            reset_captcha(c);
        });*/
        c.submit(function (e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            
            $(this).find(".form-loader").fadeIn("fast");
            var d = $(this).attr("action");
            if (d === undefined && d == "") {
                return false;
            }
            //$(this).find(".form-general-error-container .alert").fadeOut("fast");
            $(this).find(".alert").remove();
            /*$(this).find(".form-general-error-container").fadeOut("fast", function () {
                $(this).empty();
            });*/
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
            if (f == true) {
                $(this).find(".form-loader").fadeOut("fast");
                return false;
            }
            $.ajax({
                type: "POST",
                url: d,
                data: $(this).serialize(),
                dataType: "html",
                success: function (k) {
                    //console.log(k);
                    c.find(".form-loader").fadeOut("fast");
                    var l = (k == "success") ? true : false;
                    var h = (k == "captcha") ? false : true;
                    var g = "";
                    
                    switch (k) {
                        case "success":
                            //g = "Su consulta se envio con exito!";
                            $(".form-general-error-container .success").fadeIn("fast");
                            //console.log($(this).find(".form-general-error-container .success"));
                            reset_forms();
                            break;
                        /*case "captcha":
                            g = "Incorrect text entered. (Case-sensitive)";
                            break;*/
                        case "incomplete":
                            //g = "Por favor, complete los campos requeridos.";
                            $(".form-general-error-container .incomplete").fadeIn("fast");
                            break;
                        case "error":
                            //g = "Ocurrio un error. Por favor, intente nuevamente.";
                            $(".form-general-error-container .error").fadeIn("fast");
                            break;
                    }
                    
                    /*var j = '<div class="alert ';
                    j += (l == true) ? "success" : "error";
                    j += '">' + g + "</div>";*/
                    
                    if (!h) {
                        c.find("#form-captcha").parent(".form-group").append(j);
                        c.find("#form-captcha").siblings(".alert").fadeIn("fast");
                    } else {
                        /*c.find(".form-general-error-container").html(j).fadeIn("fast", function () {
                            $(this).delay(10000).fadeOut("fast", function () {
                                $(this).html("");
                            });
                        });*/
                        $(".form-general-error-container .success, .form-general-error-container .incomplete, .form-general-error-container .error").delay(10000).fadeOut("fast");
                    }
                    
                    //reset_captcha(c);
                    if (l == true) {
                        c.find(".form-control").val("");
                    }
                }, error: function (h) {
                    c.find(".form-loader").fadeOut("fast");
                    $(this).find(".form-general-error-container .error").fadeIn("fast");
                    /*var g = '<div class="alert">Ocurrio un error. Por favor, intente nuevamente.</div>';
                    c.find(".form-general-error-container").html(g).fadeIn("fast");*/
                }
            })
        })
    })
}

function reset_forms() {
        $(".validate-field").val("");
        $(".form-loader").fadeOut("fast");
        //a.find(".form-general-error-container .alert").fadeOut("fast");
        //a.find(".alert").remove();
        //a.find(".form-general-error-container").empty().hide();
        //reset_captcha(b);
}

/*function reset_captcha(b) {
    var a = (b !== undefined && b.length > 0) ? b : $("form.validate-form");
    a.each(function () {
        var e = $(this);
        var c = e.find("#form-captcha-img");
        if (c.length > 0 && e.is(":visible")) {
            var f = new Date().getTime();
            c.replaceWith('<img id="form-captcha-img" src="php/form_captcha/captcha_img.php?t=' + f + '" style="display:none">');
            e.find("#form-captcha").val("");
            setTimeout(function () {
                e.find("#form-captcha-img").show()
            }, 500)
        }
    })
}*/

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
            
            if (h == true && (g == "" || g === null || g === undefined)) {
                f.message = "Este campo es obligatorio.";
            }
            
            if (e == "string" && (g != "" && g !== null && g !== undefined)) {
                if (g.match(/^[a-z0-9 .\-]+$/i) == null) {
                    f.message = "Caracteres inválidos.";
                }
            } else {
                if (e == "email" && (g != "" && g !== null && g !== undefined)) {
                    if (g.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
                        f.message = "Ingresá un email válido.";
                    }
                } else {
                    if (e == "phone" && (g != "" && g !== null && g !== undefined)) {
                        if (g.match(/^\(?\+?[\d\(\-\s\)]+$/) == null) {
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