$(function(){

	var image = 0;

	$(".left-arrow").click(function(){

		image--;
		if(image < 0)
			image = 0;
		$(".images").animate({"margin-left":-(image*140)});
		return false;
	
	})

	$(".right-arrow").click(function(){

		console.log($(".alt-img").length + " " + image);

		image++;
		if (image+6 > $(".alt-img").length)
			image = $(".alt-img").length-6;
		$(".images").animate({"margin-left":-(image*140)});
		return false;
	
	})

	$(".alt-img").click(function(){

		$(".main-img img").attr('src', $(this).data('img'));
		$('.alt-img').removeClass("active");
		$(this).addClass("active");

	})

	$(".feedback").each(function(){

		$(this).height($(this).find(".feedback-body").height());

	})

})