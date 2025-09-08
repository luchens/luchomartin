$(".js-acordeon").on("click", function (e) {
	e.preventDefault();
	$(".js-acordeon").not(this).removeClass("acordeon-onclick--open");
	$(this).toggleClass("acordeon-onclick--open");
});

$(".js-sub-acordeon").on("click", function (e) {
	e.preventDefault();
	$(".js-sub-acordeon").not(this).removeClass("sub-acordeon-onclick--open");
	$(this).toggleClass("sub-acordeon-onclick--open");
});
