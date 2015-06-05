$('.input-numb__change').click(function(){
	var input = $(this).siblings('.input-numb__input'),
		value = input.val(),
		step = $(this).index() - 1;
	if( ( value >= 1 && step === -1 ) || ( value >=0 && step === 1 ) ){
		input.val( parseInt(input.val()) + step );
	}
});
$('.input-numb__input').keyup(function(d){
	var input = $(this),
		result = input.val();
	if( !( result >= 0 ) ){
		input.val( result.replace(d.key,'') );
	}
});