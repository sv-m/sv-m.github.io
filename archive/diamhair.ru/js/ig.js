/* ----------------------- Анимации появления ----------------------- */
/*$(document).ready(function() {

	setTimeout(function(){
		$('#section4 .banner-form-span').removeClass('none').addClass('animated bounceInRight');
	}, 1000);
	
	setTimeout(function(){
		$('#uno img').removeClass('none').addClass('animated bounceInRight');
	}, 1000);
	
});*/

/* ----------------------- Анимации при скроле ----------------------- */	
$(document).ready(function() {
	
	$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();	
		if (currentScroll > 100) 		{
			$('#section1 .banner-form-span').removeClass('none').addClass('animated bounceInRight');
		} 
		if (currentScroll > 1500)	{
			

			setTimeout(function(){
				$('#section3 .fitotigh-span:nth-child(1)').removeClass('none').addClass('animated fadeInDown');
			}, 0);
			
			setTimeout(function(){
				$('#section3 .fitotigh-span:nth-child(2)').removeClass('none').addClass('animated fadeInDown');
			}, 500);

			setTimeout(function(){
				$('#section3 .fitotigh-span:nth-child(3)').removeClass('none').addClass('animated fadeInDown');
			}, 1000);

		}
		if (currentScroll > 2100)	{
			$('#section4 .banner-form-span').removeClass('none').addClass('animated bounceInRight');			
		}
		if (currentScroll > 3100)	{
			$('#section5 .problem-img').removeClass('none').addClass('animated bounceInLeft');			
		}
		if (currentScroll > 3800)	{
			$('#section6 .advantages-img').removeClass('none').addClass('animated bounceInLeft');			
		}
		if (currentScroll > 5500)	{	
			setTimeout(function(){
				$('#section8 .ba-span:nth-child(1)').removeClass('none').addClass('animated fadeInDown');
			}, 0);
			
			setTimeout(function(){
				$('#section8 .ba-span:nth-child(2)').removeClass('none').addClass('animated bounceInRight');
			}, 500);

			setTimeout(function(){
				$('#section8 .ba-span:nth-child(3)').removeClass('none').addClass('animated fadeInDown');
			}, 1000);
			
			setTimeout(function(){
				$('#section8 .ba-span:nth-child(4)').removeClass('none').addClass('animated bounceInRight');
			}, 1500);
		}
		if (currentScroll > 9800) 		{
			$('#section12 .banner-form-span').removeClass('none').addClass('animated bounceInRight');
		}
	});

			
	
});



window.onscroll = function() {

			var curr =  $(window).scrollTop();
			$('#help').html(curr);

}
