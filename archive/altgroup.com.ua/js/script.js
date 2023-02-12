$(document).ready(function() {
    //sliderdots('#slid ');
    cliko(".works ");
    cliko2(".works ");

    new WOW().init();

    $('.gall').bxSlider({
        auto: true
    });

    var slider = $('.menus').bxSlider({
        slideMargin: 20,
        minSlides: 1,
        maxSlides: 1
    });
    //
    //$('.works menu.menus li').on("click", function(event) {
    //    var slideQty = slider.getSlideCount();
    //    //$('.works menu.menus li').not( ".bx-clone" ).css( "border", "3px solid red" );var current = slider.getCurrentSlide();
    //    var cu = $(this).index();
    //    //cu < 0 ?  console.log('----') : false;
    //    console.log(cu, slideQty);
    //});
    //

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
            alert(callback);
        }
    });
}

function cliko( name ){
    $(name + "menu.menus li").click(function (event) {
        event.preventDefault();
        n = $(this).attr( "data-no");
        //alert(n);
        $(name + "menu.menus li").removeClass("active");
        $(this).addClass("active");
        $(name + "main article").removeClass("active");
        $(name + "main article").eq(n).addClass("active");
    });
}

function cliko2( name ){
    $(name + "menu:not(.menus) li").click(function (event) {
        event.preventDefault();
        n = $(this).index();
        $(name + "menu:not(.menus) li").removeClass("active");
        $(this).addClass("active");
        $(name + "main:not(.menus) article").removeClass("active");
        $(name + "main:not(.menus) article").eq(n).addClass("active");
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