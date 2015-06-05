$('.select').click(function(){
	$('.select').not(this).removeClass('open');
	$(this).toggleClass('open');
	if( $(this).hasClass('open') ){
		$(this).find('.select__item').click(function(){
			if( !$(this).hasClass('selected') ){
				addSelect(this);
			}
		});
	}
	return false;
});
$(document).click(function(){
	$('.select.open').removeClass('open');
});
function addSelect(elem){
	$(elem).addClass('selected').siblings().removeClass('selected');
	var value = $(elem).html();
	$(elem).parents('.select').find('.select__selected').html(value).addClass('selected');
	$(elem).parents('.select').find('.select__input').attr('value',value).change();
}