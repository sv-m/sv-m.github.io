$(document).ready(function() {
	sc('.scrolz .scro1');
	sc('.scrolz .scro2');
	sc('.scrolz .scro3');
	sc('.scrolz .scro4');
	hi();
	cl();
	hiddenmore();
	menu();
	sliderdots('#sli ');

    $(document).ready(function() {
        $("select").selectBox();
    });
});

/* ------------------------------------ */

function sc( name ){
	n = $(name + " li").length;
	one = $(name + " li").outerWidth();
	var full = n*one;
	$(name).width(full);
}
function hi(){ 
	$("header .main").click(function() {
		$('.hidden').toggle();
	});

}
function cl(){ 
	$("article ins.close").click(function() {
		$(this).parent('article').hide();
	});

}
function hiddenmore(){ 
	$(".hiddenmorelink").click(function() {
		$(this).toggle();
		$(this).next().toggle();
	});
}

function menu(){ 
	$(".menu > li").click(function() {
		$(this).toggleClass("active");
	});
	$(".menu > .more.active").click(function() {
		$(this).toggleClass("active");
	});

    $(".profile p").click(function() {
        $(".submenu").toggleClass("active");
    });

    $(".prefspart h3").click(function() {
        $(this).parent().toggleClass("active");
    });
}


/* ------------------------------------ */

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