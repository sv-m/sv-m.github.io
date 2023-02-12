$(document).ready(function() {
	go();
	sliderdots('#sli ');
});


/* Всплывающая форма */

function go(){

	/* Запуск попап на формах */
	$('#header .btn1').click(function() {
		$('#popup').fadeIn(500);
	});
	
	/* Смена при отправке*/
	$('#popup form input[type="submit"]').click(function() {
		$('#popup').fadeOut(500);
		$('#popup2').fadein(500);
	});
	
	/* Закрытие */	
	$('.close').click(function() {
		$('#popup').fadeOut(500);
	});

}

/* -----------------------  Cлайдер с точечками ----------------------- */
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