$(document).ready(function() {
    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 120) {
            $('.ir-arriba').fadeIn(300);
        } else {
            $('.ir-arriba').fadeOut(300);
        }
    });
});