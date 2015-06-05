
/*-----  Up  -----*/
var upStart = 300,
	upIs = false,
	up = $('.up'),
	upDown,
	scrollTop = function(y){
		upDown = $(window).scrollTop();
		$('html,body').animate({'scrollTop':y});
	};
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if( scrollTop >= upStart ){
		if(!upIs){
			up.addClass('active');
			upIs = true;
			console.log(scrollTop);
		}
	}else if(upIs){
		up.removeClass('active');
		upIs = false;
		console.log(scrollTop);
	}
	if( scrollTop >=upDown ){
		up.removeClass('down');
	}
});
up.click(function(){
	if($(this).hasClass('down')){
		scrollTop(upDown);
		up.removeClass('down');
	}else{
		scrollTop(0);
		up.addClass('down');
	}
});
$(window).trigger('scroll');