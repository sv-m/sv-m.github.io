$(document).ready(function() {
	sliderdots('#sli ');
	clk();
  heig();

  $( window).resize(function() {
    heig();
  });
});


function clk() {
	$('#srch a[type="submit"]').click(function () {
		$('#srch del').slideToggle(600);
	});
}


function heig() { 

  var maxHeight = $("#boxes span").height();
  $("#boxes span").each(function(){
    if ( $(this).height() > maxHeight ) 
    {
      maxHeight = $(this).height();
    }
  });  
  $("#boxes span").height(maxHeight);
}

/* -----------------------  Cлайдер с точечками ----------------------- */
function sliderdots( name ){
  var k = $(name + 'li').length; 
    var n = 0;
    var inter = 5000; 

    goo();

    for(var i=1; i<k; i++)  { 
      $(name + 'nav').append('<a></a>');
    };
    $(name + 'nav > a').click(function () {
        $(name + 'nav > a').removeClass( "active" );
        $(this).addClass( "active" );
        n = $(this).index();
        $(name + 'li').removeClass( "active" ).eq(n).addClass( "active" );
        $(this).parent().attr("name", n);
        return n;
        clearInterval(id);
        goo();
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