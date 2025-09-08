$(function() {

    $('.c36__container .js-c36-show').on('click', function(e) {
        e.preventDefault();

        console.log('entra');
        $(this). hide();
        $(this).closest('.c36__container').find('.c36__contenido-item').css('display', 'flex');
    });


});
