var css = ['flex','flexWrap','transform'],
	styles = document.createElement('div').style;

for (var i = 0; i < css.length; i++) {
	var cssProperty = css[i],
		cssPropertyUpper = cssProperty.slice(0,1).toUpperCase() + cssProperty.slice(1),
		cssPropertyWebkit = 'webkit' + cssPropertyUpper,
		cssPropertyMoz = 'Moz' + cssPropertyUpper,
		cssPropertyValue = typeof styles[cssProperty],
		cssPropertyWebkitValue = typeof styles[cssPropertyWebkit],
		cssPropertyMozValue = typeof styles[cssPropertyMoz];

	if ( !(cssPropertyValue != 'undefined' || cssPropertyWebkitValue != 'undefined' || cssPropertyMozValue != 'undefined') ) {
		document.body.style.marginTop = '50px';
		document.querySelector('.errors').style.display = 'block';
		document.querySelector('.errors__old').style.display = 'block';
		
		console.log('Your browser does not support %d',cssProperty);
		break;
	}
}

for (var key in styles) {
	if (key.indexOf('flex') >= 0 || key.indexOf('Flex') >=0 ) {
		console.log(key);
	}
	console.log(key);
	alert(key);
}

document.querySelector('.errors__close').onclick = function () {
	this.parentNode.style.display = 'none';
}