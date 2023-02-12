$(document).ready(function() {
    sliderdots('#slid ');

    var slider = $('.slider').bxSlider({
        auto: true,
        adaptiveHeight: true,
        autoControls: true
    });

    new WOW().init();


    $('.js-call, .popup .close').on("click", function(event) {
        event.preventDefault();
        $('.popup').toggle();
    });
    $('.js-zakaz, .popup2 .close').on("click", function(event) {
        event.preventDefault();
        $('.popup2').toggle();
    });
    $('.js-calc-price, .popup3 .close').on("click", function(event) {
        event.preventDefault();
        $('.popup3').toggle();
    });

});

function pend(name) {
    $.post( 'send.php', $('#'+name).serialize(), function(callback) {
        if (callback === "Мы свяжемся с вами в ближайшее время" || callback === "Сообщение отправлено, спасибо") {
            $('.popup3, .popup2, .popup ').hide();
            $('.thnk').show().delay(2000).fadeOut();
        } else {
            console.log ( callback);
            $('#'+name).addClass('req');

            setTimeout(function(){
                $('#'+name).removeClass('req');
            }, 2000);
        }
    });
}

function sliderdots( name ){
    var k = $(name + 'li').length, n = 0, inter = 7000;
    goo();
    for(var i=1; i<k; i++)  {
        $(name + 'nav').append('<a></a>');
    }
    $(name + 'nav > a').click(function () {
        clearInterval(id);
        goo();
        $(name + 'nav > a').removeClass( "active" );
        $(this).addClass( "active" );
        n = $(this).index();
        $(name + '> li').removeClass( "active" ).eq(n).addClass( "active" );
        $(this).parent().attr("name", n);
        return n;
    });
    function goo() {
        id = setInterval(function() {
            n++; if(n >= k) {n = 0}
            $(name + 'nav > a').eq(n).click();
        }, inter);
    }
    $(name + 'ins').click(function () {
        n=n-1; if(n < 0) {n = k-1} $(name + 'nav > a').eq(n).click();
        clearInterval(id);
        goo();
    });
    $(name + 'del').click(function () {
        n=n+1;  if(n > k-1) {n = 0} $(name + 'nav > a').eq(n).click();
        clearInterval(id);
        goo();
    });
}