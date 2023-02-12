$(document).ready(function() {
	gool();
});


function gool(){
	/* Первая форма по айфонам S */
	$('#s12 .col span').click(function() {
		$('#s12 .col span').removeClass('active');
		$(this).addClass('active');
		col = $(this).attr('value');
		$('#s12 [name=col]').attr('value', col);
	});

	$('#s12 .mod span').click(function() {
		$('#s12 .mod span').removeClass('active');
		$(this).addClass('active');
		mod = $(this).attr('value');
		$('#s12 [name=mod]').attr('value', mod);
	});

	/* Вторая форма по айфонам С */
	$('#s19 .col span').click(function() {
		$('#s19 .col span').removeClass('active');
		$(this).addClass('active');
		col = $(this).attr('value');
		$('#s19 [name=col]').attr('value', col);
	});

	$('#s19 .mod span').click(function() {
		$('#s19 .mod span').removeClass('active');
		$(this).addClass('active');
		mod = $(this).attr('value');
		$('#s19 [name=mod]').attr('value', mod);
	});

	/* ----- Show menu ------*/


	$('#menu').click(function() { 
		$('#mmenu').toggle();

	});

	$('#s13').click(function() { 
		$('#s14').add('#s14').add('#s15').add('#s16').add('#s17').add('#s18').toggle();
	});

	/*------- popup------*/

	$('#s01 button').click(function() { 
		$('#popup').toggle();
	});

	/*$('#s12 input[type="submit"]').click(function() { 
		$('#popup').toggle();
	});

	$('#s19 input[value="купить"]').click(function() { 
		$('#popup').toggle();
	});*/

	$('#popup h5').click(function() { 
		$('#popup').toggle();
	});

	/*------- Actions  ------*/

	$('#popup .ver span').click(function() {
		$('#popup .ver span').removeClass('active');
		$(this).addClass('active');
		ver = $(this).attr('value');
		$('#popup').parent().find('[name=ver]').attr('value', ver);
	});

	$('#popup .col span').click(function() {
		$('#popup .col span').removeClass('active');
		$(this).addClass('active');
		col = $(this).attr('value');
		$('#popup').parent().find('[name=col]').attr('value', col);
	});

	$('#popup .mod span').click(function() {
		$('#popup .mod span').removeClass('active');
		$(this).addClass('active');
		mod = $(this).attr('value');
		var modd = $(this).find('strong').html();
		$('#popup').parent().find('[name=mod]').attr('value', mod);
		$('.summ').find('strong').html(modd);
		$('#popup').parent().find('[name=price]').attr('value', modd);
	});

	$('#pt00 del.nxt').click(function() {
		vv = $('#popup [name=ver] ').attr('value'); 
		if (vv == "iPhone5s") {
			$(this).parent().addClass('hide');
			$('#pt01').removeClass('hide');
			$('#pt01 .col span:first-child').click();
		}
		else if (vv == "iPhone5c") {
			$(this).parent().addClass('hide');
			$('#pt03').removeClass('hide');
			$('#pt03 .col span:first-child').click();
		}
	});

	$('#pt01 del.prv').click(function() {
		$(this).parent().addClass('hide');
		$('#pt00').removeClass('hide');
	});

	$('#pt01 del.nxt').click(function() {
		$(this).parent().addClass('hide');
		$('#pt02').removeClass('hide');
		$('#pt02 .mod span:first-child').click();
	});

	$('#pt02 del.prv').click(function() {
		$(this).parent().addClass('hide');
		$('#pt01').removeClass('hide');
	});

	$('#pt02 del.nxt').click(function() {
		$(this).parent().addClass('hide');
		$('#pt05').removeClass('hide');
	});

	$('#pt03 del.prv').click(function() {
		$(this).parent().addClass('hide');
		$('#pt00').removeClass('hide');
	});

	$('#pt03 del.nxt').click(function() {
		$(this).parent().addClass('hide');
		$('#pt04').removeClass('hide');
		$('#pt04 .mod span:first-child').click();
	});

	$('#pt04 del.prv').click(function() {
		$(this).parent().addClass('hide');
		$('#pt03').removeClass('hide');
	});

	$('#pt04 del.nxt').click(function() {
		$(this).parent().addClass('hide');
		$('#pt05').removeClass('hide');
	});

	$('#pt05 del.prv').click(function() {
		$(this).parent().addClass('hide');
		$('#pt00').removeClass('hide');
	});

	$('#pt05 del.nxt').click(function() {
		$(this).parent().addClass('hide');
		$('#pt06').removeClass('hide');
	});

}



