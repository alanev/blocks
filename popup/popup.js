var page = $('.page'),
	pageWidth = page.width(),
	popupActiveClass = 'open',
	popupOpen = function (popupName) {
		if (page.width() != pageWidth) {
			page.addClass('lock').css({ 'margin-right': page.width() - pageWidth });
		}
		$('[data-popup=' + popupName + ']').addClass(popupActiveClass);
	},
	popupOpenByHash = function () {
		if (location.hash != '' && location.hash.indexOf('#popup/') >= 0) {
			popupOpen(location.hash.replace('#popup/', ''));
		}
	},
	popupClose = function (popup) {
		page.removeClass('lock').css({ 'margin-right': '' });
		$(popup).removeClass(popupActiveClass);
		history.replaceState('', '', location.pathname);
	};

$('.popup__content').click(function () {
	return false;
});
$('.popup').click(function () {
	popupClose(this);
});
$('.popup__close').click(function () {
	popupClose($(this).parents('.popup'));
});