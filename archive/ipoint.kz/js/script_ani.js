$(document).ready(function() {

	$.fn.is_on_screen = function(){
		var win = $(window);
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();
	 
		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();
	 
		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

if( $('#s01 img').length > 0 ) {
	if( $('#s01 img').is_on_screen() ) {
		$(this).addClass('none');   
	} else {
		$(this).addClass('comeon');
	}
}
});

$(window).scroll(function(){ // bind window scroll event
	if( $('#s01 img').length > 0 ) {
		if( $('#s01 img').is_on_screen() ) {
			$(this).addClass('none');   
		} else {
			$(this).addClass('comeon');
		}
	}
});