/*Setka on-off button script*/

$(document).ready(function() {
	$('#Button_ID').click (function() {$('.grid').slideToggle(20);});  $('.grid').click (function() {$(this).slideToggle(20);});
});


/* Plavnoe poyavlenie stranic */

$(document).ready(function() {
	$("body").css("display", "none"); $("body").fadeIn(1000);
});

/* Скрываем показываем подсказки */

$(document).ready(function() {
	$('#content h4 a').click (function() {
	$( this ).parent().next('p').slideToggle(200);;
	
	});
});


/* Слайдер доп продуктов */

$(document).ready(function(){

	var x = 3 					//Вводим видимое количчество элементов
	var id = '#relate ';		//Имя контейнера с галлереей
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

/* Слайдер доп продуктов */

$(document).ready(function(){

	var x = 3 					//Вводим видимое количчество элементов
	var id = '#relate2 ';		//Имя контейнера с галлереей
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

/* СлайдерДопстлайдер товара*/
$(document).ready(function(){

	var x = 3 					//Вводим видимое количчество элементов
	var id = '#pics ';		//Имя контейнера с галлереей
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