(function () {
    var method;
    var noop = function () {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
$('#mobile-button').click(function () {
    $('#header-nav').slideToggle();
});
$(document).ready(function () {
    var accordion = $('.accordion');
    var speed = 200;
    accordion.find('ul').hide();
    if ($('.accordion a[href="' + document.location.pathname + '"]').parent('li').parent('ul').length) {
        $('.accordion a[href="' + document.location.pathname + '"]').parent('li').parent('ul').show()
    }
    else {
        accordion.find('ul:first').show();
    }
    accordion.find('h3').click(function (e) {
        accordion.find('ul').slideUp(speed);
        $(this).next('ul').slideDown(speed);
    });
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }
});
