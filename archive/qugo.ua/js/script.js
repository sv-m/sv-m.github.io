$(document).ready(function() {
	goon();
});

$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});


/* ------------------------------------ */
function goon(){

	$('.seemore').click( function (){
		$(this).hide();
		$('.seemore_box').show();
	});

	$('.main-nav a').click(	function (){
		$('.hidden_menu').toggleClass('active');
		$('html').toggleClass('menuss');
	});

	$('.menu-button').click( function (){
		$('.hidden_menu').toggleClass('active');
		$('html').toggleClass('menuss');
	});
 		
	$('.search-button').click( function (){
		$('.search2').toggleClass('active');
	});


}
