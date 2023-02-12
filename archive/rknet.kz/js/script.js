

/* Всплывающая форма */

$(document).ready(function(){

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

});

/* Имитация бурной деятельности */
$(document).ready(function(){

var h = $('#zakladki li.active').height();
		var h2 = $('#zakladki a').height();
		var h3 = h2+h+110;
		
		//alert(h3);
		$('#zakladki').height(h3);

	$('#header nav h4 a').click(function() {
		$('#header nav h4 a').removeClass( "active" );
		$(this).addClass( "active" );
	});
	
	$('menu a').click(function() {
		$('menu a').removeClass( "active" );
		$(this).addClass( "active" );
	});
	
	/* Кликалка закладок */
	
	$('#zakladki a').click(function() {
		$('#zakladki a').removeClass( "active" );
		$('#zakladki li').removeClass( "active" );
		$(this).addClass( "active" );
		$(this).next().addClass( "active" );
		
		var h = $('#zakladki li.active').height();
		var h2 = $('#zakladki a').height();
		var h3 = h2+h+110;
		
		//alert(h3);
		$('#zakladki').height(h3);
 	});
	
	
}); 

/* Клацалка слайдера*/

$(document).ready(function interval(){
	var loop = 1;
	var id = setInterval(function() {
		loop++;
		var size = $('#zakladki a').length;
		if(loop === size+1)
			{        
			//clearInterval(id);
			loop = 1;
			}
		$('#zakladki a.s0'+loop+'').click();
	}, 15000);
}); 

/* Мегослайдер Орлова-Новикова */

$(document).ready(function(){

	var x = 4 					//Вводим видимое количчество элементов
	var id = '#sl2 ';		//Имя контейнера с галлереей
	var plus= id+'ul li'		//Путь до ли
 
	var one = $(plus).outerWidth(); 										//Ширина одного элемента
	var n = $(id+'ul li').length; 											//Количество элементов
	var margL = $(plus).last().css('margin-left');	margL = parseInt(margL);//Левое поле
	var margR = $(plus).last().css('margin-right');	margR = parseInt(margR);//Првавое поле
	var ones = margL+margR+one;												//Сумарная ширина блока с полями
	var all = (margL+margR+one)*n; 											//Вся ширина
	var stop = -(all - x*ones) ;											//вычисляем положение стоп
	var current = 0;														//текущее сбрасываем до ноля

	$(id+'ul').css('width',all).css('left',current);						//Вставляем ширину всего смещаемого блока и ноль для смещения 
	
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
		
		if (current==0) {
			//setInterval(function() { $(id+'del').click();alert(current)}, 5000);
			//current=current+ones
			//window.clearInterval(intervalID)
		}
		

	if  (current==0) {
		$(id+'ins').hide();
	}
	else if  (current==stop) {
		$(id+'del').hide();
	}
	
	
});
