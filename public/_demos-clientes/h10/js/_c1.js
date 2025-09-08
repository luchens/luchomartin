$(".js-dropdown > span").on("click", function (e) {
	e.preventDefault();
	$(".c7__container").removeClass("show");
	$(".js-topbar__links-bottom .dropdown").removeClass("active");
	$(".js-dropdown").removeClass("dropdown-onclick--active");
	$(this).parent().addClass("dropdown-onclick--active");
	$('.c2-c3__container').css('z-index',5);
	$('.c2-c3__container.bottom').css('z-index',3);
});

$(".js-topbar__links-bottom > .dropdown > .dropdown__toggler").on("click", function (e) {
	e.preventDefault();

	$(".c7__container").removeClass("show");
	$(".js-dropdown").removeClass("dropdown-onclick--active");
	$(".js-topbar__links-bottom > .dropdown").removeClass("active");
	$(this).parent().addClass("active");
	/*if($(this).parent().hasClass("active")){
		$(this).parent().removeClass("active");
	} else {
		$(this).parent().addClass("active");
	}*/
});

$(".topbar__links-bottom li .btn-reservar").on("click", function (e) {
	e.preventDefault();
	$(".topbar__links-bottom .dropdown").removeClass("active");
	$(".js-dropdown").removeClass("dropdown-onclick--active");
	$(".c7__container").toggleClass("show");
});

$(".topbar-main__container-right .container-right__desktop .c4-01__bottom-link.experiencias").on("click", function (e) {
	$(".topbar__links-bottom li.dropdown.active").removeClass("active");
	$('html, body').animate( { scrollTop : $("#experiencias-home").offset().top - 200}, 300 );
});


/*$(".topbar-desplegable__login-titles > span").on("click", function (e) {
	e.preventDefault();
	$(".topbar-desplegable__login-titles > span").removeClass("topbar-desplegable__activeitem");
	$(this).addClass("topbar-desplegable__activeitem");

	$(this).parent().parent().find(".topbar-desplegable__login-content").removeClass("active");
	if($(this).hasClass("form-login-club-h10")){
		$(this).parent().parent().find(".topbar-desplegable__login-content.form-login-club-h10").addClass("active");
	}
	if($(this).hasClass("form-acceso-agencias")){
		$(this).parent().parent().find(".topbar-desplegable__login-content.form-acceso-agencias").addClass("active");
	}
});*/

$(".topbar-main .topbar-main__container-left .menu-icon__mobile-click").on("click", function (e) {

	e.preventDefault();
	$(".topbar-main-mobile").scrollTop();

	$(this).toggleClass("active");

	if($(".topbar-main-mobile").hasClass("open")){
		$(".topbar-main-mobile").removeClass("open");
		$("body").removeClass("open-menu");
		$(".topbar-main").removeClass("open-menu");
		$(".c7__container").removeClass("open-menu-hidden");
		$("body").removeClass("no-scroll-y");
	} else {
		$(".topbar-main-mobile").addClass("open");
		$("body").addClass("open-menu");
		$(".topbar-main").addClass("open-menu");
		$(".c7__container").addClass("open-menu-hidden");
		$('html, body').animate( { scrollTop : 0 }, 300 );
		$("body").addClass("no-scroll-y");
	}

	$(".topbar-main-mobile-holder .topbar-main-accordion .topbar-main-accordion-content .topbar-main-accordion-sub .topbar-main-accordion-sub-sub-content").removeClass("open");
	$(".topbar-main-mobile-holder .topbar-main-accordion .topbar-main-accordion-content .topbar-main-accordion-sub .topbar-main-accordion-sub-sub-title").removeClass("active");
	$(".topbar-main-mobile-holder .topbar-main-accordion").removeClass("open");
	$(".topbar-main-mobile-holder .topbar-main-mobile ul li .btn").removeClass("active");

	if($(".dropdown__content.dropdown_menu-01").hasClass("active")){
		$(".dropdown__content.dropdown_menu-01").removeClass("active");
	} else {
		$(".dropdown__content.dropdown_menu-01").addClass("active");
	}

	console.log(window.innerHeight)
	console.log($(".topbar-main-mobile").height()) 
	
});

$(".topbar-main__container-right .header__icon-mobile.contactanos").on("click", function (e) {
	e.preventDefault();

	if($(".topbar-main-mobile-contactanos").hasClass("open")){
		$(".topbar-main-mobile-contactanos").removeClass("open");
		$("body").removeClass("no-scroll-y");
	} else {
		$('html, body').animate( { scrollTop : 0 }, 300 );
		$(".topbar-main-mobile-contactanos").addClass("open");
		$("body").addClass("no-scroll-y");

	}
});

$(".topbar-main__container-right .header__icon-mobile.login").on("click", function (e) {
	e.preventDefault();

	if($(".topbar-main-mobile-login").hasClass("open")){
		$(".topbar-main-mobile-login").removeClass("open");
		$("body").removeClass("no-scroll-y");
	} else {
		$('html, body').animate( { scrollTop : 0 }, 300 );
		$("body").addClass("no-scroll-y");
		$(".topbar-main-mobile-login").addClass("open");
	}
});

$(".topbar-main__container-right .header__icon-mobile.logueado").on("click", function (e) {
	e.preventDefault();

	if($(".topbar-main-mobile-cerrar-sesion").hasClass("open")){
		$(".topbar-main-mobile-cerrar-sesion").removeClass("open");
		$("body").removeClass("no-scroll-y");
	} else {
		$('html, body').animate( { scrollTop : 0 }, 300 );
		$("body").addClass("no-scroll-y");
		$(".topbar-main-mobile-cerrar-sesion").addClass("open");
	}
});

$(".topbar-desplegable__logueado-container").on("click", function (e) {
	e.preventDefault();
	$(this).parent().removeClass("dropdown-onclick--active");
});

$(".dropdown-onclick__content").mouseleave(function(e) {
  console.log (e);
  $('.c2-c3__container').css('z-index',3);

  if ((!($(e.target).hasClass("topbar-desplegable__logueado-container"))) && (!($(e.target).hasClass("topbar-desplegable__login-container"))) && (!($(e.target).hasClass("topbar-desplegable__reservas-container"))) )
	  $(this).parent().removeClass("dropdown-onclick--active");
});

$(window).click(function(e) {
		if ( (!($(event.target).hasClass('personsvg'))) && (!($(event.target).hasClass('link_session'))) && ($(".dropdown-onclick.dropdown-inicio-sesion").hasClass("dropdown-onclick--active")))
			$(".dropdown-onclick.dropdown-inicio-sesion").removeClass("dropdown-onclick--active");
		if ( (!($(event.target).hasClass('link_reservas'))) && ($(".dropdown-onclick.dropdown-reservas").hasClass("dropdown-onclick--active")))
			$(".dropdown-onclick.dropdown-reservas").removeClass("dropdown-onclick--active");
		if ( (!($(event.target).hasClass('hotel-destino'))) && ($(".show-open-hotel-destino-2-holder").hasClass("open")))
			$(".show-open-hotel-destino-2-holder").removeClass("open");
		if ( (!($(event.target).hasClass('input'))) && (!($(event.target).hasClass('habitacion')))  && ($('.c7__container input[habitacionfilter]').hasClass("show-open-opciones")))
			$('.c7__container input[habitacionfilter]').removeClass("show-open-opciones");
});
  
$('.topbar-desplegable__login-container').click(function(event){
	event.stopPropagation();
});
$('.topbar-desplegable__reservas-container').click(function(event){
	event.stopPropagation();
});
$('.show-open-hotel-destino-2-holder').click(function(event){
	event.stopPropagation();
});
$('.show-open-opciones-holder').click(function(event){
	event.stopPropagation();
});




$(".dropdown__content").mouseleave(function() {
  $(this).parent().removeClass("active");
});

$(".topbar-main-mobile ul li .btn.h10-hotels").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-accordion.mas").removeClass("open");
	$(".topbar-main-accordion.h10-ofertas").removeClass("open");
	$(".topbar-main-mobile ul li .btn").removeClass("active");
	$(".topbar-main-accordion.h10-hotels").addClass("open");
	$(this).addClass("active");
});

$(".topbar-main-mobile ul li .btn.h10-ofertas").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-accordion.mas").removeClass("open");
	$(".topbar-main-accordion.h10-hotels").removeClass("open");
	$(".topbar-main-mobile ul li .btn").removeClass("active");
	$(".topbar-main-accordion.h10-ofertas").addClass("open");
	$(this).addClass("active");
});

$(".topbar-main-mobile ul li .btn.mas").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-accordion.h10-hotels").removeClass("open");
	$(".topbar-main-accordion.h10-ofertas").removeClass("open");
	$(".topbar-main-mobile ul li .btn").removeClass("active");
	$(".topbar-main-accordion.mas").addClass("open");
	$(this).addClass("active");
});

$(".topbar-main-mobile-holder .topbar-main-accordion .topbar-main-accordion-title").on("click", function (e) {
	e.preventDefault();

	/*if($(this).next().hasClass("open")){
		$(this).next().removeClass("open");
	} else {
		$(this).next().addClass("open");
	}*/

//	$(this).next().toggleClass("open");
//	$(this).toggleClass("active");
});

$(".topbar-main-mobile ul li .topbar-main-accordion .topbar-main-accordion-content .topbar-main-accordion-sub .topbar-main-accordion-sub-title.dropdown").on("click", function (e) {
	e.preventDefault();
	$(this).next().toggleClass("open");
	$(this).toggleClass("active");
});

$(".topbar-main-mobile-holder .topbar-main-accordion .topbar-main-accordion-content .topbar-main-accordion-sub .topbar-main-accordion-sub-sub-title.dropdown").on("click", function (e) {
	e.preventDefault();
	$(this).next().toggleClass("open");
	$(this).toggleClass("active");

	/*
	$(".topbar-main-mobile-holder .topbar-main-accordion .topbar-main-accordion-content .topbar-main-accordion-sub .topbar-main-accordion-sub-sub-title.dropdown").removeClass("active");
	$(".topbar-main-mobile-holder .topbar-main-accordion .topbar-main-accordion-content .topbar-main-accordion-sub .topbar-main-accordion-sub-sub-content").removeClass("open");
	$(this).next().addClass("open");
	$(this).addClass("active");
	*/
});

$(".topbar-main-mobile-holder .topbar-main-accordion .btn-close").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-mobile-holder .topbar-main-accordion").removeClass("open");
	$(".topbar-main-mobile-holder .topbar-main-mobile ul li .btn").removeClass("active");
});

$(".topbar-main-btns-bottom .btn").on("click", function (e) {
	e.preventDefault();

	if($(this).hasClass("idioma")){
		$(".topbar-main-mobile-idioma").toggleClass("open");
	} else if($(this).hasClass("reservas")){
		$(".topbar-main-mobile-reservas").toggleClass("open");
	}

});

$(".topbar-main-mobile-cerrar-sesion .holder .title .close").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-mobile-cerrar-sesion").removeClass("open");
});

$(".topbar-main-mobile-idioma .holder .title .close").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-mobile-idioma").removeClass("open");
});

$(".topbar-main-mobile-reservas .holder .title .close").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-mobile-reservas").removeClass("open");
});

$(".topbar-main-mobile-contactanos .holder .title .close").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-mobile-contactanos").removeClass("open");
	$("body").removeClass("no-scroll-y");
});

$(".topbar-main-mobile-login .holder .title .close").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-mobile-login").removeClass("open");
	$("body").removeClass("no-scroll-y");
});

$(".topbar-main-mobile-login .holder .content ._login-container ._login-titles > span").on("click", function (e) {
	e.preventDefault();
	$(".topbar-main-mobile-login .holder .content ._login-container ._login-titles > span").removeClass("_activeitem");
	$(this).addClass("_activeitem");

	$(this).parent().parent().find("._login-content").removeClass("active");
	if($(this).hasClass("form-login-club-h10")){
		$(this).parent().parent().find("._login-content.form-login-club-h10").addClass("active");
	}
	if($(this).hasClass("form-acceso-agencias")){
		$(this).parent().parent().find("._login-content.form-acceso-agencias").addClass("active");
	}
});



/*$(".js-sub-acordeon").on("click", function (e) {
	e.preventDefault();
	$(".js-sub-acordeon").not(this).removeClass("sub-acordeon-onclick--open");
	$(this).toggleClass("sub-acordeon-onclick--open");
});*/
