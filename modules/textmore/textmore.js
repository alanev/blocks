$('.textmore__toggle').click(function(){
	var texmore = $(this).parents('.textmore'),
		display = console.log( $(this).css('display') );
	texmore.find('.textmore__toggle').toggleClass('active');
	if ( display === 'block' ){
		texmore.find('.textmore__hidden').slideToggle();
	}else{
		texmore.find('.textmore__hidden').toggle();
	}
	return false;
});