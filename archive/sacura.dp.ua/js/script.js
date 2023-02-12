/*

Scripting by Orlov Igor

*/

/*----------------------- Слайдер сервисов ----------------------- */

$(document).ready(function(){
 function htmSlider(){

 var slideWrap = $('.slide-wrap'); /* обертка слайдера */
 var nextLink = $('.slider del'); /* кнопки вперед/назад и старт/пауза */
 var prevLink = $('.slider ins');
 var playLink = $('.auto'); 
 var is_animate = false; /* Проверка на анимацию */
 var slideWidth = $('.slide-item').outerHeight(); /* ширина слайда с отступами */
 var scrollSlider = slideWrap.position().top - slideWidth; /* смещение слайдера */
 
 /* ----------------------- Клик по ссылке на следующий слайд ----------------------- */
 nextLink.click(function(){
  if(!slideWrap.is(':animated')) {
    slideWrap.animate({top: scrollSlider}, 500, function(){
     slideWrap
     .find('.slide-item:first')
     .appendTo(slideWrap)
     .parent()
     .css({'top': 0});
    });
    }
 });
 
 /* Клик по ссылке на предыдующий слайд */
 prevLink.click(function(){
  if(!slideWrap.is(':animated')) {
  slideWrap
   .css({'top': scrollSlider})
   .find('.slide-item:last')
   .prependTo(slideWrap)
   .parent()
   .animate({top: 0}, 500);
  }
 });
 
 /* Функция автоматической прокрутки слайдера */
 function autoplay(){
  if(!is_animate){
  is_animate = true;
  slideWrap.animate({top: scrollSlider}, 500, function(){
   slideWrap
   .find('.slide-item:first')
   .appendTo(slideWrap)
   .parent()
   .css({'top': 0});
   is_animate = false;
  });
  }
 } 
  timer = setInterval(autoplay, 12000); 
 }

 htmSlider(); /* иницилизируем функцию слайдера */

});


/* ----------------------- Плавное появление страницы ----------------------- */

$(document).ready(function() {

	$("html").css("display", "none"); $("html").fadeIn(1500);

});


/* ----------------------- Анимации появления ----------------------- */

$(document).ready(function() {

	setTimeout(function(){
		$('#uno img').removeClass('none').addClass('animated bounceInRight');
	}, 1000);
	
	setTimeout(function(){
		$('#uno img').removeClass('none').addClass('animated bounceInRight');
	}, 1000);
	
});

/* ----------------------- Анимации при скроле ----------------------- */
	
$(document).ready(function() {
	
	$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();	
		if (currentScroll > 100) 		{
			$('#logo').addClass( 'animated fadeInDown');
			$('#uno .leav').addClass( 'animated bounceOutRight none');
			$('#dos .leav').removeClass('none').addClass( 'animated bounceInRight');
		} 
		if (currentScroll > 110)	{			
		}
	}); 	
	
});

/* ----------------------- Плавный переезд к якорю ----------------------- */

$(document).ready(function (){

    $("#cinqo blockquote > a").click(function (){
        $('html, body').animate({
            scrollTop: $("#diez").offset().top
        }, 1000);
    });

    $("#maplabel").click(function (){
        $('html, body').animate({
            scrollTop: $("#mapx").offset().top
        }, 1000);
    });


});

/* ----------------------- Дополнительная информация в пеимуществах  (раскрытие/скрытие) ----------------------- */

$(document).ready(function(){

	$('#tres > div > ul > li > p > a > strong').click (function() {
		$( this ).parent().parent().next('p').slideToggle(1000);
			return false;
	}); 
	
});

/* ----------------------- Подъем наверх ----------------------- */

$(document).ready(function(){
  $('#cinqo blockquote > span button').click(function () {
    $('body,html').animate({
      scrollTop: 0
      }, 2000);
    return false;
  }); 
});

/* ----------------------- Мегослайдер Орлова-Новикова ----------------------- */ 

$(document).ready(function(){
  var x = 4//Вводим видимое количчество элементов
  var id = '#otziv ';
  var plus= id+'ul li'
 
  var one = $(plus).outerWidth();
  var n = $(id+'ul li').length;
  var margL = $(plus).last().css('margin-left');  margL = parseInt(margL);
  var margR = $(plus).last().css('margin-right'); margR = parseInt(margR);
  var ones = margL+margR+one;
  var all = ((margL+margR+one)*n);
  var all2 = all+ 22
  var stop = -(all - x*ones);
  var current = 0;

  $(id+'ul').css('width',all2).css('left',current);

if (n <= x) {
  $(id+'del').hide();
}
  
    $(id+'ins').click(function (event) { 
      $(id+'del').show();
      current=current+ones /*смещаем влево*/
      $(id+'ul').css('left',current);
      if  (current==0) {
        $(id+'ins').hide();
      }
    });
  
    $(id+'del').click(function (event) { 
      $(id+'ins').show();
      current=current-ones /*смещаем вправо*/
      $(id+'ul').css('left',current);
      if  (current<=stop) {
        $(id+'del').hide();
      }
    });
    
  if  (current==0) {    $(id+'ins').hide(); }
  else if  (current==stop) {    $(id+'del').hide(); }
});
/* ----------------------- Мегослайдер Орлова-Новикова Работы ----------------------- */ 

$(document).ready(function(){
  var x = 5//Вводим видимое количчество элементов
  var id = '#works ';
  var plus= id+'ul li'
 
  var one = $(plus).outerWidth();
  var n = $(id+'ul li').length;
  var margL = $(plus).last().css('margin-left');  margL = parseInt(margL);
  var margR = $(plus).last().css('margin-right'); margR = parseInt(margR);
  var ones = margL+margR+one;
  var all = ((margL+margR+one)*n);
  var all2 = all+ 22
  var stop = -(all - x*ones);
  var current = 0;

  $(id+'ul').css('width',all2).css('left',current);

if (n <= x) {
  $(id+'del').hide();
}
  
    $(id+'ins').click(function (event) { 
      $(id+'del').show();
      current=current+ones /*смещаем влево*/
      $(id+'ul').css('left',current);
      if  (current==0) {
        $(id+'ins').hide();
      }
    });
  
    $(id+'del').click(function (event) { 
      $(id+'ins').show();
      current=current-ones /*смещаем вправо*/
      $(id+'ul').css('left',current);
      if  (current<=stop) {
        $(id+'del').hide();
      }
    });
    
  if  (current==0) {    $(id+'ins').hide(); }
  else if  (current==stop) {    $(id+'del').hide(); }
});

/* -----------------------  Переключение закладок  ----------------------- */
$(document).ready(function(){
    var name = '#zakladki ';
    var h = $(name + 'li.active').height();
    var h2 = $(name + 'a').height();
    var h3 = h2+h+110;    
    $(name).height(h3);
    $(name + 'a').click(function() {
        $(name + 'a').removeClass( "active" );
        $(name + 'li').removeClass( "active" );
        $(this).addClass( "active" );
        $(this).next().addClass( "active" );
        var h = $(name + 'li.active').height();
        var h2 = $(name + 'a').height();
        var h3 = h2+h+110;
        $(name).height(h3);
    });

    /* Клацалка*/
    $(document).ready(function interval(){
        var loop = 1;
        var id = setInterval(function() {
            loop++;
            var size = $(name + 'a').length;
            if(loop === size+1)
            {
            //clearInterval(id);
            loop = 1;
            }
            $(name + 'a.s0'+loop+'').click();
        }, 10000);
    });
}); 

/* -----------------------  Переключение закладок  ----------------------- */
$(document).ready(function(){
    var name = '#zakladki2 ';
    var h = $(name + 'li.active').height();
    var h2 = $(name + 'a').height();
    var h3 = h2+h+110;    
    $(name).height(h3);
    $(name + 'a').click(function() {
        $(name + 'a').removeClass( "active" );
        $(name + 'li').removeClass( "active" );
        $(this).addClass( "active" );
        $(this).next().addClass( "active" );
        var h = $(name + 'li.active').height();
        var h2 = $(name + 'a').height();
        var h3 = h2+h+110;
        $(name).height(h3);
    });
    /* Клацалка*/
    $(document).ready(function interval(){
        var loop = 1;
        var id = setInterval(function() {
            loop++;
            var size = $(name + 'a').length;
            if(loop === size+1)
            {
            //clearInterval(id);
            loop = 1;
            }
            $(name + 'a.s0'+loop+'').click();
        }, 10000);
    });
}); 
