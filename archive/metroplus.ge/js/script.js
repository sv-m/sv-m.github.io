$(document).ready(function() {
    //sliderdots('#slid ');
    //cliko(".otztiv ");

    new WOW().init();

    $('.slider').bxSlider({
        auto: true
    });
    $('.slider2').bxSlider({
        auto: true
    });

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false;
    });
});


function sliderdots( name ){
    var k = $(name + 'li').length, n = 0, inter = 12000;
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

function cliko( name ){
    $(name + ".tab-h a").click(function (event) {
        event.preventDefault();
        n = $(this).index();
        $(name + ".tab-h a").removeClass("active");
        $(this).addClass("active");
        $(name + ".tab-c li").removeClass("active");
        $(name + ".tab-c li").eq(n).addClass("active");
    });
}

function pend(name) {
    $.post( 'send.php', $('#'+name).serialize(), function(callback) {

        if (callback === "Мы свяжемся с вами в ближайшее время" || callback === "Сообщение отправлено, спасибо") {
            //alert(callback);
            window.location.href = "thanks.html";
        } else {
            alert(callback);
        }
    });
}