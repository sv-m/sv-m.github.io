$(document).ready(function(){

	var x = 4 					//Вводим видимое количчество элементов
	var id = '#related_products ';		//Имя контейнера с галлереей
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

$(document).ready(function(){

	var x = 4 					//Вводим видимое количчество элементов
	var id = '#related_products2 ';		//Имя контейнера с галлереей
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



$(document).ready(function(){

id = '.slider '
idin = '#act '

$(idin+'span:first').addClass('active');
$(id+'a:first').addClass('active');

$(idin+'> del').live('click', function (event) { 
	
	var this2 = $(idin+'span.active');
	var this3 = $(id+'nav a.active');
	
	if (!$(this2).is(':last-child')) {
		$(this2).next().addClass('active');
		$(this2).removeClass('active');     
		$(this3).next().addClass('active');
		$(this3).removeClass('active'); 
	} else {
		$(this2).removeClass('active');
		$(this3).removeClass('active'); 
		$(idin+' span:first').addClass('active');
		$(id+'nav a:first').addClass('active');
	}
});
$(idin+'> ins').live('click', function (event) { 

	var this2 = $(idin+'span.active');
	
	if (!$(this2).is(':first-child')) {
		$(this2).prev().addClass('active');
		this2.removeClass('active');
	} else {
		this2.removeClass('active');
		$(idin+' span:last').addClass('active');
	}
});

intervalID = setInterval( "$(idin+' > del').click();",4000 );

$('.a1').click(function(){
		$('.a1, .a2, .a3').removeClass('active');
		$('.sp1, .sp2, .sp3').removeClass('active');
	$('.sp1, .a1').addClass('active');
});
$('.a2').click(function(){
		$('.a1, .a2, .a3').removeClass('active');
		$('.sp1, .sp2, .sp3').removeClass('active');
	$('.sp2, .a2').addClass('active');
   });
$('.a3').click(function(){
		$('.a1, .a2, .a3').removeClass('active');
		$('.sp1, .sp2, .sp3').removeClass('active');
    $('.sp3, .a3').addClass('active');
   });
});



$(document).ready(function(){

	$('#range li').click(function(){
			$('#range li').removeClass('active');
			$('#range li h3').removeClass('active');
			$('#range li div').removeClass('active');
		
			$(this).addClass('active');
			$(this).children().addClass('active');
			
	});

});
