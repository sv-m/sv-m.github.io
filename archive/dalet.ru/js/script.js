$(document).ready(function() {
	sliderdots('#sli ');
	day();
	callback();
	moremenu();
	htmSlider()
});


/* ------------------------------------ */


function moremenu() {
	$('.bigmenu').click(function(){
		$(this).toggleClass('active');
		$('.big_menu_katalog').slideToggle(500);
	});
}


function day() {        
	$('.color').click(function(){
		$('body').toggleClass('b');
		if ($('body').hasClass('b')){
			$(this).text('Хочу день');
		}
		else{
			$(this).text('Хочу ночь');
		}
	});
}

function sliderdots( name ){
	var k = $(name + '> li').length; 
	var n = 0;
	var inter = 5000; 
	
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

function callback(){ 
	$('header .back.write').click(function () {
		$('.pop').add('.pop .writeback').fadeIn(500);
	});
	$('header .back.call').click(function () {
		$('.pop').add('.pop .callback').fadeIn(500);
	});
	$('.pop .close').click(function () {
		$(this).parent().hide();
		$(this).parent().parent().fadeOut(500);
	});
}



function htmSlider(){
	var slideWrap = $('.slide-wrap'); /* обертка слайдера */
	var nextLink = $('.slider del'); /* кнопки вперед/назад и старт/пауза */
	var prevLink = $('.slider ins');
	var playLink = $('.auto');  
	var is_animate = false; /* Проверка на анимацию */
	var slideWidth = $('.slide-item').outerWidth(); /* ширина слайда с отступами */
	var scrollSlider = slideWrap.position().left - slideWidth; /* смещение слайдера */

	/* Клик по ссылке на следующий слайд */
	nextLink.click(function(){
	 if(!slideWrap.is(':animated')) {
		slideWrap.animate({left: scrollSlider}, 500, function(){
		 slideWrap
			.find('.slide-item:first')
			.appendTo(slideWrap)
			.parent()
			.css({'left': 0});
		});
	 }
	});

	/* Клик по ссылке на предыдующий слайд */
	prevLink.click(function(){
	 if(!slideWrap.is(':animated')) {
		slideWrap
		 .css({'left': scrollSlider})
		 .find('.slide-item:last')
		 .prependTo(slideWrap)
		 .parent()
		 .animate({left: 0}, 500);
	 }
	});

	/* Функция автоматической прокрутки слайдера */
	function autoplay(){
	 if(!is_animate){
		is_animate = true;
		slideWrap.animate({left: scrollSlider}, 500, function(){
		 slideWrap
			.find('.slide-item:first')
			.appendTo(slideWrap)
			.parent()
			.css({'left': 0});
		 is_animate = false;
		});
	 }
	} 
		timer = setInterval(autoplay, 10000); 
}