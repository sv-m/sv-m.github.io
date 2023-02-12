$(document).ready(function() {
	rszMain();
	//clouds();
});

window.onresize = function(event) {
	rszMain();
};

/* Всплывающая форма */

function rszMain(){ 

	hh = $( window ).height() - $('#header').height() - $('#footer').height() - 80;
	$('.mainp').height(hh);
}

/**--------------------------------*/
function clouds() {

   $('#bgc').animate({
  'background-position-x': '-10%',
  'background-position-y': '-50%'
}, 10000, 'linear');

}


/*------------------------------------------*/
function goo(){

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