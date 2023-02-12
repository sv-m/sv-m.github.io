$(document).ready(function() {
	go();
	htmSlider();
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

/*----------------------- Слайдер  меню ----------------------- */
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
 