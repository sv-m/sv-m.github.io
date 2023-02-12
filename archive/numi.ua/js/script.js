$(document).ready(function() {
    sliderdots('#sli ');
    masons();
    searc();
    cliko();
    mnu();
    mnu2();
    moreoplata();
});

$(window).load(function(){
    masons();
});



/* ------------------------------------ */
function moreoplata() {
    $('.moreoplata').click(function() {
        $('.moreoplatainfo').click();
    });
}


function mnu(){
    $('#srh  span').click(function() {
        $('#srh  ul').toggle();
    });
    $('#srh  ul li').click(function() {
        $('#srh  ul li').removeClass('active');
        $(this).addClass('active');
        $('#srh  ul').toggle();
        m = $(this).html();
        $('#srh  span').html(m);
        $('#srh  [name=city]').val(m);
    });
}
function mnu2(){
    $('#srh2  span').click(function() {
        $('#srh2  ul').toggle();
    });
    $('#srh2  ul li').click(function() {
        $('#srh2  ul li').removeClass('active');
        $(this).addClass('active');
        $('#srh2  ul').toggle();
        m = $(this).html();
        $('#srh2  span').html(m);
        $('#srh2  [name=city]').val(m);
    });
}

function sliderdots( name ){
    var k = $(name + 'li').length; 
    var n = 0;
    var inter = 7000; 
    
    goo();
    
    for(var i=1; i<k; i++)  { 
        $(name + 'nav').append('<a></a>');
    };
    $(name + 'nav > a').click(function () {
        clearInterval(id);
        goo();
        $(name + 'nav > a').removeClass( "active" );
        $(this).addClass( "active" );
        n = $(this).index();
        $(name + 'li').removeClass( "active" ).eq(n).addClass( "active" );
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

function masons(){

    $('.stars').masonry({
    itemSelector: '.stars li'
    });

    $('.likes').masonry({
    itemSelector: '.likes li'
    });
}


function searc() {
    $('.src').click(function () {
        $('#search').slideToggle();
    });
}

function cliko(){   
  $('#kladka section').click(function (event) { 
    n = $(this).index();
    //alert(n);
    $('#kladka section').removeClass('active');
    $(this).addClass('active');
    $('#kladkap section').removeClass('active');
    $('#kladkap section').eq(n).addClass('active');
  });
}