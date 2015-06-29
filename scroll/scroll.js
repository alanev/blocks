var scroll = new Object({
	content: {
		height: function () {
			return $('.scroll__content').height();
		}
	},
	window: {
		height: function () {
			return $('.scroll').height();
		}
	},
	pane: {
		height: function () {
			return scroll.window.height() / scroll.content.height() * 100 + '%';
		}
	},
	moveanable: false
});
$(function () {
	$('.scroll__pane').css({
		height: scroll.pane.height()
	});
});
$(document).click(function (e) {
	if( e.button === 1){
		scroll.moveanable = true;
	}else{
		scroll.moveanable = false;
	}
	console.log(scroll.moveanable);
});
$('.scroll__bar').click(function (e) {
	// console.log( e.pageY / ( scroll.window.height ) );
});