$('.slidetoggle').click(function(){
	$(this).removeAttr('hidden').toggleClass('active').next().slideToggle();
});