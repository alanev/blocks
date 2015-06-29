var page = $('.page'),
	pageWidth = page.width(),
	popup = {
		activeClass: 'open',
		open: function (popupName) {
			page.addClass('lock').css({ 'margin-right': page.width() - pageWidth });
			document.querySelector('[data-popup="' + popupName + '"]').classList.add(this.activeClass);
		},
		openByHash: function () {
			if (location.hash != '' && location.hash.indexOf('#popup/') >= 0) {
				this.open(location.hash.replace('#popup/', ''));
			}
		},
		close: function (popup) {
			page.removeClass('lock').css({ 'margin-right': '' });
			popup.removeClass(this.activeClass);
			history.replaceState('', '', location.pathname);
		}
	};

window.addEventListener('load', function (e) {
	popup.openByHash();
});
window.addEventListener('hashchange', function (e) {
	popup.openByHash();
});

$('.popup__close,.popup__overlay').click(function () {
	popup.close($(this).parents('.popup'));
});