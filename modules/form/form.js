$('form').submit(function () {
	var form = $(this);
	$.ajax({
		url: form.attr('action'),
		method: form.attr('method'),
		dataType: 'html',
		data: form.serialize(),
		success: function (response) {
			popup.open('thanks');
		},
		error: function (response) {
			alert('Ошибка при отправке формы');
		}
	});
	return false;
});
$(document).ready(function () {
	$('.form__input[type=tel]').mask('+7(###)###-##-##');
});