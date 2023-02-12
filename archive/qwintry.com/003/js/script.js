$(document).ready(function() {
    sliderdots('#slid ');
});


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