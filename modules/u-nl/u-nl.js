// shortcut `on` for `addEventListener`
HTMLElement.prototype.on = HTMLElement.prototype.addEventListener;

// `forEach` & `map` methods for `NodeList`
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;

// `on` method for `NodeList`
NodeList.prototype.on = function (event, callback) {
	this.forEach(function (item, index) {
		item.on(event, callback);
	});
};

(function () {

	// shortcut for `document.querySelectorAll`
	var $$ = function (selector, root) {
		
		// query select
		root = root || document;
		var nl = root.querySelectorAll(selector);
		
		// `classList` array
		nl.classList = nl.map(function (item) {
			return item.classList;
		});
		nl.classList.prototype = Array.prototype;
		
		nl.classList.prototype.add = function (classList) {
			this.forEach(function (node) {
				node.add(classList);
			});
		};
		nl.classList.prototype.remove = function (classList) {
			this.forEach(function (node) {
				node.remove(classList);
			});
		};
		nl.classList.prototype.contains = function (classList) {
			var is = false;
			this.forEach(function (node) {
				if (node.contains(classList)) {
					is = true;
				}
			});
			return is;
		};
		
		return nl;
	};
	
	$$.prototype = NodeList.prototype;
	
	window.$$ = $$;
	
})();